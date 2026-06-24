#!/usr/bin/env python3
"""Update portfolio experience bullet points from resume PDF.

Usage:
    python3 scripts/update-experience.py

Reads public/EduardoMoralesResume.pdf, extracts bullet points for each
company, and writes them into src/lib/experience-service.ts.
Only Nextdoor, Enova, and Nextcloud achievements are updated; UIC is left
unchanged.
"""

import re
import sys
from pathlib import Path

from pypdf import PdfReader


RESUME_PATH = Path("public/EduardoMoralesResume.pdf")
TS_PATH = Path("src/lib/experience-service.ts")

# Map resume company name -> TS variable name
COMPANIES = {
    "Nextdoor": "Nextdoor",
    "Enova": "Enova",
    "Nextcloud": "Nextcloud",
}


def extract_text(pdf_path: Path) -> str:
    reader = PdfReader(pdf_path)
    parts = []
    for page in reader.pages:
        text = page.extract_text()
        if text:
            parts.append(text)
    return "\n".join(parts)


def normalize(s: str) -> str:
    """Replace PDF ligature characters with normal ASCII."""
    ligatures = {
        "\ufb00": "ff",
        "\ufb01": "fi",
        "\ufb02": "fl",
        "\ufb03": "ffi",
        "\ufb04": "ffl",
    }
    for old, new in ligatures.items():
        s = s.replace(old, new)
    return s


def parse_experience(text: str) -> dict[str, list[str]]:
    lines = text.split("\n")

    exp_start = None
    for i, line in enumerate(lines):
        if line.strip() == "Experience":
            exp_start = i
            break
    if exp_start is None:
        print("ERROR: could not find 'Experience' section in resume")
        sys.exit(1)

    section_end = len(lines)
    stops = {"Leadership", "Projects", "Technical Skills", "Education"}
    for i in range(exp_start + 1, len(lines)):
        if lines[i].strip() in stops:
            section_end = i
            break

    exp_lines = lines[exp_start:section_end]

    date_re = re.compile(
        r"(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\.?\s+\d{4}"
    )

    result: dict[str, list[str]] = {}
    current: str | None = None

    for line in exp_lines:
        s = line.strip()
        if not s:
            continue

        if not s.startswith("\u2022") and date_re.search(s):
            current = None
            continue

        matched = False
        for name in COMPANIES:
            if s.startswith(name):
                current = name
                result[name] = []
                matched = True
                break
        if matched:
            continue

        if s.startswith("\u2022"):
            if current is not None:
                result[current].append(s.lstrip("\u2022 ").strip())
        elif current is not None and result.get(current):
            result[current][-1] += " " + s

    return result


def replace_achievements(
    content: str, var_name: str, bullets: list[str]
) -> str:
    """Replace the achievements array in a Company block."""
    bullet_lines: list[str] = []
    for i, b in enumerate(bullets):
        if '"' in b:
            print(
                f"  WARNING: bullet contains double quote, may need escaping:"
                f" {b[:60]}..."
            )
        bullet_lines.append(f'    "{b}"' + ("," if i < len(bullets) - 1 else ""))
    new_block = "\n  achievements: [\n" + "\n".join(bullet_lines) + "\n  ],"

    marker = f"const {var_name} = new Company({{\n"
    idx = content.find(marker)
    if idx == -1:
        marker = f"const {var_name} = new Company({{"
        idx = content.find(marker)
    if idx == -1:
        print(f"  WARNING: could not find const {var_name}")
        return content

    search_start = idx + len(marker)
    ach_marker = "\n  achievements: [\n"
    ach_idx = content.find(ach_marker, search_start)
    if ach_idx == -1:
        print(f"  WARNING: could not find achievements for {var_name}")
        return content

    close_marker = "\n  ],"
    close_idx = content.find(close_marker, ach_idx + len(ach_marker))
    if close_idx == -1:
        print(f"  WARNING: could not find closing of achievements for {var_name}")
        return content

    old = content[ach_idx : close_idx + len(close_marker)]
    return content.replace(old, new_block, 1)


def main() -> None:
    print("Reading resume PDF...")
    raw = extract_text(RESUME_PATH)
    raw = normalize(raw)

    print("Parsing experience bullets...")
    data = parse_experience(raw)

    for name, bullets in data.items():
        print(f"  {name}: {len(bullets)} bullet(s)")

    print("Updating experience-service.ts...")
    ts = TS_PATH.read_text()
    original = ts

    for name, var_name in COMPANIES.items():
        if name not in data:
            print(f"  SKIP: {name} not found in resume")
            continue
        ts = replace_achievements(ts, var_name, data[name])

    if ts == original:
        print("  No changes made.")
    else:
        TS_PATH.write_text(ts)
        print(f"  Wrote {TS_PATH}")

    print("Done.")


if __name__ == "__main__":
    main()
