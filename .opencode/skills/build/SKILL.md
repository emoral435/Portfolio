---
name: build
description: Instructions for running and verifying production builds
license: MIT
compatibility: opencode
metadata:
  workflow: build
---

## What I do

Provides step-by-step guidance for executing and verifying the production build of this Next.js project.

## Build steps

1. Run `npm run build` to generate the production build
2. Verify the build completes without errors
3. Check that output lands in `./dist/`
4. If there are type errors or lint issues, fix them first and re-run
5. After a successful build, you can start the production server with `npm run start`

## Key paths

- Build output: `./dist/`
- Source: `src/`

## Common issues

- TypeScript strict mode errors will block the build -- fix type annotations first
- Missing or broken image imports in `next/image` can cause build failures
- Ensure all MUI imports resolve correctly (they are external dependencies)
