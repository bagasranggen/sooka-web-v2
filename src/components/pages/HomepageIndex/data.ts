import { Homepage } from '@/payload-types';

import { TESTIMONIALS } from '@/libs/mock';
import { PageDataProps } from '@/libs/@types';
import { createHomepageBanner, createPictureImage } from '@/libs/factory';
import { checkMediaStatus } from '@/libs/utils';

import { apolloClient } from '@/libs/fetcher';
import { HOMEPAGE_QUERY } from '@/graphql';

import { HomepageIndexProps } from '@/components/pages/HomepageIndex/index';
import parse from 'html-react-parser';

export const HomepageData = async (): Promise<PageDataProps<HomepageIndexProps>> => {
    const { data } = await apolloClient.query({
        query: HOMEPAGE_QUERY,
    });

    const d: Homepage = data.entry;

    console.log({ d });

    const banner: HomepageIndexProps['entries']['banner'] = [];

    if (d?.bannerMedia && d.bannerMedia.length > 0) {
        d.bannerMedia.forEach((item) => {
            if (item?.entryStatus === 'live') banner.push(createHomepageBanner(item));
        });
    }

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
        entries: {
            banner,
            testimonials: TESTIMONIALS,
            imageDivider,
            story,
            orders,
        },
    };
};
