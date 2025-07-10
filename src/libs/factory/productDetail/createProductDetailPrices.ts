import { Product } from '@/libs/@types';

import { convertIntToCurrency } from '../../utils/convertIntToCurrency';

import parse from 'html-react-parser';

import { OrderItemProps, OrderItemSummariesProps, OrderProps } from '@/components/common/Form';

export const createProductDetailPrices = (props?: { prices?: Product['prices']; addons?: Product['addons'] }) => {
    const item: OrderProps['summaries'] = [];

    // Price Related
    if (props?.prices && props.prices.length > 0) {
        const tmpPriceItem: OrderItemProps = {
            title: 'Price',
            handle: 'price',
            required: true,
            items: [],
        };

        const tmpDimensionItem: OrderItemProps = {
            title: 'Dimension',
            handle: 'dimension',
            required: true,
            items: [],
        };

        props.prices.forEach((item, i: number, array: Product['prices']) => {
            const isSinglePrice = array.length === 1;

            const tmpPrice: OrderItemSummariesProps = {
                value: item?.salePrice ?? item?.price ?? '',
                label: '',
            };

            if (isSinglePrice) {
                tmpPrice.label = convertIntToCurrency(item?.salePrice ?? item?.price, true);

                if (item?.note) {
                    tmpDimensionItem.items.push({
                        value: item.note,
                        label: item.note,
                    });
                }
            }

            if (!isSinglePrice) {
                let tmpLabel = convertIntToCurrency(item.price, !item?.salePrice);

                if (item?.salePrice)
                    tmpLabel = `${convertIntToCurrency(0, true)} ${convertIntToCurrency(item.salePrice)} <s>${tmpLabel}</s>`;

                if (item?.note) tmpLabel += ` (${item.note})`;

                tmpPrice.label = parse(`<p>${tmpLabel}</p>`);
            }

            tmpPriceItem.items.push(tmpPrice);
        });

        item.push(tmpPriceItem);
        if (tmpDimensionItem.items.length > 0) item.push(tmpDimensionItem);
    }

    // Addons related
    if (props?.addons && props.addons.length > 0) {
        const tmp: OrderItemProps = {
            title: 'Add-ons(s)',
            handle: 'addOns',
            allowMultiple: true,
            required: false,
            items: [],
        };

        props.addons.forEach((item) => {
            if (typeof item === 'number') return;

            const price = item.prices?.[0];

            tmp.items.push({
                value: item?.slug ?? 0,
                label: `${item.title} (${convertIntToCurrency(price?.price ?? 0, true)})`,
            });
        });

        item.push(tmp);
    }

    return item;
};
