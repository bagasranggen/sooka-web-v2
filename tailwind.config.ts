import type { Config } from 'tailwindcss';

const createArrayFromNumber = (number: number) => Array.from(Array(number).keys());

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    safelist: [
        ...createArrayFromNumber(6).map((item: number) => `after:opacity-${item * 10}`),
        {
            pattern: /w-([1-9]|1[0-2])\/12/,
            variants: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
        {
            pattern: /w-[1-9]\/100/,
            variants: ['*', '*:sm', '*:md', '*:lg', '*:xl', '*:2xl'],
        },
        {
            pattern: /w-auto/,
            variants: ['*', '*:sm', '*:md', '*:lg', '*:xl', '*:2xl'],
        },
        {
            pattern: /(mx|mt|mb|px|ps|pe)-./,
            variants: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
        {
            pattern: /(!|)(flex-grow|flex-shrink|basis)-(0|auto)/,
            variants: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
        {
            pattern: /ms-([1-9]|1[0-2])/,
            variants: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
        {
            pattern: /(px|pt)-./,
            variants: ['*', '*:xs', '*:sm', '*:md', '*:md', '*:lg', '*:xl', '*:2xl'],
        },
    ],
    theme: {
        screens: {
            xs: '0',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1400px',
        },
        container: {
            center: true,
            screens: {
                sm: '540px',
                md: '720px',
                lg: '960px',
                xl: '1140px',
                '2xl': '1340px',
            },
            padding: '1.5rem',
        },
        spacing: Object.assign(
            {},
            ...createArrayFromNumber(21).map((item: number) => ({
                [item - 0.5]: `${item - 0.5}rem`,
                [item]: `${item}rem`,
            }))
        ),
        fontSize: {
            sm: '1rem',
            base: '1.6rem',
            md: '2rem',
        },
        extend: {
            letterSpacing: Object.assign(
                {},
                ...createArrayFromNumber(5).map((item: number) => {
                    const ls = (item + 1) / 10;

                    return {
                        [ls]: `${ls}rem`,
                    };
                })
            ),
            width: {
                '12/12': '100%',
                '1/100': '100%',
                '2/100': '50%',
                '3/100': '33.333333333333333%',
                '4/100': '25%',
                '5/100': '20%',
                '6/100': '16.666666666666667%',
            },
            spacing: {
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
            },
            colors: {
                black: '#252525',
                white: '#fffafa',
                'sooka-primary': '#F7613F',
                'sooka-secondary': '#FF9A00',
            },
            fontFamily: {
                anglecia: ['var(--font-anglecia)'],
                'noto-sans-jp': ['Noto Sans JP', 'sans-serif'],
            },
            transitionProperty: {
                width: 'width',
            },
        },
    },
    plugins: [],
} satisfies Config;
