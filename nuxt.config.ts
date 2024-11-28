import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/fonts', '@vee-validate/nuxt'],
    vite: {
        plugins: [svgLoader()],
    },

    plugins: [],
    css: ['~/assets/css/global.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    fonts: {
        families: [{ name: 'Noto Sans', provider: 'google', weights: [400, 500, 700] }],
    },
})
