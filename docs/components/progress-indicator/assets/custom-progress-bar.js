import { css } from '@lion/core';
import { LionProgressIndicator } from '@lion/progress-indicator';

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

customElements.define('custom-progress-bar', CustomProgressBar);
