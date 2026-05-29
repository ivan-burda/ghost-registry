/// <reference types="vite/client" />
import '../src/index.css';
import { beforeMount } from '@playwright/experimental-ct-react/hooks';

beforeMount<{ path?: string }>(async ({ App, hooksConfig }) => {
    if (hooksConfig?.path) {
        window.history.replaceState(null, '', hooksConfig.path);
    }

    // @ts-expect-error -- Playwright types App as generic
    return <App />;
});
