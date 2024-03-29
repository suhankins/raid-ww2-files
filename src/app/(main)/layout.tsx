'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useRef } from 'react';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (inputRef.current) {
            const value = inputRef.current.value;
            if (value) {
                router.push(`./${encodeURIComponent(value)}`);
            }
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Steam ID or URL"
                    ref={inputRef}
                />
                <button type="submit">Submit</button>
            </form>
            {children}
        </div>
    );
}
