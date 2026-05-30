import {
    ContentLayout,
    Layout,
    Logo,
    Stripe,
    FormField,
    HeadingTitle,
    CheckIcon,
    List,
    ListItem,
    ButtonGroup,
    SecondaryButton,
} from '@design-system';

export const GhostPage = () => {
    return (
        <Layout>
            <Stripe>
                <Logo variant="xl" />
            </Stripe>
            <ContentLayout>
                <FormField label="Ghost name">
                    <HeadingTitle level={1} icon={<CheckIcon />} indent>
                        Slimer
                    </HeadingTitle>
                </FormField>
                <List>
                    <ListItem label="ID" value="#F6J" />
                    <ListItem label="Classification" value="Class II" />
                    <ListItem label="First seen" value="2026-05-29" />
                </List>
                <ButtonGroup>
                    <SecondaryButton>Edit</SecondaryButton>
                </ButtonGroup>
            </ContentLayout>
        </Layout>
    );
};
