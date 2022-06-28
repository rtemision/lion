import { expect, fixture } from '@open-wc/testing';
import { html } from '@lion/core';

import '@lion/progress-indicator/define';

describe('lion-progress-indicator', () => {
  describe('Accessibility', () => {
    it('adds a label', async () => {
      const el = await fixture(
        html` <lion-progress-indicator value="50"></lion-progress-indicator> `,
      );
      expect(el.getAttribute('aria-label')).not.to.be.undefined;
      expect(el.getAttribute('aria-valuemin')).to.be.eq('0');
      expect(el.getAttribute('aria-valuemax')).to.be.eq('100');
      expect(el.getAttribute('aria-valuenow')).to.be.eq('50');
    });

    it('sets the right role "progressbar"', async () => {
      const el = await fixture(
        html` <lion-progress-indicator value="77"></lion-progress-indicator> `,
      );
      expect(el.getAttribute('role')).to.equal('progressbar');
    });

    it('sets the right role "status"', async () => {
      const el = await fixture(html` <lion-progress-indicator></lion-progress-indicator> `);
      expect(el.getAttribute('role')).to.equal('status');
    });

    it('sets aria-live to "polite"', async () => {
      const el = await fixture(html` <lion-progress-indicator></lion-progress-indicator> `);
      expect(el.getAttribute('aria-live')).to.equal('polite');
    });
  });
});
