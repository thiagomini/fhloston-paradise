import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from '../auth/Auth';

export function ProtectedRoute({ children }: { children: ReactNode }) {
    const auth = getAuth();

    if (!auth) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}
