import { createArrayFromNumber } from '@/libs/factory/createArrayFromNumber';
import { createPicsumImage } from '@/libs/factory';

export const CARD_THUMBNAIL_WITH_PRICE = createArrayFromNumber(5).map(() => ({
    cta: {
        href: '#',
    },
    media: [createPicsumImage({ id: 237, width: 400, height: 619 })],
    title: 'Strawberry Shortcake',
    price: '230.000',
}));
