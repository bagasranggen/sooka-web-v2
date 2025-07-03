import { Homepage } from '@/payload-types';

import { LIST_NUMBER, TESTIMONIALS } from '@/libs/mock';
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
        description: d?.storyDescription ?? undefined,
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

    // console.log({ mediaMain });

    const orders: HomepageIndexProps['entries']['orders'] = {
        children: d?.orderDescription ?? undefined,
        steps: [],
    };

    if (d?.orderSteps && d.orderSteps.length > 0) {
        d.orderSteps.forEach((item) => {
            orders.steps.push({
                title: parse(item?.title ?? ''),
                description: item?.description ?? (undefined as any),
            });
        });
    }

    return {
        entries: {
            banner,
            // banner: CAROUSEL_BANNER,
            testimonials: TESTIMONIALS,
            imageDivider: [
                // createPictureImage({ item: createPicsumImage({ id: 655, width: 1600, height: 900 }), media: 992 }),
                // createPictureImage({ item: createPicsumImage({ id: 655, width: 1000, height: 600 }), media: 576 }),
                // createPictureImage({ item: createPicsumImage({ id: 655, width: 600, height: 600 }) }),
            ],
            story,
            orders,
            // steps: LIST_NUMBER,
        },
    };
};
