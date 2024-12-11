import { HomepageIndexProps } from '@/components/pages/HomepageIndex/index';
import { CAROUSEL_BANNER } from '@/libs/mock';

export const HomepageData = (): HomepageIndexProps => {
    return {
        entries: {
            banner: CAROUSEL_BANNER,
        },
    };
};
