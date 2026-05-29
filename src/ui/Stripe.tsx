import { type PropsWithChildren, Children } from 'react';

export function Stripe({ children }: PropsWithChildren) {
    const count = Children.count(children);

    return (
        <div
            className={`bg-violet-400 p-2.5 flex items-center ${
                count === 1 ? 'justify-center' : 'justify-between'
            }`}
        >
            {children}
        </div>
    );
}
