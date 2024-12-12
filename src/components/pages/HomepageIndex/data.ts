import { CAROUSEL_BANNER, TESTIMONIALS } from '@/libs/mock';

import { HomepageIndexProps } from '@/components/pages/HomepageIndex/index';

export const HomepageData = (): HomepageIndexProps => {
    return {
        entries: {
            banner: CAROUSEL_BANNER,
            testimonials: TESTIMONIALS,
        },
    };
};
