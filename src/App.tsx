import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './features/auth/LoginPage';
import { DashboardPage } from './features/dashboard/DashboardPage';
import { ProtectedRoute } from './features/auth/ProtectedRoute';

function App() {
    return (
        <div className="min-h-screen bg-sky-100 flex flex-col">
            <div className="flex justify-center pt-4">
                <img
                    src="/logo.png"
                    alt="Fhloston Paradise"
                    className="h-28"
                />
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
