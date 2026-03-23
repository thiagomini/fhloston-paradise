import { type FormEvent, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { z } from 'zod';
import { getAuth, setAuth } from './AuthService';

export function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const [apiError, setApiError] = useState('');

    if (getAuth()) {
        return <Navigate to="/" replace />;
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFieldErrors({});
        setApiError('');

        const result = z
            .object({
                email: z.string().email('Please enter a valid email'),
                password: z
                    .string()
                    .min(6, 'Password must be at least 6 characters'),
            })
            .safeParse({ email, password });

        if (!result.success) {
            const errors: Record<string, string> = {};
            for (const issue of result.error.issues) {
                const field = issue.path[0] as string;
                errors[field] = issue.message;
            }
            setFieldErrors(errors);
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message);
            }

            const { token, user } = await response.json();
            setAuth(token, user);
            navigate('/');
        } catch (err) {
            setApiError(
                err instanceof Error ? err.message : 'Something went wrong',
            );
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm space-y-4 rounded bg-white p-8 shadow"
            >
                <h1 className="text-xl font-semibold">Login</h1>

                <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium">
                        Email
                    </label>
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded border px-3 py-2"
                    />
                    {fieldErrors.email && (
                        <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="password" className="mb-1 block text-sm font-medium">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded border px-3 py-2"
                    />
                    {fieldErrors.password && (
                        <p className="mt-1 text-sm text-red-600">
                            {fieldErrors.password}
                        </p>
                    )}
                </div>

                {apiError && <p className="text-sm text-red-600">{apiError}</p>}

                <button
                    type="submit"
                    className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
