import { useQuery } from '@tanstack/react-query';
import { getSingleGhost } from '../../../../api/getSingleGhost.ts';
import { Ghost } from '../../../../api/types.ts';



interface HookResult {
    isLoading: boolean;
    error: Error | null;
    ghost: Ghost | null;
}

export const useSingleGhost = (id?: string): HookResult => {
    const { data, isLoading, error } = useQuery<Ghost | undefined>({
        queryKey: ['getSingleGhost', id],
        queryFn: () => getSingleGhost(id!),
        enabled: Boolean(id),
    });

    return {
        isLoading,
        error: error ?? null,
        ghost: data ?? null,
    };
};