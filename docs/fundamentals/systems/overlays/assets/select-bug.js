import { html, LitElement, ScopedElementsMixin, css } from '@lion/core';
import { LionSelect } from '@lion/select';
import { LionButton } from '@lion/button';

export class LionSelectIssue extends ScopedElementsMixin(LitElement) {
  static properties = {
    status: String,
    translation: Object,
    selectedModelValue: String,
    selectedFormattedValue: String,
  };

  static styles = css`
    * {
      font-size: 100%;
    }
  `;

  constructor() {
    super();
    this.count = 0;
    this.status = 'open';
    this.translation = { '#open': 'Open', '#closed': 'Closed' };
    this.selectedModelValue = '';
    this.selectedFormattedValue = '';
  }

  connectedCallback() {
    super.connectedCallback();
    // actual scenario the translation getting from api
    // this.translation={'#open':'Open','#closed':'Closed'}
  }

  //  async performUpdate() {
  //     setTimeout(()=>this.translation={'#open':'Open','#closed':'Closed'},1000);
  //     super.performUpdate();
  //   }

  showDetail() {
    const lionSelect = this.shadowRoot.querySelector(
      this.constructor.getScopedTagName('lion-select'),
    );

    this.selectedModelValue = lionSelect.modelValue;
    this.selectedFormattedValue = lionSelect.formattedValue;
  }

  static get scopedElements() {
    return {
      'lion-select': LionSelect,
      'lion-button': LionButton,
    };
  }

  render() {
    return html` ${this.translation
      ? html`
          ${JSON.stringify(this.translation)}
          <lion-select name="status" label="status" id="status" .modelValue="${this.status}">
            <select slot="input">
              <option value="open">${this.translation['#open']}</option>
              <option value="closed">${this.translation['#closed']}</option>
            </select>
          </lion-select>
          <lion-button @click="${this.showDetail}">Show detail</lion-button>
          <p>Model value:${this.selectedModelValue}</p>
          <p>Formatted value:${this.selectedFormattedValue}</p>
        `
      : ''}`;
  }
}

customElements.define('lion-select-issue', LionSelectIssue);
