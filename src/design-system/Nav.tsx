import { type PropsWithChildren } from 'react';

export function Nav({ children }: PropsWithChildren) {
    return <nav className="flex flex-col mt-3">{children}</nav>;
}

export function NavItem({ children }: PropsWithChildren) {
    return (
        <div className="flex items-center p-[10px] pl-10 odd:bg-gray-100 even:bg-gray-200 hover:bg-violet-100 text-2xl">
            <span className="mr-2 pr-2" aria-hidden>
                -
            </span>
            <div className="flex-1 uppercase [&>a]:block">{children}</div>
        </div>
    );
}
