/** @type {import('tailwindcss').Config} */
export default {
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
    theme: {
        extend: {
            colors: {
                primary: '#FE4E4E',
                dark: '#484848',
                'sand-color': '#FAF0D7',
                'primary-hover': '#FE4E4E',
                'title-color': '#435FDD',
            },
        },
    },
    plugins: [],
}
