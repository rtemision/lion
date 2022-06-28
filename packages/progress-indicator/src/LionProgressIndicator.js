/* eslint-disable class-methods-use-this, import/no-extraneous-dependencies */

import { nothing, LitElement, css, styleMap, html } from '@lion/core';
import { localize, LocalizeMixin } from '@lion/localize';
import { uuid } from '@lion/helpers';
/**
 * @typedef {import('@lion/core').TemplateResult} TemplateResult
 */
export class LionProgressIndicator extends LocalizeMixin(LitElement) {
  static get properties() {
    return {
      value: {
        type: Number,
        reflect: true,
      },
      mix: {
        type: Number,
        reflect: true,
      },
      max: {
        type: Number,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [
      css`
        :host {
          --placeholder-color: #eee;
          --bar-color: green;
          --separator-color: #a8a8a8;
          --separator-threshold-color: #fff;
          --border-radius: 0;
          display: block;
          position: relative;
          width: 100%;
          overflow: hidden;
          background-color: var(--placeholder-color);
          border-radius: var(--border-radius);
        }

        :host > .fill {
          height: 6px;
          background-color: var(--bar-color);
          border-radius: var(--border-radius);
        }

        :host > .separator {
          position: absolute;
          top: 0;
          width: 3px;
          height: 6px;
          background-color: var(--separator-color);
        }

        :host > .separator[threshold-crossed] {
          background-color: var(--separator-threshold-color);
        }
      `,
    ];
  }

  static get localizeNamespaces() {
    return [
      {
        'lion-progress-indicator': /** @param {string} locale */ locale => {
          switch (locale) {
            case 'bg-BG':
            case 'bg':
              return import('@lion/progress-indicator/translations/bg.js');
            case 'cs-CZ':
            case 'cs':
              return import('@lion/progress-indicator/translations/cs.js');
            case 'de-DE':
            case 'de':
              return import('@lion/progress-indicator/translations/de.js');
            case 'en-AU':
            case 'en-GB':
            case 'en-US':
            case 'en-PH':
            case 'en':
              return import('@lion/progress-indicator/translations/en.js');
            case 'es-ES':
            case 'es':
              return import('@lion/progress-indicator/translations/es.js');
            case 'fr-BE':
            case 'fr-FR':
            case 'fr':
              return import('@lion/progress-indicator/translations/fr.js');
            case 'hu-HU':
            case 'hu':
              return import('@lion/progress-indicator/translations/hu.js');
            case 'it-IT':
            case 'it':
              return import('@lion/progress-indicator/translations/it.js');
            case 'nl-BE':
            case 'nl-NL':
            case 'nl':
              return import('@lion/progress-indicator/translations/nl.js');
            case 'pl-PL':
            case 'pl':
              return import('@lion/progress-indicator/translations/pl.js');
            case 'ro-RO':
            case 'ro':
              return import('@lion/progress-indicator/translations/ro.js');
            case 'ru-RU':
            case 'ru':
              return import('@lion/progress-indicator/translations/ru.js');
            case 'sk-SK':
            case 'sk':
              return import('@lion/progress-indicator/translations/sk.js');
            case 'uk-UA':
            case 'uk':
              return import('@lion/progress-indicator/translations/uk.js');
            case 'zh-CN':
            case 'zh':
              return import('@lion/progress-indicator/translations/zh.js');
            default:
              return import('@lion/progress-indicator/translations/en.js');
          }
        },
      },
    ];
  }

  /** @protected */
  _graphicTemplate() {
    return html`
      <div class="fill" style=${styleMap(this._customStyles)}></div>
      ${this._extraTemplate}
    `;
  }

  render() {
    return this._graphicTemplate();
  }

  connectedCallback() {
    super.connectedCallback();
    const uid = uuid();
    if (!this.hasAttribute('value')) {
      this.setAttribute('role', 'status');
      this.setAttribute('aria-label', 'loading');
    } else {
      this.setAttribute('role', 'progressbar');
      this.setAttribute('aria-valuenow', this.value || '0');
      this.setAttribute('aria-valuemin', this.min || '0');
      this.setAttribute('aria-valuemax', this.max || '100');
      this.setAttribute('aria-label', this.getAttribute('name') || `progress-bar-${uid}`);
    }
    this.setAttribute('id', `progress-indicator-${uid}`);
    this.setAttribute('aria-live', 'polite');
  }

  /**
   * Update aria labels on state change.
   * @param {import('@lion/core').PropertyValues } changedProperties
   */
  updated(changedProperties) {
    if (changedProperties.has('value')) {
      this.setAttribute('aria-valuenow', this.value);
    }
  }

  onLocaleUpdated() {
    const label = localize.msg('lion-progress-indicator:loading');
    this.setAttribute('aria-label', label);
  }

  get _customStyles() {
    return {
      width: `${this.value}%`,
      float: this._isReverse ? 'right' : 'unset',
    };
  }

  /**
   * Get extra template
   * @returns {TemplateResult | nothing}
   */
  get _extraTemplate() {
    return nothing;
  }

  /**
   * Check whether `reverse` attribute is specified or not.
   * @returns {boolean}
   */
  get _isReverse() {
    return this.hasAttribute('reverse');
  }
}
