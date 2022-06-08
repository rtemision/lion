import { html, LitElement, css } from '@lion/core';
import './demo-overlay-system.js';

/**
 * @typedef {import('../types/OverlayConfig').OverlayConfig} OverlayConfig
 */
class DemoOverlayPositioning extends LitElement {
  static get styles() {
    return [
      css`
        .positioning-container {
          padding: 0.5rem;
          overflow: hidden;
          place-items: center;
          height: 20rem;
          display: grid;
          position: relative;
        }

        .positioning-button {
          padding: 1rem;
          position: absolute;
          cursor: pointer;
          -webkit-appearance: button;
          background-color: transparent;
          background-image: none;
          text-transform: none;
          font-family: inherit;
          font-size: 100%;
          line-height: inherit;
          color: inherit;
          margin: 0;
          box-sizing: border-box;
          border: 0 solid #bfc3d9;
        }

        .positioning-button__inner {
          border-style: solid;
          border-width: 2px;
          border-radius: 100%;
        }

        .positioning-button:hover {
          transform: scaleX(1.25) scaleY(1.25);
        }

        .positioning-button--top {
          top: 0px;
          left: 50%;
          transform: translateX(-50%);
        }
        .positioning-button--bottom {
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
        }
        .positioning-button--left {
          left: 0px;
          top: 50%;
          transform: translateY(-50%);
        }
        .positioning-button--right {
          right: 0px;
          top: 50%;
          transform: translateY(-50%);
        }

        .positioning-button--bottom.positioning-button--start
          .positioning-button--top.positioning-button--start {
          transform: translateX(-50%) translateX(-20px);
        }

        .positioning-button--bottom.positioning-button--end
          .positioning-button--top.positioning-button--end {
          transform: translateX(-50%) translateX(20px);
        }

        .positioning-button--left.positioning-button--start
          .positioning-button--right.positioning-button--start {
          transform: translateY(calc(-50% - 20px));
        }

        .positioning-button--left.positioning-button--end
          .positioning-button--right.positioning-button--end {
          transform: translateY(calc(-50% + 20px));
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="positioning-container">
        ${['top', 'bottom', 'left', 'right'].map(pos =>
          ['start', '', 'end'].map(
            dir => html`
              <button
                class="positioning-button positioning-button--${pos}  positioning-button--${dir}"
                aria-label="${pos} ${dir}"
              >
                <div class="positioning-button__inner"></div>
              </button>
            `,
          ),
        )}
      </div>
    `;
  }
}
customElements.define('demo-overlay-positioning', DemoOverlayPositioning);
