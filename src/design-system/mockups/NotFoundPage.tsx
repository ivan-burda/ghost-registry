import { ContentLayout, Layout, HeadingTitle, Paragraph } from '@design-system';

export const NotFoundPage = () => {
    return (
        <Layout>
            <ContentLayout>
                <HeadingTitle level={1}>404</HeadingTitle>
                <Paragraph>Ghost not found.</Paragraph>
            </ContentLayout>
        </Layout>
    );
};
