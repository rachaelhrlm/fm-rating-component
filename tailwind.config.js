module.exports = {
    content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                black: {
                    500: '#232A34',
                    600: '#181E27',
                },
                'dark-blue': {
                    500: '#262E38',
                    600: '#131518',
                },
                grey: {
                    500: '#969FAD',
                    600: '#7C8798',
                },
                orange: {
                    500: '#FC7614',
                },
            },
        },
        fontFamily: {
            sans: ['Overpass', 'sans-serif'],
        },
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1440px',
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [],
};
