# Progress Indicator >> Use Cases ||20

```js script
import { html } from '@mdjs/mdjs-preview';
import '@lion/progress-indicator/define';
```

## Undetermined

By default the progress-indicator is undetermined.

```js preview-story
export const undetermined = () => html`<div style="padding:12px;">
  <lion-progress-indicator></lion-progress-indicator>
</div> `;
```

## Determined

By given the progress-indicator a value it becomes determined.
The min is automatically set to "0" and max to "100", but they can be set to your local needs.

```js preview-story
export const determined = () => html`<div style="padding:12px;">
  <lion-progress-indicator label="Interest rate" min="20" value="50" max="60"></lion-progress-indicator>
</div> `;
```
