# Progress Indicator >> Examples ||30

```js script
import { html } from '@mdjs/mdjs-preview';
import '@lion/progress-indicator/define';
import './assets/custom-progress-indicator.js';
import './assets/custom-progress-bar.js';

const changeProgress = () => {
  const progressBar = document.getElementsByName('default-bar')[0];
  progressBar.value = Math.floor(Math.random() * 101);
};
```

## Extend indicator to add custom styling

Add custom styles and more features by extending the `LionProgressIndicator`.

```js
export class CustomProgressBar extends LionProgressIndicator {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          height: 16px;
          background-color: black;
          border-radius: 48px;
        }

        .progress__filled {
          background-color: var(--primary-color);
          transition: width 1s ease-in-out;
        }
      `,
    ];
  }
}
```

### Result

```js preview-story
export const progressBarDemo = () =>
  html`
    <div style="padding:12px;">
      <h3>Default</h3>
      <custom-progress-bar
        label="Interest rate"
        name="default-bar"
        value="50"
      ></custom-progress-bar>
    </div>
    <div style="padding:12px;">
      <button @click="${changeProgress}">Randomize Value</button>
    </div>
  `;
```

## Extended indicator with a custom visual

`LionProgressIndicator` is designed to be extended to add visuals. Implement the `_graphicTemplate()` method to set the rendered content and apply styles normally.

```js
class CustomProgressIndicator extends LionProgressIndicator {
  static get styles() {
    return [
      css`
        .progress__icon {
          display: inline-block;
          width: 48px;
          height: 48px;
          animation: spinner-rotate 2s linear infinite;
        }

        .progress__filled {
          animation: spinner-dash 1.35s ease-in-out infinite;
          fill: none;
          stroke-width: 6px;
          stroke: var(--primary-color);
        }

        @keyframes spinner-rotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinner-dash {
          0% {
            stroke-dasharray: 6, 122;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 100, 28;
            stroke-dashoffset: -16;
          }
          100% {
            stroke-dasharray: 6, 122;
            stroke-dashoffset: -127;
          }
        }
      `,
    ];
  }

  _graphicTemplate() {
    return html`
      <svg class="progress__icon" viewBox="20 20 47 47">
        <circle class="progress__filled" cx="44" cy="44" r="20.2" />
      </svg>
    `;
  }
}
```

### Custom Indicator Result

```js preview-story
export const main = () => html` <custom-progress-indicator></custom-progress-indicator> `;
```
