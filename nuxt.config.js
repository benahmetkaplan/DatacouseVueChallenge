require('dotenv').config();

export default {
    ssr: false,
    head: {
        title: process.env.APP_NAME,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
    },
    buildModules: [
        '@nuxt/typescript-build',
        ['@nuxtjs/dotenv', { filename: '.env' }],
    ],
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
    ],
    axios: {
        baseURL: '/',
    },
    publicRuntimeConfig: {
        APP_NAME: process.env.APP_NAME,
        API_URL: process.env.API_URL
    }
}