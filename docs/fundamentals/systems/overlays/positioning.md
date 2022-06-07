# Systems >> Overlays >> Positioning ||10

```js script
import { html, render, LitElement } from '@mdjs/mdjs-preview';
import { renderLitAsNode } from '@lion/helpers';
import {
  ArrowMixin,
  OverlayMixin,
  withBottomSheetConfig,
  withDropdownConfig,
  withModalDialogConfig,
} from '@lion/overlays';

import './assets/demo-overlay-system.js';
import './assets/demo-overlay-backdrop.js';
import './assets/applyDemoOverlayStyles.js';
import { ref, createRef } from 'lit/directives/ref.js';
```


## Relative to anchor


```js
import '@lion/dialog/define';

html`
  <lion-dialog .config=${{
    placementMode: 'global',
    viewportConfig: { placement: 'bottom-right' },
  }}>
    <div slot="content">
      This is an overlay
      <button
        @click=${e => e.target.dispatchEvent(new Event('close-overlay', { bubbles: true }))}
      >x</button>
    <div>
    <button slot="invoker">
      Click me
    </button>
  </lion-dialog>
`;
```

Or by creating a controller yourself

```js
import { OverlayController } from '@lion/overlays';

const ctrl = new OverlayController({
  ...withModalDialogConfig(),
  invokerNode,
  contentNode,
});
```

Or creating your own Web Component which uses the Overlay System

```js
import { LitElement, html } from '@lion/core';
import { OverlayMixin, withModalDialogConfig } from '@lion/overlays';

class MyOverlayComponent extends OverlayMixin(LitElement) {
  _defineOverlayConfig() {
    return {
      ...withModalDialogConfig(),
    };
  }

  _setupOpenCloseListeners() {
    super._setupOpenCloseListeners();
    this.__toggle = () => {
      this.opened = !this.opened;
    };

    if (this._overlayInvokerNode) {
      this._overlayInvokerNode.addEventListener('click', this.__toggle);
    }
  }

  _teardownOpenCloseListeners() {
    super._teardownOpenCloseListeners();

    if (this._overlayInvokerNode) {
      this._overlayInvokerNode.removeEventListener('click', this.__toggle);
    }
  }

  render() {
    return html`
      <slot name="invoker"></slot>
      <div id="overlay-content-node-wrapper">
        <slot name="content"></slot>
      </div>
    `;
  }
}
```

## Rationales

Please check the [system rationals](./rationale.md) folder, where we go more in-depth.

### Aria roles

- No `aria-controls` as support for it is not quite there yet
- No `aria-haspopup`. People knowing the haspopup and hear about it don’t expect a dialog to open (at this moment in time) but expect a sub-menu. Until support for the dialog value has better implementation, it’s probably best to not use aria-haspopup on the element that opens the modal dialog.
