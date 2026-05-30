import { InputHTMLAttributes } from 'react';

export function Checkbox({
    label,
    ...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="flex items-center gap-2 cursor-pointer mb-3">
            <input type="checkbox" className="w-5 h-5" {...props} />
            <span className="text-lg">{label}</span>
        </label>
    );
}
