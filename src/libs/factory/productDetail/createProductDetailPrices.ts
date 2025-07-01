import { Product } from '@/payload-types';
import { OrderItemProps, OrderProps } from '@/components/common/Form';

export const createProductDetailPrices = (props: { prices?: Product['prices'] }) => {
    const item: OrderProps['summaries'] = [];

    // const isSinglePrice = !!(props?.prices && props.prices.length === 1);

    console.log({ prices: props?.prices });

    if (props?.prices && props.prices.length > 0) {
        const tmp: OrderItemProps = {
            title: 'Price',
            handle: 'price',
            required: true,
            items: [
                // {
                //     value: 260000,
                //     label: 'Rp260.000 (round 15cm)',
                // },
                // {
                //     value: 310000,
                //     label: 'Rp310.000 (square 16x16cm)',
                // },
            ],
        };

        props.prices.forEach((item, i: number, array: any) => {
            console.log({ item });

            const isSinglePrice = array.length === 1;

            // Single Price
            // if (array.length) {
            // }

            tmp.items.push({
                value: item?.salePrice ?? item?.price ?? '',
                label: '',
            });
        });
    }

    // if (isSinglePrice) {
    //     props.prices?.forEach()
    // }

    return item;
};
