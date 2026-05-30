/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname =
    typeof __dirname !== 'undefined'
        ? __dirname
        : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    extends: './vite.config.ts',
    plugins: [
        storybookTest({
            configDir: path.join(dirname, '.storybook'),
        }),
    ],
    resolve: {
        alias: {
            '@design-system': path.resolve(
                dirname,
                'src/design-system/index.tsx',
            ),
        },
    },
    test: {
        name: 'storybook',
        browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
                {
                    browser: 'chromium',
                },
            ],
        },
    },
});
