module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended',
    ],
    rules: {
        'nuxt/no-cjs-in-config': 'off',
        'vue/no-v-html': 'off',
        'no-useless-catch': 'off',
        'vue/require-v-for-key': 'off',
        camelcase: ['error', { allow: ['^'] }],
    },
    settings: {
        'import/ignore': ['.js$', 'node_modules'],
    },
};
