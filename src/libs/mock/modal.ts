import { FADE_BANNER_MEDIA } from '@/libs/mock/carousel';
import { FORM_PURCHASE_ADDONS, FORM_PURCHASE_VARIANTS } from '@/libs/mock/form';
import { RICH_TEXT_SHORT } from '@/libs/mock/richText';
import { createPicsumImage } from '@/libs/factory';

import { PurchaseProps } from '@/components/common/Modal/Purchase';

export const MODAL_PURCHASE: Omit<PurchaseProps, 'open' | 'onOpenChange'> = {
    media: FADE_BANNER_MEDIA,
    mediaThumbnail: [createPicsumImage({ id: 200, width: 800, height: 800 })],
    title: 'Strawberry Shortcake',
    description: RICH_TEXT_SHORT,
    form: {
        variants: FORM_PURCHASE_VARIANTS,
        addOns: FORM_PURCHASE_ADDONS,
    },
};
