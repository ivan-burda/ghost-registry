import { ContentLayout, Layout, Logo, Stripe, HeadingTitle, Paragraph } from '@design-system';

export const GhostDeniedPage = () => {
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
};
