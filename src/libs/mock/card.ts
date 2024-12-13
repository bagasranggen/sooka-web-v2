import { createArrayFromNumber } from '@/libs/factory/createArrayFromNumber';
import { createPicsumImage } from '@/libs/factory';

export const CARD_THUMBNAIL_WITH_PRICE = createArrayFromNumber(4).map(() => ({
    cta: {
        href: '/cakes/strawberry-shortcake',
    },
    media: [createPicsumImage({ id: 237, width: 400, height: 619 })],
    mediaHover: [createPicsumImage({ id: 22, width: 400, height: 619 })],
    title: 'Strawberry Shortcake',
    price: '230.000',
}));

export const CARD_THUMBNAIL_WITHOUT_PRICE = createArrayFromNumber(4).map(() => ({
    cta: {
        href: '/cakes/strawberry-shortcake',
    },
    media: [createPicsumImage({ id: 237, width: 400, height: 619 })],
    mediaHover: [createPicsumImage({ id: 22, width: 400, height: 619 })],
    title: 'Strawberry Shortcake',
}));
