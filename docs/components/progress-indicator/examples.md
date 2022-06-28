# Progress Indicator >> Examples ||30

```js script
import { html } from '@mdjs/mdjs-preview';
import '@lion/progress-indicator/define';
import './assets/custom-progress-indicator.js';
import './assets/custom-progress-bar.js';

const changeProgress = () => {
  const progressBar = document.getElementsByName('default-bar')[0];
  const progressBarMarker = document.getElementsByName('marker-bar')[0];
  const progressBarSegmented = document.getElementsByName('segmented-bar')[0];
  const progressBarDelta = document.getElementsByName('delta-bar')[0];

  progressBar.value = Math.floor(Math.random() * 101);
  progressBarMarker.value = Math.floor(Math.random() * 101);
  progressBarSegmented.value = Math.floor(Math.random() * 101);
  progressBarDelta.value = Math.floor(Math.random() * 101);
};
```

## Default

```js preview-story
export const defaultBar = () => html`<div style="padding:12px;">
  <lion-progress-indicator name="Interest rate" value="50"></lion-progress-indicator>
</div> `;
```

## Reverse

Fill the progress from right to left instead of LTR.

```js preview-story
export const reverse = () => html`<div style="padding:12px;">
  <lion-progress-indicator name="Interest rate" reverse value="10"></lion-progress-indicator>
</div> `;
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
          --bar-color: #8f7325;
          --border-radius: 48px;
        }

        :host([purple]) > .fill {
          --bar-color: purple;
        }

        :host > .fill {
          transition: width 1s ease-in-out;
        }

        :host > .separator {
          transition: background-color 1s ease-in-out;
        }
      `,
    ];
  }

  get separatorsTemplate() {
    if (!this.hasAttribute('segmented')) {
      return nothing;
    }

    return [10, 50, 90].map(
      segment => html`
        <div
          class="separator"
          ?threshold-crossed=${this.progressValue >= segment}
          style=${styleMap({ left: `${segment}%` })}
        ></div>
      `,
    );
  }

  get _extraTemplate() {
    return this.separatorsTemplate;
  }
}
```

### Result

```js preview-story
export const progressBarDemo = () =>
  html`
    <div style="padding:12px;">
      <h3>Default</h3>
      <custom-progress-bar name="default-bar" value="50"></custom-progress-bar>
    </div>
    <div style="padding:12px;">
      <h3>Delta</h3>
      <custom-progress-bar name="delta-bar" start-at="25" value="30"></custom-progress-bar>
    </div>
    <div style="padding:12px;">
      <h3>Segmented and different bar color</h3>
      <custom-progress-bar name="segmented-bar" value="30" purple segmented></custom-progress-bar>
      <br />
      <blockquote>For segmentation, please consider contrast for the vertical bars.</blockquote>
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
        :host {
          display: block;
        }

        .progress--icon {
          display: inline-block;
          width: 48px;
          height: 48px;
          animation: spinner-rotate 2s linear infinite;
        }

        .progress--icon--circle {
          animation: spinner-dash 1.35s ease-in-out infinite;
          fill: none;
          stroke-width: 6px;
          stroke: var(--primary-color);
          stroke-dasharray: 100, 28; /* This is a fallback for IE11 */
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
      <svg class="progress--icon" viewBox="20 20 47 47">
        <circle class="progress--icon--circle" cx="44" cy="44" r="20.2" />
      </svg>
    `;
  }
}
```

### Custom Indicator Result

```js preview-story
export const main = () => html` <custom-progress-indicator></custom-progress-indicator> `;
```
