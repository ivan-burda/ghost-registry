import { InputHTMLAttributes } from 'react';

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            type="text"
            className="border border-gray-300 py-3 px-5 text-lg"
            {...props}
        />
    );
}
