import { newE2EPage } from '@stencil/core/testing';

describe('spd-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<spd-header></spd-header>');

    const element = await page.find('spd-header');
    expect(element).toHaveClass('hydrated');
  });
});
