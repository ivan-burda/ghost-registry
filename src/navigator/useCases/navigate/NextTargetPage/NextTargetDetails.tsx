import { FC } from 'react';
import {useNavigate} from 'react-router-dom';
import {
    CheckIcon,
    ContentLayout,
    FormField,
    HeadingTitle,
    Layout,
    List,
    ListItem,
    Logo,
    SecondaryButton,
    Stripe,
} from '@design-system';
import { Ghost } from '../../../../api/types.ts';
import { isCaught, isEditable } from './nextTargetServices.ts';

interface Props {
    target: Ghost
}

export const NextTargetDetails: FC<Props> = ({
    target
}) => {
    const {id, classification, firstSeen, flags, name} = target;
    const navigate = useNavigate()
    const onClick = () => {
        navigate(`/ghost/${id}/edit`);
    };

    return (
        <Layout>
            <Stripe>
                <Logo variant="xl" />
            </Stripe>
            <ContentLayout>
            <FormField label="Ghost name">
                <HeadingTitle level={1} icon={isCaught(flags) && <CheckIcon />} indent>
                    {name}
                </HeadingTitle>
            </FormField>
            <List>
                <ListItem label="ID" value={id} />
                <ListItem label="Classification" value={classification} />
                <ListItem label="First seen" value={firstSeen} />
            </List>
            {isEditable(flags) && (
                <SecondaryButton onClick={onClick}>Edit</SecondaryButton>
            )}
            </ContentLayout>
        </Layout>
    );
};