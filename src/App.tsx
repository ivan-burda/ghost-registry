import type { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

export const App: FC = () => {
    return <RouterProvider router={createBrowserRouter(routes)} />;
};
