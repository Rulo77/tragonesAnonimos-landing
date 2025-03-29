/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    purge: {
        enabled: true,
        content: [
            "./src/**/*.{html,js,ts,jsx,tsx}",
        ],
    },
    theme: {
        extend: {},
    },
    plugins: [],
}