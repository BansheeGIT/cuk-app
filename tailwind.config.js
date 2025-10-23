// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require("nativewind/preset")],
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    25:  "#F2FBFF",
                    50:  "#E6F7FF",
                    100: "#CDEFFF",
                    200: "#A1E0FF",
                    300: "#74D1FF",
                    400: "#36BAFF",
                    500: "#0EA5E9",               // основной акцент (шапка / полоски)
                    600: "#0886C7",
                    700: "#0B5F8A",
                    800: "#0E3D55",
                    900: "#0B2E41",
                },
                surface: {
                    bg:   "#F5F7FA",
                    card: "#FFFFFF",
                    tint: "#EAF1F7",              // светлый фон для attendance
                },
            },
            borderRadius: {
                xl2: "1rem",                    // 16px скругления карточек
            },
            boxShadow: {
                soft: "0 2px 8px rgba(0,0,0,0.08)",
            },
        },
    },
    plugins: [],
};
