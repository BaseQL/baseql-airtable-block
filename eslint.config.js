const js = require('@eslint/js');
const globals = require('globals');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');

module.exports = [
    js.configs.recommended,
    react.configs.flat.recommended,
    {
        files: ['frontend/**/*.js'],
        languageOptions: {
            ecmaVersion: 2018,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.es2015,
                Atomics: 'readonly',
                SharedArrayBuffer: 'readonly',
                // `process.env.NODE_ENV` is replaced at build time by the bundler.
                process: 'readonly',
            },
        },
        plugins: {
            'react-hooks': reactHooks,
        },
        rules: {
            'react/prop-types': 0,
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
