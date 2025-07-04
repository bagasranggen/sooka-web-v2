import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@fontsource/noto-sans-jp';
import '@fontsource/noto-sans-jp/600.css';
import '@/assets/styles/css/main.css';

import { createLinkItem } from '@/libs/factory';

import { apolloClient } from '@/libs/fetcher';
import { NAVIGATION_QUERY } from '@/graphql';

import { Navigation as NavigationProps } from '@/payload-types';

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const anglecia = localFont({
    src: '../../assets/fonts/Anglecia/AngleciaProDisplay-Regular-webfont.woff2',
    variable: '--font-anglecia',
});

export const metadata: Metadata = {
    title: {
        default: 'Sooka Baked Goods',
        template: '%s | Sooka Baked Goods',
    },
};

export default async function RootLayout({ children }: Readonly<PropsWithChildren>) {
    const { data } = await apolloClient.query({
        query: NAVIGATION_QUERY,
    });

    const d: NavigationProps = data?.entry;

    const navigation: any[] = [];

    if (d?.navigations && d.navigations.length > 0) {
        d.navigations.forEach((item) => {
            const { linkIsValid, link } = createLinkItem(item?.link);

            if (linkIsValid && item?.entryStatus === 'live') {
                navigation.push({
                    href: link?.href,
                    children: link?.label,
                });
            }
        });
    }

    return (
        <html lang="en">
            <body className={`${anglecia.variable} antialiased`}>
                <Navigation items={navigation} />
                {children}
                <Footer />
            </body>
        </html>
    );
}
