import type { RouteObject } from 'react-router-dom';
import { NavigationPage } from './navigator/useCases/navigate/NavigationPage.tsx';
import { Layout } from '@design-system';
import { NextTargetPage } from './navigator/useCases/navigate/NextTargetPage/NextTargetPage.tsx';
import { EditGhostPage } from './navigator/useCases/navigate/EditGhostPage/EditGhostPage.tsx';
import { NotFoundPage } from './navigator/useCases/navigate/NotFoundPage/NotFoundPage.tsx';
import { GhostNotEditable } from './navigator/useCases/navigate/GhostNotEditable/GhostNotEditable.tsx';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <NavigationPage />,
    },
    {
        path: '/next-target',
        element: <NextTargetPage />,
    },
    {
        path: '/ghost/:id/edit',
        element: <EditGhostPage />,
    },
    {
        path: '/ghost-not-found',
        element: <NotFoundPage />,
    },
    {
        path: '/ghost-not-editable',
        element: <GhostNotEditable />,
    },
    {
        path: '/restricted',
        element: (
            <Layout>
                <p className="px-10 text-2xl">
                    This area, along with other 100+ features within this app,
                    are restricted for your access.
                </p>
            </Layout>
        ),
    },
];
