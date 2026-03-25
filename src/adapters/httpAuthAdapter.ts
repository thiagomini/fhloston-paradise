import type { AuthAdapter } from '../features/auth/AuthProvider';

export const httpAuthAdapter: AuthAdapter = {
    async authenticate(email, password) {
        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const error = await response.json();
                return new Error(error.message);
            }

            const { token, user } = await response.json();
            return { token, user };
        } catch (err) {
            return new Error(err instanceof Error ? err.message : 'Something went wrong');
        }
    },
};
