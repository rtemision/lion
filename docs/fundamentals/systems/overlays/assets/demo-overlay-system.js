import { html, LitElement, css } from '@lion/core';
import { LionButton } from '@lion/button';
import { OverlayMixin } from '@lion/overlays';

/**
 * @typedef {import('../types/OverlayConfig').OverlayConfig} OverlayConfig
 */
class DemoOverlaySystem extends OverlayMixin(LitElement) {

  static get styles() {
    return [
      css`
        ::slotted([slot="content"]) {
          background-color: #333;
          color: white;
          padding: 8px;
        } 

        .close-button {
          background: none;
          border: none;
          color: white;
          font-weight: bold;
          font-size: 16px;
          padding: 4px;
        }
      `
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  _defineOverlayConfig() {
    return /** @type {OverlayConfig} */ ({
      placementMode: 'global',
    });
  }

  _setupOpenCloseListeners() {
    super._setupOpenCloseListeners();

    if (this._overlayInvokerNode) {
      this._overlayInvokerNode.addEventListener('click', this.toggle);
    }
  }

  _teardownOpenCloseListeners() {
    super._teardownOpenCloseListeners();

    if (this._overlayInvokerNode) {
      this._overlayInvokerNode.removeEventListener('click', this.toggle);
    }
  }

  render() {
    return html`
      <slot name="invoker"></slot>
      <slot name="backdrop"></slot>
      <div id="overlay-content-node-wrapper">
        <slot name="content"></slot>
        <button class="close-button" aria-label="close dialog" @click="${this.close}"> ⨯ </button>
      </div>

      <div>popup is ${this.opened ? 'opened' : 'closed'}</div>
    `;
  }
}
customElements.define('demo-overlay-system', DemoOverlaySystem);


class DemoCloseButton extends LionButton {
  
}
