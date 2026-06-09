import { FC } from 'react';
import {
    ContentLayout,
    HeadingTitle,
    Layout,
    Logo,
    Stripe,
} from '@design-system';
import { useNavigate, useParams } from 'react-router-dom';
import { useSingleGhost } from './useSingleGhost.ts';
import { Loading } from '../../../design-system/Loading.tsx';
import { Error } from '../../../design-system/Error.tsx';
import { EditGhostForm } from './EditGhostForm.tsx';
import { isEditable } from '../NextTargetPage/nextTargetServices.ts';

export const EditGhostPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const { isLoading, error, ghost } = useSingleGhost(id);
    const navigate = useNavigate();

    if (isLoading) {
        return <Loading />;
    }

    if (error && error.message !== 'Failed to fetch target') {
        return <Error />;
    }

    if (!ghost) {
        navigate('/ghost-not-found');
        return;
    }

    if (!isEditable(ghost.flags)) {
        navigate('/ghost-not-editable');
        return;
    }

    return (
        <Layout>
            <Stripe variant="secondary">
                <HeadingTitle level={5}>Editing ghost</HeadingTitle>
                <Logo variant="sm" />
            </Stripe>
            <ContentLayout>
                <EditGhostForm ghost={ghost} />
            </ContentLayout>
        </Layout>
    );
};