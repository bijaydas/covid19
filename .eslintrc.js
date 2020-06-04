module.exports = {
    'env': {
        'browser': true,
        'es6': true,
    },
    'extends': [
        'plugin:react/recommended',
        'google',
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 11,
        'sourceType': 'module',
    },
    'plugins': [
        'react',
    ],
    'rules': {
        'indent': ['error', 4],
        'object-curly-spacing': [2, 'always'],
        'require-jsdoc': 0,
        'react/display-name': 0,
    },
    'settings': {
        'react': {
            'version': 'detect',
        },
    },
};
