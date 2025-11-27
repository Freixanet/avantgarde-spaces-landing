/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#111111',
                secondary: '#F4F4F0',
                textMain: '#1A1A1A',
                textMuted: '#666666',
                textInverted: '#FFFFFF',
                accent: '#C5A059', // Gold luxury tone
                success: '#2D5A27',
                error: '#8B1E1E'
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Manrope"', 'sans-serif'],
            },
            spacing: {
                'unit': '1.5rem',
            },
            maxWidth: {
                'container': '1440px',
            },
            borderRadius: {
                'none': '0px', // Enforcing 0px radius token for sharp luxury look
            },
            boxShadow: {
                'luxury': '0 20px 40px -10px rgba(0,0,0,0.05)',
            }
        },
    },
    plugins: [],
}
