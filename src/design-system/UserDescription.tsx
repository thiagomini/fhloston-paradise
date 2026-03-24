import { type ReactNode } from 'react';

export function UserDescription({ children }: { children: ReactNode }) {
    return <p className="text-xl font-semibold">{children}</p>;
}
