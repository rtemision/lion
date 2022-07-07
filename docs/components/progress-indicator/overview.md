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
      <lion-progress-indicator label="Interest rate" value="50"></lion-progress-indicator>
    </div>
  `;
};
```

## Features

This component is designed to be extended in order to add visuals.

- Accessibility compliant
- Localized "Loading" label
- Implementation independent of visuals
- `value`: progress value, setting this makes the progress-bar determinate.
- `min`: progress min value
- `max`: progress max value

## Installation

```bash
npm i --save @lion/progress-indicator
```

```js
import { LionProgressIndicator } from '@lion/progress-indicator';
// or
import '@lion/progress-indicator/define';
```
