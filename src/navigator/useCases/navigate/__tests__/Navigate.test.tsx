import { expect, test } from '../../../../../playwright/test';
import { App } from '../../../../App.tsx';
import { TestProviders } from './TestProviders.tsx';
import { BASE_URL } from '../../../../api/baseUrl.ts';

test('navigate to restricted area', async ({ mount, page }) => {
    const component = await mount(<App />, '/');

    await component.getByText('Targets').click();

    await expect(page).toHaveURL('restricted');
});

test('navigate to Next Target page', async ({ mount, page }) => {
    await page.route(`${BASE_URL}/api/v1/target`, async (route) => {
        console.log('matched');
        await route.fulfill({
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                id: 'h7A',
                name: 'Leomoun',
                classification: 'Class IV',
                firstSeen: '2026-05-19',
                flags: ['editable'],
            }),
        });
    });

    const component = await mount(<TestProviders><App /></TestProviders>, '/');
    await component.getByTestId('next-target').click();

    await expect(page).toHaveURL('next-target');
});
