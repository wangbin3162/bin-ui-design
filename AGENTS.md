# Repository Guidelines

## Project Structure & Module Organization
- Core source lives in `src/`. Each component follows a consistent layout: `src/<component>/src/*` for implementation, `src/<component>/styles/index.css` for styles, and `src/<component>/index.ts` for exports.
- Shared utilities are in `src/_utils/`.
- Tests are colocated under component folders, usually `src/<component>/test/*.test.ts(x)`.
- Documentation/demo site content is under `demo/` (VitePress pages, component demos, and public assets).
- Build scripts are in `build/`. Generated outputs are `es/`, `lib/`, and `dist/`.

## Build, Test, and Development Commands
- `pnpm install`: install dependencies (Node `>=20`).
- `pnpm dev`: start the VitePress docs/demo site locally.
- `pnpm build:package`: generate version metadata, clean old outputs, then build library + styles.
- `pnpm build:site`: build the documentation site.
- `pnpm test`: run Vitest test suite (`jsdom`, globals enabled).
- `pnpm lint`: run Oxlint + ESLint with auto-fix.
- `pnpm type-check`: run TypeScript checks for core and build configs.
- `pnpm format`: format repository files with Prettier.

## Coding Style & Naming Conventions
- Use 2-space indentation, LF line endings, UTF-8, and max 100 columns (`.editorconfig`).
- Prettier rules: single quotes, no semicolons, trailing commas disabled.
- Vue component files use PascalCase (for example `Button.vue`); folders and style entry files use lowercase kebab-style paths.
- Keep exports centralized in each component `index.ts` and in `src/index.ts`.
- Do not hand-edit generated directories (`es/`, `lib/`, `dist/`).

## Testing Guidelines
- Framework: Vitest + Vue Test Utils.
- Place tests near the component in `test/` and name them `*.test.ts` or `*.test.tsx`.
- Cover render behavior, props/events, and regressions for bug fixes.
- Run `pnpm test` before opening a PR; run `pnpm type-check` for TS-heavy changes.

## Commit & Pull Request Guidelines
- Existing history uses short, prefix-style messages such as `feat: ...`, `fixed: ...`, `update: ...` (including Chinese summaries). Keep one logical change per commit.
- PRs should include: purpose/scope, key UI/API changes, linked issue (if any), and screenshots/GIFs for visual component changes.
- Before requesting review, ensure `pnpm lint`, `pnpm type-check`, and `pnpm test` pass.
