# AGENTS.md - Developer Guidelines

This is a Next.js 15 portfolio website using TypeScript, React 18, and Material UI.

## Build Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production (output: ./dist/)
npm run start    # Start production server
```

**No test framework is configured.** If adding tests, use Vitest or Jest.

**No lint command in package.json.** Run ESLint via npx:
```bash
npx eslint "src/**/*.{ts,tsx}"
```

## Code Style Guidelines

### General
- Next.js App Router with TypeScript (strict mode enabled)
- React 18 functional components
- MUI (Material UI) for UI components with Emotion styling
- File-based routing in `src/app/`

### TypeScript
- `strict: true` enabled in tsconfig.json
- Use explicit interfaces for component props (e.g., `interface ICompany`)
- Avoid `any` - use proper types or `unknown` with type guards
- Use `readonly` for immutable class properties

### File Naming
- Components: `PascalCase.tsx` (e.g., `Job.tsx`, `StickyNav.tsx`)
- Utilities/lib: `camelCase.ts` (e.g., `experience-service.ts`, `articles.ts`)
- Pages: `page.tsx`, `layout.tsx` (Next.js convention)
- Types: `src/app/types/index.ts` for shared types

### Imports
- Standard library imports first
- External packages (MUI, Next.js, etc.)
- Relative imports for local modules
- Example:
  ```typescript
  import Image from 'next/image'
  import { Box, Button } from "@mui/material"
  import { Company } from "../../lib/experience-service"
  ```

### Component Structure
- Use named exports for components
- Props interfaces above the component when needed
- Prefer arrow functions for components: `const Component = ({ prop }: Props) => { ... }`
- Use MUI's `sx` prop for inline styling
- Use `useTheme()` hook for MUI theme access

### Styling
- Use MUI `sx` prop for dynamic styling
- Use `Box`, `Typography`, `Chip` from `@mui/material`
- Define responsive values with MUI breakpoints: `{ xs: ..., md: ... }`
- Use `alpha()` from `@mui/material/styles` for transparent colors

### Error Handling
- Avoid silent failures - handle undefined/null states explicitly
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- No try/catch visible in codebase; add when calling external APIs

### CSS/MUI Patterns
- Use `ThemeProvider` from `@mui/material` for theming
- Use `createTheme` for custom themes
- Access theme values via `useTheme()` hook
- Define font stacks consistently (e.g., `'Roboto Mono, ui-monospace, SFMono-Regular, Menlo, monospace'`)

### Next.js Specific
- Use `next/image` for images with `fill`, `sizes`, `priority` props
- Use `next/font` if adding custom fonts
- Use `export const revalidate` or `getStaticProps` for SSG
- Client components: `'use client'` directive at top

### Accessibility
- Include `alt` text for all images
- Use semantic HTML (`<section>`, `<article>`, etc.)
- External links: `rel="noopener noreferrer"`

### Git Conventions
- Branch naming: `feature/`, `fix/`, `chore/` prefixes
- Commit messages: descriptive, imperative mood
- PR template in `.github/PULL_REQUEST_TEMPLATE/`

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── blog/           # Blog pages (markdown articles)
│   ├── page.tsx        # Main page
│   ├── layout.tsx      # Root layout
│   └── types/          # Shared type definitions
├── components/          # Reusable React components
│   ├── Job/
│   ├── Project/
│   ├── StickyNav/
│   └── ...
└── lib/                 # Utilities and services
    ├── experience-service.ts
    ├── articles.ts
    └── ...
```

## Environment Variables
- Create `.env.local` for local development
- Use `NEXT_PUBLIC_*` prefix for client-accessible env vars
- `.env` file exists - do not commit secrets
