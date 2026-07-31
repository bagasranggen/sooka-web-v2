import { BaseProps } from '@/components/common/Picture';
import { PurchaseFormFields } from '@/components/common/Form';

export type CreateCartItemProps = {
    qty?: number;
    media?: BaseProps['items'];
};

export const createCartItem = (
    item: PurchaseFormFields,
    { media = [] }: CreateCartItemProps
): PurchaseFormFields | undefined => {
    let data = item;

    if (media && media.length > 0) data = Object.assign(data, { media });

    return data;
};
