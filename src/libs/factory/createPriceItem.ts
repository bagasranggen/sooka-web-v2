import { Price } from '@/libs/@types';

export type CreatePriceItemProps = {
    item?: Price;
};

export const createPriceItem = ({ item }: CreatePriceItemProps) => {
    const priceIsFree = !!item?.isFree;
    const priceRegular = item?.salePrice && item?.normalPrice ? (item?.normalPrice ?? 0) : undefined;
    const price = item?.salePrice ?? item?.normalPrice ?? 0;

    return { price, priceRegular, priceIsFree };
};
