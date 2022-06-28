import { html } from '@lion/core';
import { expect, fixture as _fixture } from '@open-wc/testing';

import '@lion/progress-indicator/define';

/**
 * @typedef {import('../src/LionProgressIndicator').LionProgressIndicator} LionProgressIndicator
 * @typedef {import('@lion/core').TemplateResult} TemplateResult
 */

const fixture = /** @type {(arg: TemplateResult) => Promise<LionProgressIndicator>} */ (_fixture);

describe('lion-progress-indicator', () => {
  describe('undetermined', () => {
    it('by default', async () => {
      const el = await fixture(html` <lion-progress-indicator></lion-progress-indicator> `);
      expect(el.getAttribute('role')).to.equal('status');
    });

    it('adds a label by default', async () => {
      const el = await fixture(html` <lion-progress-indicator></lion-progress-indicator> `);
      await el.localizeNamespacesLoaded;
      expect(el.getAttribute('aria-label')).to.equal('Loading');
    });
  });

  describe('determined', async () => {
    it('once value is set', async () => {
      const el = await fixture(
        html` <lion-progress-indicator value="25"></lion-progress-indicator> `,
      );
      expect(el.getAttribute('role')).to.equal('progressbar');
      expect(el.getAttribute('aria-valuenow')).to.be.eq('25');
    });

    it('allows to set min & max values', async () => {
      const el = await fixture(
        html` <lion-progress-indicator value="25"></lion-progress-indicator> `,
      );
      expect(el.getAttribute('aria-valuemin')).to.be.eq('0');
      expect(el.getAttribute('aria-valuemax')).to.be.eq('100');
    });

    it('adds a label', async () => {
      const el = await fixture(
        html` <lion-progress-indicator value="50" label="foo"></lion-progress-indicator> `,
      );
      expect(el.getAttribute('aria-label')).to.equal('foo');
    });
  });

  describe('Accessibility', () => {
    it('undetermined', async () => {
      const el = await fixture(html` <lion-progress-indicator></lion-progress-indicator> `);
      await expect(el).to.be.accessible();
    });

    it('determined', async () => {
      const el = await fixture(
        html` <lion-progress-indicator value="25" label="foo"></lion-progress-indicator> `,
      );
      await expect(el).to.be.accessible();
    });

    it('sets aria-live to "polite"', async () => {
      const el = await fixture(html` <lion-progress-indicator></lion-progress-indicator> `);
      expect(el.getAttribute('aria-live')).to.equal('polite');
    });
  });
});
