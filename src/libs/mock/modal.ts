import parse from 'html-react-parser';

import { FADE_BANNER_MEDIA } from '@/libs/mock/carousel';
import { FORM_PURCHASE_ADDONS, FORM_PURCHASE_VARIANTS } from '@/libs/mock/form';

import { PurchaseProps } from '@/components/common/Modal/Purchase';

export const MODAL_PURCHASE: Omit<PurchaseProps, 'open' | 'onOpenChange'> = {
    media: FADE_BANNER_MEDIA,
    title: 'Strawberry Shortcake',
    description: parse(
        `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque excepturi nulla perferendis sapiente voluptatibus? Animi, cum ducimus, ipsam iure libero minus perspiciatis quam qui, quis quisquam quo repellat sed tenetur!</p>`
    ),
    form: {
        variants: FORM_PURCHASE_VARIANTS,
        addOns: FORM_PURCHASE_ADDONS,
    },
};
