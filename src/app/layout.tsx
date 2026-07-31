import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@fontsource/noto-sans-jp';
import '@fontsource/noto-sans-jp/500.css';
import '@fontsource/noto-sans-jp/600.css';
import '@fontsource/noto-sans-jp/800.css';
import '@/assets/styles/css/main.css';

import ContextProvider from '@/store/context';

import Main from '@/components/layout/Main';
import { LayoutData } from '@/components/pages/Layout/data';

const anglecia = localFont({
    src: '../assets/fonts/Anglecia/AngleciaProDisplay-Regular-webfont.woff2',
    variable: '--font-anglecia',
});

export const metadata: Metadata = {
    title: {
        default: 'Sooka Baked Goods',
        template: '%s',
    },
};

export default async function RootLayout({ children }: Readonly<PropsWithChildren>) {
    const { navigation, footer } = await LayoutData();

    return (
        <ContextProvider>
            <html lang="en">
                <body className={`${anglecia.variable} antialiased`}>
                    <Main
                        navigation={{
                            items: navigation,
                        }}
                        footer={footer}>
                        <main>{children}</main>
                    </Main>
                </body>
            </html>
        </ContextProvider>
    );
}
