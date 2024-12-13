import { createArrayFromNumber } from '@/libs/factory/createArrayFromNumber';

import parse from 'html-react-parser';

import { NumberProps } from '@/components/common/List/Number';
import { ThumbnailProps } from '@/components/common/List';
import { createPicsumImage } from '@/libs/factory';

export const LIST_NUMBER: NumberProps['items'] = [
    {
        title: 'Choose your treat',
        description: parse(
            `<p>Please note that orders must be made 2 days in advance. Why 2 days? We need to make sure the treats are being prepared just right! Sooka is made with the finest ingredients and it has been loved by many of our friends and families.</p>`
        ),
    },
    {
        title: parse(`Choose your <br/> pickup method`),
        description: parse(
            `<p>Choose your delivery method or opt for self-pick up. <br/>Delivery options are available in Yogyakarta, and surrounding areas only.</p>`
        ),
    },
    {
        title: parse(`Payment & order <br/> confirmation`),
        description: parse(
            `<p>When you place an order, you will receive an automatic WhatsApp message with a receipt confirmation. Full payment must be made before we can start processing the order.</p>`
        ),
    },
];

export const LIST_THUMBNAIL: ThumbnailProps['items'] = createArrayFromNumber(4).map((item: number) => ({
    media: [createPicsumImage({ id: 22 + item, width: 130, height: 130 })],
    title: `lorem ipsum ${item + 1}`,
    description: parse(
        `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, amet at commodi cumque cupiditate debitis</p>`
    ),
}));
