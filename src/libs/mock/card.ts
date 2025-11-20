import { createArrayFromNumber } from '@/libs/factory/createArrayFromNumber';
// import { createPicsumImage, createPictureImage } from '@/libs/factory';

export const CARD_THUMBNAIL_WITH_PRICE = createArrayFromNumber(4).map((item) => ({
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
    price: item === 0 ? '500.000' : '230.000',
    ...(item === 0 ? { salePrice: '230.000' } : {}),
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
