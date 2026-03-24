import { type ReactNode } from 'react';

export function Title({ children }: { children: ReactNode }) {
    return <h1 className="text-xl font-semibold">{children}</h1>;
}
