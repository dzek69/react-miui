All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [UNRELEASED]
(nothing yet)

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
