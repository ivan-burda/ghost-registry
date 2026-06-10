import {Loading} from '../design-system/Loading.tsx';
import {Error} from '../design-system/Error.tsx';
import {useNextTargetGhost} from './useNextTargetGhost.ts';
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
import {useNavigate} from "react-router-dom";
import {isCaught, isEditable} from "./nextTargetServices.ts";

export const NextTargetGhost = () => {
    const {isLoading, error, target} = useNextTargetGhost();
    const navigate = useNavigate()


    if (isLoading) {
        return <Loading/>;
    }

    if (error) {
        return <Error/>;
    }

    const {id, classification, firstSeen, flags, name} = target;
    const editGhost = () => {
        navigate(`/ghost/${id}/edit`);
    };

    return (<Layout>
        <Stripe>
            <Logo variant="xl"/>
        </Stripe>
        <ContentLayout>
            <FormField label="Ghost name">
                <HeadingTitle level={1} icon={isCaught(flags) && <CheckIcon/>} indent>
                    {name}
                </HeadingTitle>
            </FormField>
            <List>
                <ListItem label="ID" value={id}/>
                <ListItem label="Classification" value={classification}/>
                <ListItem label="First seen" value={firstSeen}/>
            </List>
            {isEditable(flags) && (
                <SecondaryButton onClick={editGhost}>Edit</SecondaryButton>
            )}
        </ContentLayout>
    </Layout>);
};
