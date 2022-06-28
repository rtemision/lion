# Change Log

## 0.13.0

### Minor Changes

- e7a4ca1d: Add "type":"module" to ESM packages so loaders like Vite will interpret the package as ESM properly.

### Patch Changes

- Updated dependencies [e7a4ca1d]
- Updated dependencies [96a24c4a]
  - @lion/core@0.23.0
  - @lion/input@0.18.0
  - @lion/localize@0.25.0

## 0.12.0

### Minor Changes

- 672c8e99: New documentation structure
- aa8b8916: BREAKING CHANGE: Work without polyfill if possible

  When using [component composition](https://lit.dev/docs/composition/component-composition/) in a Lion Component we always made it very explicit which sub-components are used.
  On top of that we scoped these [sub components](https://open-wc.org/docs/development/scoped-elements/) to the [current shadow root](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Scoped-Custom-Element-Registries.md) allowing multiple version to be used simultaneously.

  To enable this features we relied on the fact that the `ScopedElementsMixin` did loaded the needed polyfill for us.

  We however over time got feedback from multiple consumers that lion components "break the app as soon as you load them".
  The reasons is/was that not everyone is always using `ScopedElementsMixin` or in full control of the app (or its load order).

  To quote the release notes of `ScopedElementsMixin` v2.1.0:

  > ScopedElementsMixin 2.x tried to be as convenient as possible by automatically loading the scoped custom elements registry polyfill.
  > This however led to a fatal error whenever you registered any component before ScopedElementsMixin was used.

  And this was the case.

  With the upgrade to `@open-wc/scoped-elements` v2.1.1 Lion now no longer automatically loads the polyfill through `ScopedElementsMixin`.

  This essentially means the polyfill became optional which results in the following behavior

  1. If polyfill is not loaded it will use the global registry as a fallback
  2. Log error if actually scoping is needed and polyfill is not loaded
  3. If you manually create elements you will need to handle polyfilled and not polyfilled cases now

  ```diff
  -  const myButton = this.shadowRoot.createElement('my-button');
  +  const myButton = this.createScopedElement('my-button');
  ```

  This also removes `@webcomponents/scoped-custom-element-registry` as a production dependency.

  If you need scoping be sure to load the polyfill before any other web component gets registered.

  It may look something like this in your HTML

  ```html
  <script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"></script>
  ```

  or if you have an SPA you can load it at the top of your app shell code

  ```js
  import '@webcomponents/scoped-custom-element-registry';
  ```

  You need scoping if you want to

  use 2 major versions of a web component (e.g. in an SPA pageA uses 1.x and pageB uses 2.x of color-picker)
  or you want to use the same tag name with different implementations (use tag color-picker from foo here and from bar here)

  See more details at

  - [Lion release blog post](https://lion-web.netlify.app/blog/lion-without-polyfills/)
  - [@open-wc/scoped-elements release blog post](https://open-wc.org/blog/scoped-elements-without-polyfill/)
  - [Change log of ScopedElementsMixin](https://github.com/open-wc/open-wc/blob/master/packages/scoped-elements/CHANGELOG.md#210)

### Patch Changes

- Updated dependencies [66531e3c]
- Updated dependencies [672c8e99]
- Updated dependencies [aa8b8916]
  - @lion/core@0.22.0
  - @lion/input@0.17.0
  - @lion/localize@0.24.0

## 0.11.1

### Patch Changes

- 57d2c62b: Abstract input-range's scoped styles feature to a reactive controller for reuse. With this controller, you can scope styles on a LightDOM component.
- Updated dependencies [57d2c62b]
  - @lion/core@0.21.1

## 0.11.0

### Minor Changes

- 683d5c1c: Upgrade to latest Typescript. Keep in mind, some @ts-ignores were necessary, also per TS maintainer's advice. Use skipLibCheck in your TSConfig to ignore issues coming from Lion, the types are valid.

  **We also unfixed lion's dependencies (now using caret ^) on its own packages**, because it caused a lot of problems with duplicate installations for end users as well as subclassers and its end users. Both of these changes may affect subclassers in a breaking manner, hence the minor bump.

  Be sure to [read our Rationale on this change](https://lion-web.netlify.app/docs/rationales/versioning/) and what this means for you as a user.

### Patch Changes

- Updated dependencies [683d5c1c]
  - @lion/core@0.21.0
  - @lion/input@0.16.0
  - @lion/localize@0.23.0

## 0.10.9

### Patch Changes

- 30805edf: Replace deprecated node folder exports with wildcard exports for docs
- 2bd3c521: Rename customElementsManifest to customElements in package.json
- Updated dependencies [30805edf]
- Updated dependencies [495cb0c5]
- Updated dependencies [fad9d8e5]
- Updated dependencies [2bd3c521]
- Updated dependencies [2b583ee7]
- Updated dependencies [83011918]
  - @lion/core@0.20.0
  - @lion/input@0.15.8
  - @lion/localize@0.22.0

## 0.10.8

### Patch Changes

- Updated dependencies [9b81b69e]
- Updated dependencies [a2c66cd9]
- Updated dependencies [c4562f7e]
- Updated dependencies [c55d4566]
  - @lion/core@0.19.0
  - @lion/input@0.15.7
  - @lion/localize@0.21.3

## 0.10.7

### Patch Changes

- Updated dependencies [bcf68ceb]
- Updated dependencies [d963e74e]
  - @lion/core@0.18.4
  - @lion/localize@0.21.2
  - @lion/input@0.15.6

## 0.10.6

### Patch Changes

- Updated dependencies [ec03d209]
  - @lion/core@0.18.3
  - @lion/localize@0.21.1
  - @lion/input@0.15.5

## 0.10.5

### Patch Changes

- @lion/input@0.15.4

## 0.10.4

### Patch Changes

- Updated dependencies [9648d418]
- Updated dependencies [8c06302e]
- Updated dependencies [9b9d82fc]
- Updated dependencies [8a766644]
- Updated dependencies [e87b6293]
- Updated dependencies [c544af4e]
  - @lion/localize@0.21.0
  - @lion/core@0.18.2
  - @lion/input@0.15.3

## 0.10.3

### Patch Changes

- 84131205: use mdjs-preview in docs for lit compatibility
- Updated dependencies [84131205]
  - @lion/input@0.15.2
  - @lion/core@0.18.1
  - @lion/localize@0.20.2

## 0.10.2

### Patch Changes

- Updated dependencies [5ca3d275]
  - @lion/localize@0.20.1
  - @lion/input@0.15.1

## 0.10.1

### Patch Changes

- Updated dependencies [72067c0d]
  - @lion/core@0.18.0
  - @lion/input@0.15.0
  - @lion/localize@0.20.0

## 0.10.0

### Minor Changes

- 0ddd38c0: member descriptions for editors and api tables

### Patch Changes

- @lion/input@0.14.1

## 0.9.0

### Minor Changes

- 02e4f2cb: add simulator to demos

### Patch Changes

- Updated dependencies [02e4f2cb]
  - @lion/core@0.17.0
  - @lion/input@0.14.0
  - @lion/localize@0.19.0

## 0.8.1

### Patch Changes

- Updated dependencies [f0527583]
  - @lion/input@0.13.1

## 0.8.0

### Minor Changes

- 43e4bb81: Type fixes and enhancements:

  - all protected/private entries added to form-core type definitions, and their dependents were fixed
  - a lot @ts-expect-error and @ts-ignore (all `get slots()` and `get modelValue()` issues are fixed)
  - categorized @ts-expect-error / @ts-ignore into:
    - [external]: when a 3rd party didn't ship types (could also be browser specs)
    - [allow-protected]: when we are allowed to know about protected methods. For instance when code
      resides in the same package
    - [allow-private]: when we need to check a private value inside a test
    - [allow]: miscellaneous allows
    - [editor]: when the editor complains, but the cli/ci doesn't

### Patch Changes

- 97b8592c: Remove lion references in docs for easier extending
- 77a04245: add protected and private type info
- Updated dependencies [77a04245]
- Updated dependencies [43e4bb81]
  - @lion/core@0.16.0
  - @lion/input@0.13.0
  - @lion/localize@0.18.0

## 0.7.3

### Patch Changes

- @lion/input@0.12.3

## 0.7.2

### Patch Changes

- @lion/input@0.12.2

## 0.7.1

### Patch Changes

- @lion/input@0.12.1

## 0.7.0

### Minor Changes

- f3e54c56: Publish documentation with a format for Rocket
- 5db622e9: BREAKING: Align exports fields. This means no more wildcards, meaning you always import with bare import specifiers, extensionless. Import components where customElements.define side effect is executed by importing from '@lion/package/define'. For multi-component packages this defines all components (e.g. radio-group + radio). If you want to only import a single one, do '@lion/radio-group/define-radio' for example for just lion-radio.

### Patch Changes

- Updated dependencies [f3e54c56]
- Updated dependencies [5db622e9]
  - @lion/core@0.15.0
  - @lion/input@0.12.0
  - @lion/localize@0.17.0

## 0.6.5

### Patch Changes

- dbacafa5: Type static get properties as {any} since the real class fields are typed separately and lit properties are just "configuring". Remove expect error.
- Updated dependencies [dbacafa5]
  - @lion/input@0.11.5

## 0.6.4

### Patch Changes

- Updated dependencies [701aadce]
  - @lion/core@0.14.1
  - @lion/localize@0.16.1
  - @lion/input@0.11.4

## 0.6.3

### Patch Changes

- @lion/input@0.11.3

## 0.6.2

### Patch Changes

- @lion/input@0.11.2

## 0.6.1

### Patch Changes

- @lion/input@0.11.1

## 0.6.0

### Minor Changes

- b2f981db: Add exports field in package.json

  Note that some tools can break with this change as long as they respect the exports field. If that is the case, check that you always access the elements included in the exports field, with the same name which they are exported. Any item not exported is considered private to the package and should not be accessed from the outside.

### Patch Changes

- Updated dependencies [b2f981db]
  - @lion/core@0.14.0
  - @lion/input@0.11.0
  - @lion/localize@0.16.0

## 0.5.16

### Patch Changes

- @lion/input@0.10.16

## 0.5.15

### Patch Changes

- @lion/input@0.10.15

## 0.5.14

### Patch Changes

- Updated dependencies [8fb7e7a1]
- Updated dependencies [9112d243]
  - @lion/core@0.13.8
  - @lion/localize@0.15.5
  - @lion/input@0.10.14

## 0.5.13

### Patch Changes

- 5302ec89: Minimise dependencies by removing integration demos to form-integrations and form-core packages.
- 98f1bb7e: Ensure all lit imports are imported from @lion/core. Remove devDependencies in all subpackages and move to root package.json. Add demo dependencies as real dependencies for users that extend our docs/demos.
- Updated dependencies [a8cf4215]
- Updated dependencies [5302ec89]
- Updated dependencies [98f1bb7e]
  - @lion/localize@0.15.4
  - @lion/input@0.10.13
  - @lion/core@0.13.7

## 0.5.12

### Patch Changes

- Updated dependencies [9fba9007]
  - @lion/core@0.13.6
  - @lion/form-core@0.6.14
  - @lion/input@0.10.12
  - @lion/localize@0.15.3

## 0.5.11

### Patch Changes

- Updated dependencies [41edf033]
  - @lion/core@0.13.5
  - @lion/form-core@0.6.13
  - @lion/input@0.10.11
  - @lion/localize@0.15.2

## 0.5.10

### Patch Changes

- Updated dependencies [5553e43e]
  - @lion/form-core@0.6.12
  - @lion/input@0.10.10

## 0.5.9

### Patch Changes

- Updated dependencies [aa8ad0e6]
- Updated dependencies [4bacc17b]
  - @lion/form-core@0.6.11
  - @lion/input@0.10.9
  - @lion/localize@0.15.1

## 0.5.8

### Patch Changes

- Updated dependencies [c5c4d4ba]
- Updated dependencies [3ada1aef]
  - @lion/form-core@0.6.10
  - @lion/localize@0.15.0
  - @lion/input@0.10.8

## 0.5.7

### Patch Changes

- Updated dependencies [cf0967fe]
  - @lion/form-core@0.6.9
  - @lion/input@0.10.7

## 0.5.6

### Patch Changes

- Updated dependencies [b222fd78]
  - @lion/form-core@0.6.8
  - @lion/input@0.10.6

## 0.5.5

### Patch Changes

- cfbcccb5: Fix type imports to reuse lion where possible, in case Lit updates with new types that may break us.
- Updated dependencies [cfbcccb5]
  - @lion/core@0.13.4
  - @lion/form-core@0.6.7
  - @lion/input@0.10.5
  - @lion/localize@0.14.9

## 0.5.4

### Patch Changes

- Updated dependencies [e2e4deec]
- Updated dependencies [8ca71b8f]
  - @lion/core@0.13.3
  - @lion/localize@0.14.8
  - @lion/form-core@0.6.6
  - @lion/input@0.10.4

## 0.5.3

### Patch Changes

- Updated dependencies [20ba0ca8]
- Updated dependencies [618f2698]
  - @lion/core@0.13.2
  - @lion/localize@0.14.7
  - @lion/form-core@0.6.5
  - @lion/input@0.10.3

## 0.5.2

### Patch Changes

- Updated dependencies [7682e520]
- Updated dependencies [2907649b]
- Updated dependencies [68e3e749]
- Updated dependencies [fd297a28]
- Updated dependencies [9fcb67f0]
- Updated dependencies [247e64a3]
- Updated dependencies [e92b98a4]
  - @lion/localize@0.14.6
  - @lion/form-core@0.6.4
  - @lion/core@0.13.1
  - @lion/input@0.10.2

## 0.5.1

### Patch Changes

- Updated dependencies [d5faa459]
- Updated dependencies [0aa4480e]
  - @lion/form-core@0.6.3
  - @lion/input@0.10.1

## 0.5.0

### Minor Changes

- cfa2daf6: Added types for all other input components except for datepicker.

### Patch Changes

- Updated dependencies [4b7bea96]
- Updated dependencies [01a798e5]
- Updated dependencies [a31b7217]
- Updated dependencies [85720654]
- Updated dependencies [32202a88]
- Updated dependencies [b9327627]
- Updated dependencies [02145a06]
- Updated dependencies [32202a88]
  - @lion/form-core@0.6.2
  - @lion/core@0.13.0
  - @lion/localize@0.14.5
  - @lion/input@0.10.0

## 0.4.23

### Patch Changes

- Updated dependencies [75107a4b]
- Updated dependencies [60d5d1d3]
  - @lion/core@0.12.0
  - @lion/form-core@0.6.1
  - @lion/input@0.9.2
  - @lion/localize@0.14.4

## 0.4.22

### Patch Changes

- Updated dependencies [874ff483]
  - @lion/form-core@0.6.0
  - @lion/core@0.11.0
  - @lion/input@0.9.1
  - @lion/localize@0.14.3

## 0.4.21

### Patch Changes

- Updated dependencies [65ecd432]
- Updated dependencies [4dc621a0]
  - @lion/core@0.10.0
  - @lion/form-core@0.5.0
  - @lion/input@0.9.0
  - @lion/localize@0.14.2

## 0.4.20

### Patch Changes

- Updated dependencies [c347fce4]
  - @lion/form-core@0.4.4
  - @lion/input@0.8.6

## 0.4.19

### Patch Changes

- Updated dependencies [4b3ac525]
  - @lion/core@0.9.1
  - @lion/form-core@0.4.3
  - @lion/input@0.8.5
  - @lion/localize@0.14.1

## 0.4.18

### Patch Changes

- Updated dependencies [dd021e43]
- Updated dependencies [07c598fd]
  - @lion/form-core@0.4.2
  - @lion/input@0.8.4

## 0.4.17

### Patch Changes

- Updated dependencies [fb236975]
  - @lion/form-core@0.4.1
  - @lion/input@0.8.3

## 0.4.16

### Patch Changes

- Updated dependencies [3c61fd29]
- Updated dependencies [09d96759]
- Updated dependencies [9ecab4d5]
  - @lion/form-core@0.4.0
  - @lion/core@0.9.0
  - @lion/localize@0.14.0
  - @lion/input@0.8.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.4.15](https://github.com/ing-bank/lion/compare/@lion/input-range@0.4.14...@lion/input-range@0.4.15) (2020-07-28)

**Note:** Version bump only for package @lion/input-range

## [0.4.14](https://github.com/ing-bank/lion/compare/@lion/input-range@0.4.13...@lion/input-range@0.4.14) (2020-07-27)

**Note:** Version bump only for package @lion/input-range

## [0.4.13](https://github.com/ing-bank/lion/compare/@lion/input-range@0.4.12...@lion/input-range@0.4.13) (2020-07-16)

**Note:** Version bump only for package @lion/input-range

## [0.4.12](https://github.com/ing-bank/lion/compare/@lion/input-range@0.4.11...@lion/input-range@0.4.12) (2020-07-13)

**Note:** Version bump only for package @lion/input-range

## [0.4.11](https://github.com/ing-bank/lion/compare/@lion/input-range@0.4.10...@lion/input-range@0.4.11) (2020-07-09)

**Note:** Version bump only for package @lion/input-range

## [0.4.10](https://github.com/ing-bank/lion/compare/@lion/input-range@0.4.9...@lion/input-range@0.4.10) (2020-07-09)

**Note:** Version bump only for package @lion/input-range

## [0.4.9](https://github.com/ing-bank/lion/compare/@lion/input-range@0.4.8...@lion/input-range@0.4.9) (2020-07-09)

**Note:** Version bump only for package @lion/input-range

## [0.4.8](https://github.com/ing-bank/lion/compare/@lion/input-range@0.4.7...@lion/input-range@0.4.8) (2020-07-07)

**Note:** Version bump only for package @lion/input-range

## [0.4.7](https://github.com/ing-bank/lion/compare/@lion/input-range@0.4.6...@lion/input-range@0.4.7) (2020-07-06)

**Note:** Version bump only for package @lion/input-range

## [0.4.6](https://github.com/ing-bank/lion/compare/@lion/input-range@0.4.5...@lion/input-range@0.4.6) (2020-06-18)

**Note:** Version bump only for package @lion/input-range

## [0.4.5](https://github.com/ing-bank/lion/compare/@lion/input-range@0.4.4...@lion/input-range@0.4.5) (2020-06-10)

**Note:** Version bump only for package @lion/input-range

## [0.4.4](https://github.com/ing-bank/lion/compare/@lion/input-range@0.4.3...@lion/input-range@0.4.4) (2020-06-09)

**Note:** Version bump only for package @lion/input-range

## [0.4.3](https://github.com/ing-bank/lion/compare/@lion/input-range@0.4.2...@lion/input-range@0.4.3) (2020-06-08)

**Note:** Version bump only for package @lion/input-range

## [0.4.2](https://github.com/ing-bank/lion/compare/@lion/input-range@0.4.1...@lion/input-range@0.4.2) (2020-06-08)

**Note:** Version bump only for package @lion/input-range

## [0.4.1](https://github.com/ing-bank/lion/compare/@lion/input-range@0.4.0...@lion/input-range@0.4.1) (2020-06-03)

### Bug Fixes

- remove all stories folders from npm ([1e04d06](https://github.com/ing-bank/lion/commit/1e04d06921f9d5e1a446b6d14045154ff83771c3))

# [0.4.0](https://github.com/ing-bank/lion/compare/@lion/input-range@0.3.1...@lion/input-range@0.4.0) (2020-05-29)

### Features

- merge field/validate/choice-input/form-group into @lion/form-core ([6170374](https://github.com/ing-bank/lion/commit/6170374ee8c058cb95fff79b4953b0535219e9b4))
- use markdown javascript (mdjs) for documentation ([bcd074d](https://github.com/ing-bank/lion/commit/bcd074d1fbce8754d428538df723ba402603e2c8))

## [0.3.1](https://github.com/ing-bank/lion/compare/@lion/input-range@0.3.0...@lion/input-range@0.3.1) (2020-05-27)

**Note:** Version bump only for package @lion/input-range

# [0.3.0](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.23...@lion/input-range@0.3.0) (2020-05-18)

### Features

- use singleton manager to support nested npm installations ([e2eb0e0](https://github.com/ing-bank/lion/commit/e2eb0e0077b9efed9382701461753778f63cad48))

## [0.2.23](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.22...@lion/input-range@0.2.23) (2020-04-29)

**Note:** Version bump only for package @lion/input-range

## [0.2.22](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.21...@lion/input-range@0.2.22) (2020-04-16)

### Bug Fixes

- **input-range:** securely apply css ([ada5350](https://github.com/ing-bank/lion/commit/ada5350a213f17f995d6bdedb82f387b3571a695))

## [0.2.21](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.20...@lion/input-range@0.2.21) (2020-04-02)

**Note:** Version bump only for package @lion/input-range

## [0.2.20](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.19...@lion/input-range@0.2.20) (2020-03-25)

**Note:** Version bump only for package @lion/input-range

## [0.2.19](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.18...@lion/input-range@0.2.19) (2020-03-19)

**Note:** Version bump only for package @lion/input-range

## [0.2.18](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.17...@lion/input-range@0.2.18) (2020-03-05)

**Note:** Version bump only for package @lion/input-range

## [0.2.17](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.16...@lion/input-range@0.2.17) (2020-03-04)

**Note:** Version bump only for package @lion/input-range

## [0.2.16](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.15...@lion/input-range@0.2.16) (2020-03-02)

### Bug Fixes

- normalize subclasser apis ([ce0630f](https://github.com/ing-bank/lion/commit/ce0630f32b2206813e5cfd2c7842b2faa5141591))

## [0.2.15](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.14...@lion/input-range@0.2.15) (2020-03-01)

**Note:** Version bump only for package @lion/input-range

## [0.2.14](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.13...@lion/input-range@0.2.14) (2020-02-26)

**Note:** Version bump only for package @lion/input-range

## [0.2.13](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.12...@lion/input-range@0.2.13) (2020-02-20)

### Bug Fixes

- removed FieldCustomMixin ([f44d8aa](https://github.com/ing-bank/lion/commit/f44d8aa26ae7124d8dcb251e1f66ab9beae71050))

## [0.2.12](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.11...@lion/input-range@0.2.12) (2020-02-19)

### Bug Fixes

- reduce storybook chunck sizes for more performance ([9fc5606](https://github.com/ing-bank/lion/commit/9fc560605f5dcf6e9abcf8d58079c59f12750046))

## [0.2.11](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.10...@lion/input-range@0.2.11) (2020-02-10)

**Note:** Version bump only for package @lion/input-range

## [0.2.10](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.9...@lion/input-range@0.2.10) (2020-02-06)

**Note:** Version bump only for package @lion/input-range

## [0.2.9](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.8...@lion/input-range@0.2.9) (2020-02-06)

**Note:** Version bump only for package @lion/input-range

## [0.2.8](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.7...@lion/input-range@0.2.8) (2020-02-06)

**Note:** Version bump only for package @lion/input-range

## [0.2.7](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.6...@lion/input-range@0.2.7) (2020-02-05)

**Note:** Version bump only for package @lion/input-range

## [0.2.6](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.5...@lion/input-range@0.2.6) (2020-02-05)

**Note:** Version bump only for package @lion/input-range

## [0.2.5](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.4...@lion/input-range@0.2.5) (2020-02-03)

**Note:** Version bump only for package @lion/input-range

## [0.2.4](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.3...@lion/input-range@0.2.4) (2020-01-23)

### Bug Fixes

- update links in stories ([0c53b1d](https://github.com/ing-bank/lion/commit/0c53b1d4bb4fa51820656bacfc2aece653d03182))

## [0.2.3](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.2...@lion/input-range@0.2.3) (2020-01-23)

**Note:** Version bump only for package @lion/input-range

## [0.2.2](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.1...@lion/input-range@0.2.2) (2020-01-20)

**Note:** Version bump only for package @lion/input-range

## [0.2.1](https://github.com/ing-bank/lion/compare/@lion/input-range@0.2.0...@lion/input-range@0.2.1) (2020-01-17)

### Bug Fixes

- update storybook and use main.js ([e61e0b9](https://github.com/ing-bank/lion/commit/e61e0b938ff72cc18cc0b3aa1560f2cece0c9fe6))

# [0.2.0](https://github.com/ing-bank/lion/compare/@lion/input-range@0.1.1...@lion/input-range@0.2.0) (2020-01-13)

### Features

- improved storybook demos ([89b835a](https://github.com/ing-bank/lion/commit/89b835a79998c45a28093de01f69216c35009a40))

## [0.1.1](https://github.com/ing-bank/lion/compare/@lion/input-range@0.1.0...@lion/input-range@0.1.1) (2020-01-08)

**Note:** Version bump only for package @lion/input-range

# 0.1.0 (2019-12-16)

### Features

- **input-range:** create input-range component ([d81e5ea](https://github.com/ing-bank/lion/commit/d81e5ea5477a4f6e5160830a5d9b81a9d1abbd6b))
