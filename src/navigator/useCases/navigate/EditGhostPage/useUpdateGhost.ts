import { updateGhost } from '../../../../api/updateGhost.ts';
import { Ghost } from '../../../../api/types.ts';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface HookResult {
    isLoading: boolean;
    error: Error | null;
    ghost: Ghost | null;
    update: (updatedData: { name: string; flags: string[] }) => Promise<Ghost>;
}

export const useUpdateGhost = (id: string): HookResult => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        Ghost,
        Error,
        { name: string; flags: string[] }
    >({
        mutationFn: (updatedData: { name: string; flags: string[] }) =>
            updateGhost(id, updatedData),
        onSuccess: (data: Ghost) => {
            queryClient.setQueryData(['ghost', id], data);
        },
    });

    return {
        isLoading: mutation.status === 'pending',
        error: mutation.error ?? null,
        ghost: mutation.data ?? null,
        update: (updatedData: { name: string; flags: string[] }) =>
            mutation.mutateAsync(updatedData),
    };
};