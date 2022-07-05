import { html, LitElement, css } from '@lion/core';
import './demo-overlay-system.js';

/**
 * @typedef {import('../types/OverlayConfig').OverlayConfig} OverlayConfig
 */
class DemoOverlayPositioning extends LitElement {
  static get styles() {
    return [
      css`
<<<<<<< Updated upstream
        .positioning-container {
=======
        /*=== .pos-container ===*/

        .pos-container {
>>>>>>> Stashed changes
          padding: 0.5rem;
          overflow: hidden;
          place-items: center;
          height: 20rem;
          display: grid;
          position: relative;
        }

<<<<<<< Updated upstream
        .positioning-button {
          padding: 1rem;
          position: absolute;
=======
        /*=== .pos-btn-wrapper ===*/

        /** 
         * We need a wrapper for position transforms, so that we can apply scale transforms on .pos-btn hover 
        */

        .pos-btn-wrapper {
          position: absolute;
        }

        .pos-btn-wrapper--top,
        .pos-btn-wrapper--bottom {
          left: 50%;
          transform: translateX(-50%);
        }

        .pos-btn-wrapper--top {
          top: 0;
        }

        .pos-btn-wrapper--bottom {
          bottom: 0;
        }

        .pos-btn-wrapper--left,
        .pos-btn-wrapper--right {
          top: 50%;
          transform: translateY(-50%);
        }

        .pos-btn-wrapper--left {
          left: 0;
        }

        .pos-btn-wrapper--right {
          right: 0;
        }

        .pos-btn-wrapper--bottom.pos-btn-wrapper--start,
        .pos-btn-wrapper--top.pos-btn-wrapper--start {
          transform: translateX(-50%) translateX(-32px);
        }

        .pos-btn-wrapper--bottom.pos-btn-wrapper--end,
        .pos-btn-wrapper--top.pos-btn-wrapper--end {
          transform: translateX(-50%) translateX(32px);
        }

        .pos-btn-wrapper--left.pos-btn-wrapper--start,
        .pos-btn-wrapper--right.pos-btn-wrapper--start {
          transform: translateY(calc(-50% - 32px));
        }

        .pos-btn-wrapper--left.pos-btn-wrapper--end,
        .pos-btn-wrapper--right.pos-btn-wrapper--end {
          transform: translateY(calc(-50% + 32px));
        }

        /*=== .pos-btn ===*/

        .pos-btn {
          padding: 1rem;
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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
=======
        .pos-btn__inner {
          border-style: solid;
          border-width: 2px;
          border-radius: 100%;
          width: 4px;
          height: 4px;
        }

        .pos-btn:hover {
          transform: scaleX(1.25) scaleY(1.25);
        }
>>>>>>> Stashed changes
      `,
    ];
  }

  render() {
    return html`
<<<<<<< Updated upstream
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
=======
      <div class="pos-container">
        ${['top', 'bottom', 'left', 'right'].map(pos =>
          ['start', '', 'end'].map(
            dir => html`
              <div
                class="pos-btn-wrapper pos-btn-wrapper--${pos} ${dir
                  ? `pos-btn-wrapper--${dir}`
                  : ''}"
              >
                <button class="pos-btn" aria-label="${pos} ${dir}">
                  <div class="pos-btn__inner"></div>
                </button>
              </div>
>>>>>>> Stashed changes
            `,
          ),
        )}
      </div>
    `;
  }
}
customElements.define('demo-overlay-positioning', DemoOverlayPositioning);
