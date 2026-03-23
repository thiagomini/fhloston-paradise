const prettier = require('eslint-config-prettier');

module.exports = [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
            globals: {
                require: 'readonly',
                module: 'readonly',
                exports: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                process: 'readonly',
                console: 'readonly',
            },
        },
        rules: {
            'no-unused-vars': 'warn',
        },
    },
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            'no-unused-vars': 'warn',
        },
    },
    {
        ignores: ['node_modules/', 'dist/'],
    },
    prettier,
];
