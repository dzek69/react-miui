All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.20.1] - 2022-06-08
### Fixed
- broken input styles
- broken textarea styles
### Dev
- added textarea storybook
### Added
- exported custom scrollbars as stitches styles

## [0.20.0] - 2022-06-08
### Added
- loader components: CoveringLoader, FullLoader, Loader, Loading, PopLoader
### Fixed
- exported `ThemeCSS` type (Stitches CSS type)
### Dev
- nodemon moved to dev deps
- added storybook
- added `Message` storybook
- added `Input` storybook
- `Input` converted to stitches

## [0.19.0] - 2022-05-09
### Added
- exported `styled` stitches library function, use this to properly style future components outside this lib
### Fixed
- incorrectly sized icons in headers
- header with buttons demo page crashing
### Breaking
- `PopOption` expects ReactElement as icon now
- you have to consume exported `getCssText` function to have proper styles with SSR
### Dev
- deps bump

## [0.18.1] - 2021-02-09
### Fixed
- importing the library

## [0.18.0] - 2021-02-09
### Breaking
- react 18.2 is now required

## [0.17.3] - 2023-01-19
### Changed
- all elements accepts `className` prop now
### Dev
- updated a bunch of deps

## [0.17.2] - 2022-10-26
### Changed
- modal has support for portals, enabled on document body by default
### Dev
- deps upgraded

## [0.17.1] - 2022-09-10
### Fixed
- toaster notification blocking clicking whole bottom of the screen
- actions on vertical header not having proper spaces and EqualActions not working correctly for vertical header at all

## [0.17.0] - 2022-07-26
### Added
- `KeyValue` component
### Dev
- upgraded library internals, linted code, upgraded demo import to spot missing exports

## [0.16.0] - 2022-07-18
### Added
- suggestions support for `Input`

## [0.15.9] - 2022-06-29
### Changed
- `Stats` accepts ReactNode as a value now instead of just a string

## [0.15.8] - 2022-06-21
### Added
- `onContextMenu` prop for `Toggle`

## [0.15.7] - 2022-06-03
### Fixed
- `Button` should allow multiple variants

## [0.15.6] - 2022-06-03
### Added
- `undeterminedClickValue` prop for `Toggle`

## [0.15.5] - 2022-05-06
### Added
- `If` helper component
### Changed
- added `left` variant for `Choice`
### Fixed
- `Choice` words wrapping
- too generic css selectors causing problems within `PopOption` sometimes
### Dev
- styles upgrade for demo

## [0.15.4] - 2022-04-19
### Added
- `className` support for `StickyHeader` and `Choice`
### Changed
- `Choice` is no longer all wide by default (available via variant)
- background clipping for header, improves custom colors support
- callback types improved for Choice

## [0.15.3] - 2022-04-07
### Fixed
- `Table` `wide` variant

## [0.15.2] - 2022-04-07
### Fixed
- variants support for `Table`

## [0.15.1] - 2022-04-07
### Added
- extra variants for `Table` component to stretch and center the table

## [0.15.0] - 2022-04-05
### Added
- `Table` component

## [0.14.1] - 2022-03-31
### Added
- `className` support to `Message` component

## [0.14.0] - 2022-03-19
### Added
- `Select` component
### Breaking
- `Toggle` `state` prop renamed to `value`
### Changed
- added support for `disabled` prop for `Toggle`
### Fixed
- missing `Stats` export

## [0.13.0] - 2022-02-23
### Added
- `Spacer` util component
- export of `HandleEsc` util component
### Changed
- added className support for `Action` and `ModalButtons`

## [0.12.1] - 2022-02-19
### Fixed
- crashes on some components when using without `react-use` installed

## [0.12.0] - 2022-02-19
### Added
- support for colored header
- custom scrollbars (opt-in)
- `Drawer` component
- `Stats` component
- dots icon
### Changed
- added a prop for controlling closing `Pop` on `Escape` key
- added className for sticky header content component
### Fixed
- header icons not reacting to text color change

## [0.11.0] - 2022-02-18
### Added
- config, heart, trash icons
- `Pop` component
### Changed
- checkmark icon
### Dev
- next.js upgrade

## [0.10.1] - 2022-02-17
### Fixed
- added missing export for Message

## [0.10.0] - 2022-02-17
### Added
- `Message` component

## [0.9.5] - 2022-02-17
### Changed
- all checkbox props to optional

## [0.9.4] - 2022-02-17
### Fixed
- checkbox onChange typings

## [0.9.3] - 2022-02-17
### Added
- disabled/readonly support for checkbox
- disabled/readonly support for input
### Changed
- checkbox styles to less collide with disabled/readonly styles
### Fixed
- input text prefix wrapping

## [0.9.2] - 2022-02-15
### Changed
- Added class support to list label and list value components
### Dev
- bumped some dev deps

## [0.9.1] - 2022-02-12
### Fixed
- class not applied even when specified in props of List elements
### Added
- List.Header class name support

## [0.9.0] - 2022-02-11
### Added
- choice component
- tabs selector component

## [0.8.0] - 2022-01-27
### Added
- modal component
- toaster component
### Changed
- List, Item, Header components support inset variant
- Item has new prop - `selected` for marking current active item
### Fixed
- Item border is on the item itself, not on the child element (fixes some compatibility issues and 1px shorter button element)
- passing `variant` prop into button html element on Button component
### Dev
- fixed menu scrolling

## [0.7.0] - 2022-01-11
### Added
- textarea component

## [0.6.0] - 2022-01-04
### Added
- input component
- label component (for forms)
- search container
- icons: battery, search
### Dev
- replaced deprecated type VFC with FC

## [0.5.2] - 2021-12-29
### Fixed
- button component not accepting most of the props

## [0.5.1] - 2021-12-17
### Fixed
- newest components not exported

## [0.5.0] - 2021-12-17
### Added
- Section component + container
- Card component

## [0.4.3] - 2021-11-27
### Fixed
- Button component crashing

## [0.4.2] - 2021-11-27
### Fixed
- A lot of components crashing on unknown imports due to missing extensions

## [0.4.1] - 2021-11-27
### Fixed
- Missing exports
### Changed
- Label and Value are subcomponents of Item
- Header is subcomponent of List

## [0.4.0] - 2021-11-27
### Added
- Support for splitting list item row into pieces
- Label, Value and Header components for list item
### Changed
- List item has no default padding
### Dev
- demo files from npm package
- some files added to gitignore

## [0.3.0] - 2021-11-21
### Added
- Toggle component
- Missing demo of `toolbar` variant of Header

## [0.2.0] - 2021-11-21
### Added
- `back` icon
- support for button icons in the header
- basic, WIP support for focus indicator
### Changed
- Header component no longer has padding by default
### Fixed
- Actions should be named EqualActions everywhere, some texts were not updated before releasing
- some examples leading to 404 page (WIP)

## [0.1.0] - 2021-11-19
### Added
- Icon component
- Action component
- EqualActions component
- Button component
- Header will automatically wrap Action components with EqualActions
### Changed
- Header component now has padding by default
### Fixed
- checkbox dimensions
- header on the right had border on the wrong side
### Dev
- deps upgrade

## [0.0.3] - 2021-08-17
### Dev
- added react eslint rules, updated base eslint rules
- code style fixed for the rules

## [0.0.2] - 2021-08-17
### Added
- Header + StickyHeader component
- List + Item components
- Direction pad component
- multi-level menu support in demo
- mobile preview on demo
### Fixed
- scrolling on the demo page

## [0.0.1] - 2021-08-16
### Added
- first version
- Checkbox component
