import type { Meta, StoryObj } from '@storybook/react-vite';
import { GhostPage } from './GhostPage';
import { GhostEditPage } from './GhostEditPage';
import { GhostDeniedPage } from './GhostDeniedPage';
import { NotFoundPage } from './NotFoundPage';

const meta = {
    title: 'Mockups/GhostPage',
    component: GhostPage,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof GhostPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Edit: Story = {
    render: () => <GhostEditPage />,
};

export const Denied: Story = {
    render: () => <GhostDeniedPage />,
};

export const NotFound: Story = {
    render: () => <NotFoundPage />,
};
