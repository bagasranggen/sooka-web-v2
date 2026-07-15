import { createArrayFromNumber } from '@/libs/factory/createArrayFromNumber';
import { createPicsumImage } from '@/libs/factory/createPicsumImage';

import { BannerItemProps } from '@/components/common/Carousel';

export const CAROUSEL_BANNER: BannerItemProps[] = createArrayFromNumber(4).map((item: number) => {
    const media = createPicsumImage({ id: 235 + item, width: 1600, height: 900 });

    return {
        media: media.src,
        align: item % 2 === 0 ? 'left' : 'right',
        ...(item === 0 ? { category: 'new product' } : {}),
        title: 'Strawberry Shortcake',
        description: undefined,
    };
});

export const FADE_BANNER_MEDIA_SINGLE = [
    [
        createPicsumImage({
            width: 1000,
            height: 800,
            media: 992,
        }),
        createPicsumImage({
            width: 800,
            height: 500,
        }),
    ],
];

export const FADE_BANNER_MEDIA = [
    [
        createPicsumImage({
            width: 1000,
            height: 800,
            media: 992,
        }),
        createPicsumImage({
            width: 800,
            height: 500,
        }),
    ],
    [
        createPicsumImage({
            id: 200,
            width: 1000,
            height: 800,
            media: 992,
        }),
        createPicsumImage({
            id: 200,
            width: 800,
            height: 500,
        }),
    ],
];
