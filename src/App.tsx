import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './features/auth/LoginPage';
import { DashboardPage } from './features/dashboard/DashboardPage';
import { ProtectedRoute } from './features/auth/ProtectedRoute';

function App() {
    return (
        <div className="min-h-screen bg-sky-100 flex flex-col">
            <div className="flex flex-col items-center pt-4">
                <img
                    src="/logo.png"
                    alt="Fhloston Paradise"
                    className="h-28"
                />
                <h1 className="mt-2 text-2xl font-semibold text-sky-900">
                    Fhloston Paradise
                </h1>
            </div>
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
        </div>
    );
}

export default App;
