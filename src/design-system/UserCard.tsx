import { type ReactNode } from 'react';

export function UserCard({ children }: { children: ReactNode }) {
    return <div className="space-y-4 text-center">{children}</div>;
}
