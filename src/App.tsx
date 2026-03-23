import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { LandingPage } from './pages/LandingPage';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <LandingPage />
                    </ProtectedRoute>
                }
            />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default App;
