import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, clearAuth } from '../auth/Auth';

export function LandingPage() {
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        if (!auth) {
            navigate('/login');
        }
    }, [auth, navigate]);

    if (!auth) {
        return null;
    }

    function handleLogout() {
        clearAuth();
        navigate('/login');
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="space-y-4 rounded bg-white p-8 text-center shadow">
                <h1 className="text-xl font-semibold">Welcome, {auth.user.email}</h1>
                <button
                    onClick={handleLogout}
                    className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
