import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './features/auth/LoginPage';
import { DashboardPage } from './features/dashboard/DashboardPage';
import { ProtectedRoute } from './features/auth/ProtectedRoute';

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <DashboardPage />
                    </ProtectedRoute>
                }
            />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default App;
