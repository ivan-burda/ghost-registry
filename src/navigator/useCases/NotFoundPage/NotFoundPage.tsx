import { FC } from 'react';
import {
    ContentLayout,
    HeadingTitle,
    Layout,
    Logo,
    Paragraph,
    Stripe,
} from '@design-system';

export const NotFoundPage: FC= () =>{
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
                <HeadingTitle level={1}>404</HeadingTitle>
                <Paragraph>Ghost not found.</Paragraph>
            </ContentLayout>
        </Layout>
    );
};