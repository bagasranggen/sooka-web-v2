import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@fontsource/noto-sans-jp';
import '@fontsource/noto-sans-jp/600.css';
import '@/assets/styles/css/main.css';

import { createIconItem, createLinkItem } from '@/libs/factory';

import { axiosClient } from '@/libs/fetcher';

import { Navigation as NavigationProps, Footer as FooterProps } from '@/libs/@types';
import ContextProvider from '@/store/context';

import Navigation, { NavigationItemProps } from '@/components/layout/Navigation';
import Footer, { FooterSocialProps } from '@/components/layout/Footer';

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
    const { data } = await axiosClient().get('/layout');

    const headerNavigation: NavigationProps = data?.headerNavigation;
    const footerNavigation: FooterProps = data?.footerNavigation;

    const navigation: NavigationItemProps[] = [];
    if (headerNavigation?.navigations && headerNavigation.navigations.length > 0) {
        headerNavigation.navigations.forEach((item) => {
            const { linkIsValid, link } = createLinkItem(item?.link);

            const child: NavigationItemProps['child'] = [];

            if (item?.children && item.children.length > 0) {
                item.children.forEach((itm) => {
                    const { linkIsValid, link } = createLinkItem(itm?.link);

                    if (linkIsValid && item?.entryStatus === 'live') {
                        child.push({
                            href: link?.href,
                            target: link?.target,
                            children: link?.label,
                        });
                    }
                });
            }

            if (linkIsValid && item?.entryStatus === 'live') {
                navigation.push({
                    href: link?.href,
                    target: link?.target,
                    children: link?.label,
                    child,
                });
            }
        });
    }

    const socialMedia: FooterSocialProps['items'] = [];
    if (footerNavigation?.socialMedia && footerNavigation.socialMedia.length > 0) {
        footerNavigation.socialMedia.forEach((item) => {
            const { linkIsValid, link } = createLinkItem(item?.link);
            const { icon } = createIconItem(item?.icon);

            socialMedia.push({
                cta: linkIsValid ? link : { href: '#' },
                icon: icon ?? '',
            });
        });
    }

    return (
        <ContextProvider>
            <html lang="en">
                <body className={`${anglecia.variable} antialiased`}>
                    <Navigation items={navigation} />

                    <main>{children}</main>

                    <Footer
                        address={footerNavigation?.address}
                        businessHour={footerNavigation?.businessHours}
                        socialMedia={socialMedia}
                    />
                </body>
            </html>
        </ContextProvider>
    );
}
