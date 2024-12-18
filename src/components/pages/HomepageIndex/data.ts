import { CAROUSEL_BANNER, LIST_NUMBER, TESTIMONIALS } from '@/libs/mock';
import { createPicsumImage, createPictureImage } from '@/libs/factory';

import { HomepageIndexProps } from '@/components/pages/HomepageIndex/index';

export const HomepageData = (): HomepageIndexProps => {
    return {
        entries: {
            banner: CAROUSEL_BANNER,
            testimonials: TESTIMONIALS,
            imageDivider: [
                createPictureImage({ item: createPicsumImage({ id: 655, width: 1600, height: 900 }), media: 992 }),
                createPictureImage({ item: createPicsumImage({ id: 655, width: 1000, height: 600 }), media: 576 }),
                createPictureImage({ item: createPicsumImage({ id: 655, width: 600, height: 600 }) }),
            ],
            orders: {
                steps: LIST_NUMBER,
            },
        },
    };
};
