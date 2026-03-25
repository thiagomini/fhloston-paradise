import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthAdapterProvider, type AuthAdapter } from './features/auth/AuthProvider';
import { httpAuthAdapter } from './adapters/httpAuthAdapter';
import './index.css';

declare global {
    interface Window {
        __authAdapter?: AuthAdapter;
    }
}

const adapter = window.__authAdapter ?? httpAuthAdapter;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AuthAdapterProvider adapter={adapter}>
                <App />
            </AuthAdapterProvider>
        </BrowserRouter>
    </StrictMode>,
);
