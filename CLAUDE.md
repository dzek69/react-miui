# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React component library inspired by old MIUI design. Pre-1.0 (v0.32.1), breaking changes may occur. Uses pnpm as package manager.

## Commands

- `pnpm run storybook` — Start dev server (Storybook on port 6006)
- `pnpm test` — Run Jest tests
- `pnpm run typecheck` — Type-check without emitting
- `pnpm run lint` / `pnpm run lint:fix` — Lint with @ezez/eslint
- `pnpm run compile` — Build both ESM (`/esm`) and CJS (`/dist`) outputs
- `pnpm run docs` — Generate TypeDoc documentation

## Architecture

### Styling: Stitches CSS-in-JS

All styling uses `@stitches/react`. SCSS was fully removed in v0.29.0. The theme system is defined in `src/theme.ts`:

- **Theme tokens**: Colors (`$background`, `$text`, `$mainColor`, etc.), with a complete `darkTheme` variant
- **Unit converters**: `pxToRem()`, `dimensionsPxToRem()` (ratio 3), `borderPxToRem()` (ratio 1), `fontPxToRem()` (ratio 1.666) — always use these instead of raw rem/px values
- **CSS utilities**: `mx`, `my`, `px`, `py`, `size` — registered as Stitches utils

Consumers must import `cssReset`, call `injectGlobalStyles()`, and use `getCssText()` for SSR.

### Component File Convention

Components follow this file structure:
- `Component.tsx` — Logic and exports
- `Component.styled.ts` — Stitches `styled()` definitions
- `Component.css.ts` — CSS objects (when styles are complex, typed as `satisfies ThemeCSS`)
- `Component.stories.tsx` — Storybook stories

Styled components are prefixed with `Styled` (e.g., `StyledInput`). Components export CSS selectors via `.toString()` and sub-selectors as `ComponentSubSelector` named exports.

### Component Patterns

- **Subcomponent pattern**: `List.Header`, `List.Item`, `Modal.RemovePadding` — attached as static properties
- **Variants as boolean props**: `<Button inline outline />` not `variant="inline-outline"`
- **Forward refs**: Most components forward refs using `@bedrock-layout/use-forwarded-ref`
- **Generic components**: `Input<T>` supports typed values via `Value<T>` type (`string | { value: string, label: string }`)

### Module System

Dual ESM + CJS output. Post-compilation scripts in `build-scripts/` resolve TypeScript path aliases via `resolve-tspaths`. CJS output gets an injected `package.json` with `"type": "commonjs"`.

### TypeScript

Strict mode with `exactOptionalPropertyTypes: true` and `noUncheckedIndexedAccess: true` — array access returns `T | undefined`.

### Source Layout

- `src/components/form/` — Input, TextArea, Select, Toggle, Checkbox, Choice, ColorPicker, Label
- `src/components/layout/` — Header, StickyHeader, List, Section, Card, Table, SearchContainer
- `src/components/ui/` — Button, Modal, Drawer, Loader variants, Toaster, Pop, Action, Progress, etc.
- `src/components/icons/` — Icon base + built-in icons (Back, Forward, Search, Trash, etc.)
- `src/components/utils/` — If, HandleEsc, Spacer, Gap
- `src/utils/` — Hooks (useKeyPress, useTailSpin)
- `src/types/` — Value<T>, ObjectValue, fnWithProps

### Changelog Format

Uses [EZEZ Changelog](https://ezez.dev/guidelines/changelog/) format with Semantic Versioning. Commit messages use prefix conventions: `+` added, `!` fixed, `=` changed, `-` removed, `!-` breaking+removed, `!+` breaking+added.
