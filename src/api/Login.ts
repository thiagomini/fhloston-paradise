interface LoginResponse {
    token: string;
    user: { id: number; email: string };
}

interface LoginError {
    message: string;
}

export async function login(
    email: string,
    password: string,
): Promise<LoginResponse> {
    const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const error: LoginError = await response.json();
        throw new Error(error.message);
    }

    return response.json();
}
