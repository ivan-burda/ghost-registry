import {
    ContentLayout,
    Layout,
    Logo,
    Stripe,
    FormField,
    HeadingTitle,
    ButtonGroup,
    PrimaryButton,
    TextInput,
    Checkbox,
    FormError,
} from '@design-system';

export const GhostEditPage = () => {
    return (
        <Layout>
            <Stripe variant="secondary">
                <HeadingTitle level={5}>Editing ghost</HeadingTitle>
                <Logo variant="sm" />
            </Stripe>
            <ContentLayout>
                <form>
                    <FormField label="Ghost name">
                        <TextInput defaultValue="Slimer" />
                    </FormField>
                    <Checkbox label="Secured in the registry" />
                    <FormError>Ghost name can have only letters</FormError>
                    <ButtonGroup>
                        <PrimaryButton type="submit">Save</PrimaryButton>
                    </ButtonGroup>
                </form>
            </ContentLayout>
        </Layout>
    );
};
