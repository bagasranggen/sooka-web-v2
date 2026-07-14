import { createPicsumImage } from '@/libs/factory/createPicsumImage';

import { OrderProps } from '@/components/common/Form';
import { PurchaseProps } from '@/components/common/Form/Purchase';

export const FORM_ORDER: OrderProps['summaries'] = [
    {
        title: 'Price',
        handle: 'price',
        required: true,
        items: [
            {
                value: 260000,
                label: 'Rp260.000 (round 15cm)',
            },
            {
                value: 310000,
                label: 'Rp310.000 (square 16x16cm)',
            },
        ],
    },
    {
        title: 'Dimension',
        handle: 'dimension',
        required: true,
        items: [
            {
                value: 'square 16x16cm',
                label: 'square 16x16cm',
            },
            // {
            //     value: 'round 15cm',
            //     label: 'round 15cm',
            // },
        ],
    },
    {
        title: 'Add-ons(s)',
        handle: 'addOns',
        allowMultiple: true,
        required: false,
        items: [
            {
                value: 'candle',
                label: 'Candle (Rp5.000)',
            },
            {
                value: 'toppers',
                label: 'Toppers (Rp5.000)',
            },
        ],
    },
];

export const FORM_PURCHASE_VARIANTS: PurchaseProps['variants'] = [
    {
        id: 'tes',
        type: 'radio',
        value: '120000',
        // checked: true,
        label: 'Round - 15cm',
        price: 'Rp120.000',
        required: true,
    },
    {
        id: 'tes2',
        type: 'radio',
        value: '140000',
        checked: true,
        label: 'Square - 16cmx16cm',
        price: 'Rp140.000',
        required: true,
    },
];

export const FORM_PURCHASE_ADDONS: PurchaseProps['addOns'] = [
    {
        id: 'extraCandle',
        media: [createPicsumImage({ width: 200, height: 200 })],
        type: 'checkbox',
        value: '3000',
        // checked: true,
        // required: true,
        label: 'Extra Candle',
        description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 'Rp3.000',
        input: {
            placeholder: 'Let us know your preferred candle color',
        },
    },
    {
        id: 'test',
        media: [createPicsumImage({ id: 200, width: 200, height: 200 })],
        type: 'checkbox',
        value: '5000',
        // required: true,
        label: 'Test',
        price: 'Rp5.000',
    },
];
