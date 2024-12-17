import { LIST_THUMBNAIL } from '@/libs/mock/list';
import { FORM_ORDER } from '@/libs/mock/form';
import { createPicsumImage } from '@/libs/factory/createPicsumImage';

import parse from 'html-react-parser';

import { ProductDetailInfoProps } from '@/components/pages/ProductDetailIndex/ProductDetailInfo';
import { HalfMediaProps } from '@/components/common/Banner';

export const PRODUCT_DETAIL_BANNER: HalfMediaProps = {
    media: [createPicsumImage({ id: 682, width: 1200, height: 900 })],
    children: parse(`<span>Straw<span class="text-sooka-primary">berry</span></span> 
<span>Short<span class="text-sooka-primary">cake</span></span>`),
    form: {
        title: 'Strawberry Shortcake',
        summaries: FORM_ORDER,
    },
};

export const PRODUCT_DETAIL_INFOS: ProductDetailInfoProps[] = [
    {
        title: 'Product Description',
        description: parse(
            `<p>Three tier of our soft, cottony vanilla cake, paired so nicely with the tanginess from our strawberry confit in the middle of fluffy whipped mascarpone.</p><p>Is there a better trio? I think not!</p>`
        ),
    },
    {
        title: 'Product Add-on(s)',
        addOns: LIST_THUMBNAIL,
    },
];
