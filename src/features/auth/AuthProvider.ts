import { createContext, useContext, createElement, type ReactNode } from 'react';
import type { Auth } from './AuthService';

export interface AuthAdapter {
    authenticate: (email: string, password: string) => Promise<Auth | Error>;
}

const AuthAdapterContext = createContext<AuthAdapter | null>(null);

export function AuthAdapterProvider({
    adapter,
    children,
}: {
    adapter: AuthAdapter;
    children: ReactNode;
}) {
    return createElement(AuthAdapterContext.Provider, { value: adapter }, children);
}

export function useAuthAdapter(): AuthAdapter {
    const adapter = useContext(AuthAdapterContext);
    if (!adapter) {
        throw new Error('useAuthAdapter must be used within an AuthAdapterProvider');
    }
    return adapter;
}
