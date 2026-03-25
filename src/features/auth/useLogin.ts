import { type Auth, setAuth } from './AuthService';
import { useAuthAdapter } from './AuthProvider';

interface LoginResult {
    data: Auth | null;
    error: string | null;
}

export function useLogin() {
    const adapter = useAuthAdapter();

    async function login(email: string, password: string): Promise<LoginResult> {
        const result = await adapter.authenticate(email, password);

        if (result instanceof Error) {
            return { data: null, error: result.message };
        }

        setAuth(result.token, result.user);
        return { data: result, error: null };
    }

    return { login };
}
