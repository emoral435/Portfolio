#!/usr/bin/env python3
"""Update portfolio experience data from resume PDF.

Usage:
    python3 scripts/update-experience.py

Reads public/EduardoMoralesResume.pdf, extracts experience entries
(role, company, location, dates, achievement bullets), and writes them
into src/lib/experience-service.ts.

- Existing companies in the TS file have their achievements updated.
- New companies found in the resume are inserted as skeleton entries
  at the correct chronological position (descending by start date).
- Companies in the TS file not found in the resume are left untouched.
"""

import re
import sys
from pathlib import Path

from pypdf import PdfReader


RESUME_PATH = Path("public/EduardoMoralesResume.pdf")
TS_PATH = Path("src/lib/experience-service.ts")

MONTH_ABBREV = {
    "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3,
    "May": 4, "Jun": 5, "Jul": 6, "Aug": 7,
    "Sep": 8, "Oct": 9, "Nov": 10, "Dec": 11,
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


def parse_date(date_str: str) -> tuple[int, int]:
    """Parse 'July 2026' or 'Jul. 2026' into (year, month_index)."""
    s = date_str.strip().replace(".", "")
    parts = s.split()
    if len(parts) < 2:
        return (0, 0)
    month = MONTH_ABBREV.get(parts[0][:3], 0)
    year = int(parts[1])
    return (year, month)


def date_score(date_str: str) -> int:
    """Higher = more recent. Used for descending chronological sort."""
    year, month = parse_date(date_str)
    return year * 12 + month


def parse_experience(text: str) -> list[dict]:
    """Parse the Experience section of the resume.

    Returns a list of dicts, each with keys:
        company_name, location, role, start_date, end_date, achievements
    """
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
        r"(January|February|March|April|May|June|July|August|"
        r"September|October|November|December|"
        r"Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\.?\s+\d{4}"
    )

    entries: list[dict] = []
    current: dict | None = None

    for line in exp_lines:
        s = line.strip()
        if not s or s == "Experience":
            continue

        # Role or Company line - no bullets
        if not s.startswith("\u2022"): # \u2022 is the unicode for a bullet character btw
            date_matches = list(date_re.finditer(s))
            if len(date_matches) >= 2:
                if current is not None and current.get("achievements") and current.get("company_name"):
                    entries.append(current)

                role = s[: date_matches[0].start()].strip()
                start = date_matches[0].group().replace(".", "")
                end = date_matches[-1].group().replace(".", "")

                current = {
                    "company_name": "",
                    "location": "",
                    "role": role,
                    "start_date": start,
                    "end_date": end,
                    "achievements": [],
                }
                continue

            # Company line: no bullet, no dates, follows role line
            if current is not None and not current["company_name"]:
                # First word is company name, rest is location
                parts = s.split(1)
                company = parts[0]
                location = parts[1] if len(parts) > 1 else ""
                current["company_name"] = company
                current["location"] = location
                continue

        # Bullet points
        if s.startswith("\u2022"):
            if current is not None:
                current["achievements"].append(s.lstrip("\u2022 ").strip())
        elif current is not None and current.get("achievements"): # dealing with bullet points that have 2 lines - so the second line does not include that bullet point
            current["achievements"][-1] += " " + s

    if current is not None and current.get("achievements") and current.get("company_name"):
        entries.append(current)

    return entries


def scan_existing_companies(content: str) -> list[dict]:
    """Scan the TS file for existing Company definitions.

    Returns list of dicts in file order with keys:
        var_name, name, start_date, end_date,
        block_text (the full const declaration + comment),
        match_start, match_end
    """
    pattern = re.compile(
        r"(?://\s*-+\s*.+?\s*-+\s*\n\s*)?"
        r"const\s+(\w+)\s*=\s*new\s+Company\s*"
        r"\(\s*(\{.*?\})\s*\)\s*;",
        re.DOTALL,
    )

    companies = []
    for match in pattern.finditer(content):
        var_name = match.group(1)
        block = match.group(2)

        name_m = re.search(r'name:\s*"([^"]*)"', block)
        start_m = re.search(r'startDate:\s*"([^"]*)"', block)
        end_m = re.search(r'endDate:\s*"([^"]*)"', block)

        companies.append({
            "var_name": var_name,
            "name": name_m.group(1) if name_m else "",
            "start_date": start_m.group(1) if start_m else "",
            "end_date": end_m.group(1) if end_m else "",
            "block_text": match.group(0),
            "match_start": match.start(),
            "match_end": match.end(),
        })

    return companies


def replace_achievements(content: str, var_name: str, bullets: list[str]) -> str:
    """Replace the achievements array within an existing Company block."""
    bullet_lines: list[str] = []
    for i, b in enumerate(bullets):
        if '"' in b:
            print(f"  WARNING: bullet contains double quote, may need escaping:"
                  f" {b[:60]}...")
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

    old = content[ach_idx: close_idx + len(close_marker)]
    return content.replace(old, new_block, 1)


def generate_var_name(company_name: str, existing_vars: set[str]) -> str:
    """Generate a valid TS variable name from a company name."""
    name = re.sub(r"[^a-zA-Z0-9\s]", "", company_name)
    parts = name.split()
    var_name = "".join(p.capitalize() for p in parts)
    if not var_name:
        var_name = "UnknownCompany"

    base = var_name
    counter = 2
    while var_name in existing_vars:
        var_name = f"{base}{counter}"
        counter += 1

    return var_name


def generate_company_block(var_name: str, entry: dict) -> str:
    """Generate the TypeScript code for a new Company definition."""
    lines = [
        f"const {var_name} = new Company({{\n"
        f'  name: "{entry["company_name"]}",',
        f'  location: "{entry["location"]}",',
        f'  role: "{entry["role"]}",',
        f'  startDate: "{entry["start_date"]}",',
        f'  endDate: "{entry["end_date"]}",',
        '  summary: "",',
        "  achievements: [",
    ]
    for i, b in enumerate(entry["achievements"]):
        if '"' in b:
            print(f"  WARNING: bullet contains double quote, may need escaping:"
                  f" {b[:60]}...")
        comma = "," if i < len(entry["achievements"]) - 1 else ""
        lines.append(f'    "{b}"{comma}')
    lines.extend([
        "  ],",
        '  impact: "",',
        "  technologies: [],",
        "});",
    ])
    return "\n".join(lines)


def find_insert_position(content: str, new_start_date: str) -> tuple[str, int]:
    """Find where to insert the new company block.

    Returns (insert_before_var, insert_pos).
    If the new company is the most recent, insert_pos points
    to the first existing block's comment.
    If it is the oldest, returns ("", pos_before_myExperience).
    """
    companies = scan_existing_companies(content)
    new_score = date_score(new_start_date)

    for comp in companies:
        if date_score(comp["start_date"]) < new_score:
            pos = comp["match_start"]
            comment_pos = content.rfind("// ----------", 0, pos)
            if comment_pos >= 0 and (pos - comment_pos) < 100:
                pos = comment_pos
            return comp["var_name"], pos

    pos = content.find("\nconst myExperience:")
    if pos == -1:
        print("  WARNING: could not find myExperience array")
        return "", len(content)
    return "", pos


def add_new_company(content: str, entry: dict) -> str:
    """Insert a new company definition and add it to myExperience."""
    existing = scan_existing_companies(content)
    existing_vars = {c["var_name"] for c in existing}

    var_name = generate_var_name(entry["company_name"], existing_vars)
    comment = f"// ---------- {entry['company_name']} ----------\n"
    new_block = generate_company_block(var_name, entry)

    print(f"  NEW: {entry['company_name']} -> const {var_name}")

    insert_before_var, insert_pos = find_insert_position(content, entry["start_date"])

    trimmed_prefix = content[:insert_pos].rstrip("\n\r ")
    trimmed_suffix = content[insert_pos:].lstrip("\n\r ")
    insertion = "\n\n" + comment + new_block + "\n\n"
    content = trimmed_prefix + insertion + trimmed_suffix

    content = update_my_experience_array(content, var_name, entry["start_date"])

    return content


def update_my_experience_array(content: str, new_var: str, start_date: str) -> str:
    """Insert the new variable at the correct position in myExperience array."""
    exp_match = re.search(
        r"const\s+myExperience:\s*Company\[\]\s*=\s*\[(.*?)\]\s*;",
        content,
        re.DOTALL,
    )
    if not exp_match:
        print("  WARNING: could not find myExperience array")
        return content

    existing_vars_str = exp_match.group(1)
    existing_vars = [v.strip() for v in existing_vars_str.split(",") if v.strip()]

    var_dates: dict[str, str] = {}
    for v in existing_vars:
        m = re.search(
            rf'const\s+{re.escape(v)}\s*=\s*new\s+Company\('
            rf'.*?startDate:\s*"([^"]+)"',
            content,
            re.DOTALL,
        )
        if m:
            var_dates[v] = m.group(1)

    new_score = date_score(start_date)

    insert_idx = len(existing_vars)
    for i, v in enumerate(existing_vars):
        if v in var_dates and date_score(var_dates[v]) < new_score:
            insert_idx = i
            break

    existing_vars.insert(insert_idx, new_var)
    new_array = f"const myExperience: Company[] = [{', '.join(existing_vars)}];"
    return content[: exp_match.start()] + new_array + content[exp_match.end():]


def main() -> None:
    print("Reading resume PDF...")
    raw = extract_text(RESUME_PATH)
    raw = normalize(raw)

    print("Parsing experience entries...")
    entries = parse_experience(raw)

    for e in entries:
        print(f"  {e['company_name']}: {len(e['achievements'])} bullet(s)")

    print("Updating experience-service.ts...")
    ts = TS_PATH.read_text()
    original = ts

    existing = scan_existing_companies(ts)
    existing_names = {c["name"]: c["var_name"] for c in existing}

    updates = []
    new_entries = []
    for e in entries:
        if e["company_name"] in existing_names:
            updates.append((existing_names[e["company_name"]], e["achievements"]))
        else:
            new_entries.append(e)

    for var_name, achievements in reversed(updates):
        print(f"  UPDATE: {var_name}")
        ts = replace_achievements(ts, var_name, achievements)

    for e in new_entries:
        ts = add_new_company(ts, e)

    if ts == original:
        print("  No changes made.")
    else:
        TS_PATH.write_text(ts)
        print(f"  Wrote {TS_PATH}")

    print("Done.")


if __name__ == "__main__":
    main()
