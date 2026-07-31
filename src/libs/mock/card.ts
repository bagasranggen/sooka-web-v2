import { MODAL_PURCHASE } from '@/libs/mock/modal';
import { createArrayFromNumber } from '@/libs/factory/createArrayFromNumber';
import { createPicsumImage } from '@/libs/factory/createPicsumImage';

import { ThumbnailProps } from '@/components/common/Card';

export const CARD_THUMBNAIL_WITH_PRICE: ThumbnailProps['items'] = createArrayFromNumber(4).map((item) => ({
    cta: {
        href: '/cakes/strawberry-shortcake',
    },
    media: [
        createPicsumImage({ id: 237, width: 400, height: 619, media: 768 }),
        createPicsumImage({ id: 237, width: 400, height: 400 }),
    ],
    mediaHover: [
        createPicsumImage({ id: 22, width: 400, height: 619, media: 768 }),
        createPicsumImage({ id: 22, width: 400, height: 400 }),
    ],
    title: 'Strawberry Shortcake',
    price: item === 0 ? '500.000' : '230.000',
    ...(item === 0 ? { salePrice: '230.000' } : {}),
    popup: MODAL_PURCHASE,
}));

export const CARD_THUMBNAIL_WITHOUT_PRICE = createArrayFromNumber(4).map(() => ({
    cta: {
        href: '/cakes/strawberry-shortcake',
    },
    media: [
        // createPictureImage({ item: createPicsumImage({ id: 237, width: 400, height: 619 }), media: 768 }),
        // createPictureImage({ item: createPicsumImage({ id: 237, width: 400, height: 400 }) }),
    ],
    mediaHover: [
        // createPictureImage({ item: createPicsumImage({ id: 22, width: 400, height: 619 }), media: 768 }),
        // createPictureImage({ item: createPicsumImage({ id: 22, width: 400, height: 400 }) }),
    ],
    title: 'Strawberry Shortcake',
}));
