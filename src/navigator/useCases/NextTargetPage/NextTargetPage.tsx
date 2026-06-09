import { Loading } from '../../../design-system/Loading.tsx';
import { Error } from '../../../design-system/Error.tsx';
import { useNextTarget } from './useNextTarget.ts';
import { NextTargetDetails } from './NextTargetDetails.tsx';

export const NextTargetPage = () => {
    const { isLoading, error, target } = useNextTarget();

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    return <NextTargetDetails target={target} />;
};
