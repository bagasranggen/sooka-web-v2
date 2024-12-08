import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@fontsource/noto-sans-jp';
import '@fontsource/noto-sans-jp/600.css';
import '@/assets/styles/css/main.css';

import Navigation from '@/components/layout/Navigation';

const anglecia = localFont({
    src: '../assets/fonts/Anglecia/AngleciaProDisplay-Regular-webfont.woff2',
    variable: '--font-anglecia',
});

export const metadata: Metadata = {
    title: {
        default: 'Sooka Baked Goods',
        template: '%s | Sooka Baked Goods',
    },
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
    return (
        <html lang="en">
            <body className={`${anglecia.variable} antialiased`}>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
