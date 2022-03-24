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
    },
    plugins: [],
};
