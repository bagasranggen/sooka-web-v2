import { Homepage } from '@/payload-types';

import { CAROUSEL_BANNER, LIST_NUMBER, TESTIMONIALS } from '@/libs/mock';
import { PageDataProps } from '@/libs/@types';
// import { createPicsumImage, createPictureImage } from '@/libs/factory';

import { apolloClient } from '@/libs/fetcher';
import { HOMEPAGE_QUERY } from '@/graphql';

import { HomepageIndexProps } from '@/components/pages/HomepageIndex/index';
import { createHomepageBanner } from '@/libs/factory';

export const HomepageData = async (): Promise<PageDataProps<HomepageIndexProps>> => {
    const { data } = await apolloClient.query({
        query: HOMEPAGE_QUERY,
    });

    const d: Homepage = data.entry;

    console.log({ data });

    const banner: HomepageIndexProps['entries']['banner'] = [];

    if (d?.bannerMedia && d.bannerMedia.length > 0) {
        d.bannerMedia.forEach((item) => {
            if (item?.entryStatus === 'live') banner.push(createHomepageBanner(item));
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
            orders: {
                steps: LIST_NUMBER,
            },
        },
    };
};
