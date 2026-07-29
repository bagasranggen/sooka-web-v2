import { Footer, Navigation } from '@/libs/@types';
import { createIconItem, createLinkItem } from '@/libs/factory';

import { apolloClient } from '@/libs/fetcher';
import { LAYOUT_QUERY } from '@/graphql';

import { MainProps } from '@/components/layout/Main';

export const LayoutData = async () => {
    let data = undefined;

    try {
        const { data: layoutData } = await apolloClient.query({
            query: LAYOUT_QUERY,
        });

        if (layoutData) data = layoutData;
    } catch (e) {
        console.log(e);
        // throw new Error(e as any);
    }

    const headerNavigation: Navigation = data?.headerNavigation;
    const footerNavigation: Footer = data?.footerNavigation;

    const navigation: NonNullable<MainProps['navigation']>['items'] = [];
    if (headerNavigation?.navigations && headerNavigation.navigations.length > 0) {
        headerNavigation.navigations.forEach((item) => {
            const { linkIsValid, link } = createLinkItem(item?.link);

            const child: NonNullable<MainProps['navigation']>['items'][number]['child'] = [];

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
                    href: link?.href ?? '#',
                    target: link?.target,
                    children: link?.label,
                    child,
                });
            }
        });
    }

    let footer: NonNullable<MainProps['footer']> | undefined = undefined;

    if (footerNavigation?.addressLink) {
        const { linkIsValid, link } = createLinkItem(footerNavigation?.addressLink);

        if (linkIsValid) {
            footer = Object.assign(footer ?? {}, {
                address: {
                    href: link?.href,
                    target: link?.target,
                    children: link?.label,
                },
            });
        }

        if (!linkIsValid) {
            footer = Object.assign(footer ?? {}, {
                address: {
                    children: link?.label,
                },
            });
        }
    }

    if (footerNavigation?.businessHours) {
        footer = Object.assign(footer ?? {}, { businessHour: footerNavigation.businessHours });
    }

    const socialMedia: NonNullable<MainProps['footer']>['socialMedia'] = [];
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

    if (socialMedia.length > 0) footer = Object.assign(footer ?? {}, { socialMedia });

    return {
        navigation,
        footer,
    };
};
