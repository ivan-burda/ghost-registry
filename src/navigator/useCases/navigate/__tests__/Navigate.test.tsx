import { expect, test } from '../../../../../playwright/test';
import { App } from '../../../../App.tsx';

test('navigate to restricted area', async ({ mount, page }) => {
    const component = await mount(<App />, '/');

    await component.getByText('Targets').click();

    await expect(page).toHaveURL('restricted');

    await page.goBack();

    await expect(component.getByText('Targets')).toBeVisible();
});
