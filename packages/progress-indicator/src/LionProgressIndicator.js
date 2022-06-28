/* eslint-disable import/no-extraneous-dependencies */
import { css, html, LitElement, styleMap } from '@lion/core';
import { uuid } from '@lion/helpers';
import { localize, LocalizeMixin } from '@lion/localize';

/**
 * @typedef {import('@lion/core').TemplateResult} TemplateResult
 */
export class LionProgressIndicator extends LocalizeMixin(LitElement) {
  static get properties() {
    return {
      value: {
        type: Number,
      },
      mix: {
        type: Number,
      },
      max: {
        type: Number,
      },
      label: {
        type: String,
      },
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          position: relative;
          width: 100%;
          height: 6px;
          overflow: hidden;
          background-color: #eee;
        }

        .progress__filled {
          height: inherit;
          background-color: green;
          border-radius: inherit;
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

  constructor() {
    super();
    this.value = 0;
    this.min = 0;
    this.max = 100;
    this.label = '';
  }

  /** @protected */
  _graphicTemplate() {
    return html` <div class="progress__filled" style=${styleMap(this._customStyles)}></div> `;
  }

  render() {
    return this._graphicTemplate();
  }

  connectedCallback() {
    super.connectedCallback();
    const uid = uuid();
    if (!this.hasAttribute('value')) {
      this.setAttribute('role', 'status');
    } else {
      this.setAttribute('role', 'progressbar');
      this.setAttribute('aria-valuenow', this.value.toString());
      this.setAttribute('aria-valuemin', this.min.toString());
      this.setAttribute('aria-valuemax', this.max.toString());
      this.setAttribute('aria-label', this.label);
    }
    this.setAttribute('id', `progress-indicator-${uid}`);
    this.setAttribute('aria-live', 'polite');
  }

  /**
   * Update aria labels on state change.
   * @param {import('@lion/core').PropertyValues } changedProperties
   */
  updated(changedProperties) {
    if (changedProperties.has('value') && this.hasAttribute('value')) {
      this.setAttribute('aria-valuenow', this.value.toString());
    }
  }

  onLocaleUpdated() {
    if (!this.hasAttribute('value') && !this.label) {
      this.setAttribute('aria-label', localize.msg('lion-progress-indicator:loading'));
    }
  }

  get _customStyles() {
    if (this.value) {
      return {
        width: `${this.value}%`,
      };
    }
    return {};
  }
}
