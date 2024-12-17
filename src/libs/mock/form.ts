import { OrderProps } from '@/components/common/Form';

export const FORM_ORDER: OrderProps['summaries'] = [
    {
        title: 'Price',
        handle: 'price',
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
];
