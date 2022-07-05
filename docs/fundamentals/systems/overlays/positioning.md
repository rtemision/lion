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
import './assets/demo-overlay-positioning.js';
<<<<<<< Updated upstream
=======
import './assets/select-bug.js';

>>>>>>> Stashed changes
import { ref, createRef } from 'lit/directives/ref.js';
```

## Anchor positioning

Placementmode

```js preview-story
<<<<<<< Updated upstream
export const localPositioning = () => html`<demo-overlay-positioning></demo-overlay-positioning>`;
=======
export const localPositioning = () =>
  html`<lion-select-issue></lion-select-issue
    ><demo-overlay-positioning></demo-overlay-positioning>`;
>>>>>>> Stashed changes
```
