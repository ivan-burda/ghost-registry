import {FC} from 'react';
import {ContentLayout, HeadingTitle, Layout, Logo, Paragraph, Stripe} from '@design-system';


export const EditGhostDenied: FC = () => {
    return (
        <Layout>
            <Stripe variant="secondary">
                <a
                    href="/"
                    className="text-sm hover:underline hover:decoration-dotted"
                >
                    ← Back
                </a>
                <Logo variant="sm" />
            </Stripe>
            <ContentLayout>
                <HeadingTitle level={1}>Access denied</HeadingTitle>
                <Paragraph>
                    This ghost's record is readonly. Editing is not permitted.
                </Paragraph>
            </ContentLayout>
        </Layout>
    );
}