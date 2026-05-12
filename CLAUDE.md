# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
pnpm dev              # Start VitePress demo/docs dev server
pnpm build:package    # Full build: gen-version → clean → Vite lib build → Gulp styles
pnpm build:lib        # Vite library build only (ES + CJS via preserveModules)
pnpm build:style      # Gulp PostCSS styles build only
pnpm build:site       # VitePress static site build
pnpm test             # Run Vitest tests (jsdom)
pnpm lint             # ESLint with --fix (Vue, TS, JS)
pnpm format           # Prettier on src/
pnpm type-check       # vue-tsc --noEmit
```

## Architecture

**bin-ui-design** is a Vue 3 component library (~60+ components), published as `bin-ui-design` on npm. Uses `@` as the alias for `src/`.

### Build output

- `es/` — ES module build (`.mjs`, `preserveModules`)
- `lib/` — CommonJS build (`.js`, `preserveModules`)
- `dist/@types/` — generated `.d.ts` declarations

Vue is externalized — consumers must provide it. CSS is extracted to separate files.

### Component structure

Every component follows this directory layout:

```
src/<component>/
  index.ts          # Re-exports: `export { default as B<Name> } from './src/<Name>.vue'`
  src/
    <Name>.vue      # SFC component (JSX also supported via @vitejs/plugin-vue-jsx)
    types.ts        # Props + instance type exports
  styles/
    index.css       # Component styles (PostCSS with nested, color-mix, each, for plugins)
```

Components are prefixed with `B` (e.g., `BButton`, `BTable`) — the prefix is configurable via `create({ componentPrefix: 'X' })`.

### Registration / entry

- `src/index.ts` — library entry, re-exports everything
- `src/components.ts` — barrel file for all component `export *` lines
- `src/preset.ts` — full `BinUI` installer (uses `create()`) with all components, directives, and service-style plugins (LoadingBar, Message, MessageBox, Notice)
- `src/create.ts` — `create()` function returning a Vue plugin with `install(app)` that registers components/directives/plugins with configurable prefix

### Service-style components

`message`, `message-box`, `notice`, `loading-bar` — these are imperative APIs that create Vue app instances programmatically (see their `instance.ts` files).

### Internal modules (`_` prefix)

- `src/_utils/` — shared utilities: color, DOM helpers, resize events, config, aria, key codes, vnode helpers, etc.
- `src/_hooks/` — composables: `useTheme`, `useForm`, `useModal`, `useModalDrag`, `useLockScreen`, `useSortable`, etc.
- `src/_internal/` — shared internal components: popper, scrollbar, contextmenu, collapse/move transitions, empty state
- `src/_directives/` — Vue directives: `ClickOutside`, `ClickAnimation`, `Waves`, `RepeatClick`, `Loading`, `NoData`
- `src/_styles/` — global/base styles (PostCSS), icon fonts
- `src/_i18n/` — internationalization strings

### Config provider

`src/config-provider/` provides a global config context (zIndex, etc.) via Vue `provide/inject`. Use `setConfig()` from `_utils/config` to set global options at install time.

### Key dependencies

- `@popperjs/core` — positioning for tooltip/popover/dropdown
- `async-validator` — form validation
- `color` — color manipulation
- `dayjs` — date/time handling
- `sortablejs` — drag-and-drop (table)
- `mitt` — lightweight event emitter

### Styles

PostCSS pipeline with custom plugins: `postcss-nested`, `postcss-color-mix`, `postcss-each`, `postcss-for`, `postcss-import`, `postcss-functions`, `autoprefixer`. Styles are built separately via Gulp (`build/build-style.ts`) and output as plain CSS.
