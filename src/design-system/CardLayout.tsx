import { type ReactNode } from 'react';

export function CardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-sm space-y-6 rounded bg-white p-8 shadow">
                {children}
            </div>
        </div>
    );
}
