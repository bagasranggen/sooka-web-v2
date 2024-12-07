import type { Config } from 'tailwindcss';
import { createArrayFromNumber } from './src/libs/factory';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        },
        colors: {
            'sooka-primary': 'F7613F',
            'sooka-secondary': 'FF9A00',
        },
        spacing: Object.assign(
            {},
            ...createArrayFromNumber(20).map((item: number) => ({
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
            fontFamily: {
                anglecia: ['var(--font-anglecia)'],
            },
        },
    },
    plugins: [],
} satisfies Config;
