import { PageDataProps, Homepage } from '@/libs/@types';
import { createHomepageBanner, createPictureImage, createProductItem } from '@/libs/factory';
import { checkMediaStatus } from '@/libs/utils';

import { axiosClient } from '@/libs/fetcher';

import parse from 'html-react-parser';

import { HomepageIndexProps } from '@/components/pages/HomepageIndex';
import { HomepageHighlightItemProps } from '@/components/pages/HomepageIndex/HomepageHighlight';

export const HomepageData = async (): Promise<PageDataProps<HomepageIndexProps>> => {
    const { data } = await axiosClient().get('/homepage');

    const d: Homepage = data.entry;

    const banner: HomepageIndexProps['entries']['banner'] = [];

    if (d?.bannerMedia && d.bannerMedia.length > 0) {
        d.bannerMedia.forEach((item) => {
            if (item?.entryStatus === 'live') banner.push(createHomepageBanner(item));
        });
    }

    // Highlights
    const highlights: HomepageIndexProps['entries']['highlights'] = [];

    if (d?.highlights && d.highlights.length > 0) {
        d.highlights.forEach((item) => {
            const tag = typeof item?.tag !== 'number' ? item?.tag : undefined;

            const tmp: HomepageHighlightItemProps = {
                id: tag?.slug ?? '',
                title: tag?.title ?? '',
                items: [],
            };

            if (item?.products && item?.products.length > 0) {
                item.products.forEach((item: any) => {
                    tmp.items.push(createProductItem({ item }));
                });
            }

            if (tmp.items.length > 0) highlights.push(tmp);
        });
    }

    // Story
    const story: HomepageIndexProps['entries']['story'] = {
        mediaMain: [],
        mediaSecondary: [],
        description: (d?.storyDescription as any) ?? undefined,
    };

    const mediaMain = checkMediaStatus({
        item: d?.storyMediaMain as any,
        handles: ['storyMediaDesktop', 'storyMediaMobile'],
    });
    const mediaSecondary = checkMediaStatus({
        item: d?.storyMediaSecondary as any,
        handles: ['storyMediaDesktop', 'storyMediaMobile'],
    });

    // Story Main Media
    if (mediaMain && mediaMain?.storyMediaDesktop) {
        story?.mediaMain?.push(
            createPictureImage({
                item: mediaMain?.storyMediaDesktop as any,
                media: mediaMain?.storyMediaDesktop ? 992 : undefined,
            })
        );
    }
    if (mediaMain && mediaMain?.storyMediaMobile) {
        story?.mediaMain?.push(createPictureImage({ item: mediaMain.storyMediaMobile }));
    }

    // Story Secondary Media
    if (mediaSecondary && mediaSecondary?.storyMediaDesktop) {
        story?.mediaSecondary?.push(
            createPictureImage({
                item: mediaSecondary?.storyMediaDesktop as any,
                media: mediaSecondary?.storyMediaDesktop ? 992 : undefined,
            })
        );
    }
    if (mediaSecondary && mediaSecondary?.storyMediaMobile) {
        story?.mediaSecondary?.push(createPictureImage({ item: mediaSecondary.storyMediaMobile }));
    }

    // Testimonials
    const testimonials: HomepageIndexProps['entries']['testimonials'] = [];

    if (d?.testimonials && d?.testimonials.length > 0) {
        d.testimonials.forEach((item) => {
            if (typeof item === 'number') return;
            if (item?.entryStatus !== 'live') return;

            testimonials.push({
                author: item?.author ?? '',
                quote: item?.testimonial as any,
            });
        });
    }

    // Image Divider
    const imageDivider: HomepageIndexProps['entries']['imageDivider'] = [];

    const mediaDivider = checkMediaStatus({
        item: d?.imageDividerMedia as any,
        handles: ['bannerDesktop', 'mediaDividerTablet', 'mediaDividerMobile'],
    });
    const mediaDividerHasTabletSize = mediaDivider?.mediaDividerTablet;
    const mediaDividerHasMobileSize = mediaDivider?.mediaDividerMobile;

    if (mediaDivider?.bannerDesktop) {
        imageDivider.push(
            createPictureImage({
                item: mediaDivider.bannerDesktop,
                media: mediaDividerHasTabletSize && mediaDividerHasMobileSize ? 992 : undefined,
            })
        );
    }
    if (mediaDivider?.mediaDividerTablet) {
        imageDivider.push(
            createPictureImage({
                item: mediaDivider.mediaDividerTablet,
                media: mediaDividerHasMobileSize ? 576 : undefined,
            })
        );
    }
    if (mediaDivider?.mediaDividerMobile) {
        imageDivider.push(
            createPictureImage({
                item: mediaDivider.mediaDividerMobile,
            })
        );
    }

    const orders: HomepageIndexProps['entries']['orders'] = {
        children: (d?.orderDescription as any) ?? undefined,
        steps: [],
    };

    if (d?.orderSteps && d.orderSteps.length > 0) {
        d.orderSteps.forEach((item) => {
            let title = item?.title ?? '';
            if (title) title = title.replace(/\n/, '<br />');

            orders.steps.push({
                title: parse(title),
                description: item?.description ?? (undefined as any),
            });
        });
    }

    return {
        meta: d?.meta,
        entries: {
            banner,
            highlights,
            testimonials,
            imageDivider,
            story,
            orders,
        },
    };
};
