'use strict';

const path = require('path');
const localization = require('./packages/localization/server');
const cookies = require('./packages/cookies/server');

require('dotenv').config();

export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'nuxt-buefy-ui',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                href: 'https://unpkg.com/boxicons@2.0.5/css/boxicons.min.css',
                rel: 'stylesheet',
            },
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'vuesax/dist/vuesax.css',
        '@/assets/style/vuesax/css/variables.css',
        { src: '@/assets/style/vuesax/scss/styl.scss', lang: 'scss' },
    ],
    styleResources: {
        scss: ['@/assets/style/vuesax/scss/variables.scss'],
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: ['@/plugins/vuesax', '@/plugins/init'],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        '@nuxtjs/dotenv',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt',
        [
            'nuxt-i18n',
            {
                locales: [localization.locales.vi, localization.locales.en],
                lazy: true,
                langDir: localization.langDir,
                defaultLocale: localization.defaultLocale,
                detectBrowserLanguage: {
                    useCookie: true,
                    cookieKey: cookies.LOCALE,
                    alwaysRedirect: true,
                    fallbackLocale: localization.defaultLocale,
                },
            },
        ],
        '@nuxtjs/svg-sprite',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extractCSS: true,
        // optimization: {
        //     splitChunks: {
        //         chunks: 'all',
        //         // automaticNameDelimiter: '.',
        //         // minSize: 10000,
        //         // maxSize: 249856,
        //     },
        // },
        extend(config, { isDev, isClient }) {
            const alias = (config.resolve.alias = config.resolve.alias || {});
            alias.components = path.join(__dirname, 'components');
            alias.packages = path.join(__dirname, 'packages');
            if (isClient) {
                if (isDev) {
                    config.module.rules.push({
                        enforce: 'pre',
                        test: /\.(js|vue)$/,
                        loader: 'eslint-loader',
                        exclude: /(node_modules)/,
                        options: {
                            fix: true,
                        },
                    });
                }
            }
        },
    },
};
