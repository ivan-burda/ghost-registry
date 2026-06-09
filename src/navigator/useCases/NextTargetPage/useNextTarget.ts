import { useQuery } from '@tanstack/react-query';
import { getNextTarget } from '../../../api/getNextTarget.ts';

interface Target {
    id: string;
    name: string;
    classification: string;
    firstSeen: string;
    flags: string[];
}

interface HookResult {
    isLoading: boolean;
    error: Error | null;
    target: Target;
}

export const useNextTarget = (): HookResult => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['target'],
        queryFn: getNextTarget,
    });

    return {
        isLoading,
        error,
        target: data,
    };
};