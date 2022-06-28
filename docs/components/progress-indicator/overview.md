# Progress Indicator >> Overview ||10

A web component that implements accessibility requirements for progress indicators.

```js script
import { html } from '@mdjs/mdjs-preview';
import '@lion/progress-indicator/define';
```

```js preview-story
export const main = () => {
  return html`
    <div style="padding:12px;">
      <lion-progress-indicator name="Interest rate" value="50"></lion-progress-indicator>
    </div>
  `;
};
```

## Features

This component is designed to be extended in order to add visuals.

- Accessibility compliant
- Localized "Loading" label
- Implementation independent of visuals
- `variant`: accepts either `determinate`, i.e. default, or `indeterminate`
- `value`: progress value
- `reverse`: fill the progress from RTL (default LTR)
- `--bar-color`: css custom property to set the bar color
- `--placeholder-color`: css custom property to set the bar's placeholder color
- `--separator-color`: css custom property to set the marker bar color
- `--separator-threshold-color`: css custom property to set the marker color after the given threshold is crossed

## Installation

```bash
npm i --save @lion/progress-indicator
```

```js
import { LionProgressIndicator } from '@lion/progress-indicator';
// or
import '@lion/progress-indicator/define';
```
