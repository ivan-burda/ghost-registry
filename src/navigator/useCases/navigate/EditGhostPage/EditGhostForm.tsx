import { FC, useEffect, useMemo } from 'react';
import {
    ButtonGroup,
    Checkbox,
    FormError,
    FormField,
    PrimaryButton,
    TextInput,
} from '@design-system';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { editGhostPageSchema, GhostFormData } from './schema.ts';
import { useUpdateGhost } from './useUpdateGhost.ts';
import { useNavigate } from 'react-router-dom';
import { isCaught } from '../NextTargetPage/nextTargetServices.ts';
import { Ghost } from '../../../../api/types.ts';

interface Props {
    ghost: Ghost;
}

const getFlags = (flags: string[], isCaught: boolean): string[] => {
    if (isCaught) {
        return [...flags.filter((flag) => flag !== 'caught'), 'caught'];
    }
    return flags.filter((flag) => flag !== 'caught');
};

export const EditGhostForm: FC<Props> = ({ ghost }) => {
    const { id, name, flags } = ghost;
    const navigate = useNavigate();
    const res = useMemo(() => isCaught(flags), [flags]);
    const returnToNextTarget = () => {
        navigate('/next-target');
    };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<GhostFormData>({
        resolver: zodResolver(editGhostPageSchema),
        defaultValues: {
            name,
            isCaught: res,
        },
    });

    useEffect(() => {
        reset({ name, isCaught: res });
    }, [name, res, reset]);

    const { update,error:saveError } = useUpdateGhost(id);
    const onSubmit = (data: GhostFormData) => {
        update({
            name: data.name,
            flags: getFlags(flags, data.isCaught),
        }).then(returnToNextTarget);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormField label="Ghost name">
                <TextInput {...register('name')} placeholder="Name" />
            </FormField>
            <Checkbox
                {...register('isCaught')}
                label="Secured in the registry"
            />
            {errors.name && <FormError>{errors.name.message}</FormError>}
            <ButtonGroup>
                {saveError && (
                    <FormError>
                        Failed to save the ghost record. Try again.
                    </FormError>
                )}
                <PrimaryButton type="submit">Save</PrimaryButton>
            </ButtonGroup>
        </form>
    );
};