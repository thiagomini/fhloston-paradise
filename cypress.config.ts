import { defineConfig } from 'cypress';

export default defineConfig({
    allowCypressEnv: false,

    e2e: {
        baseUrl: 'http://localhost:5173',
        specPattern: 'src/**/__tests__/*.e2m.{js,jsx,ts,tsx}',
    },
});
