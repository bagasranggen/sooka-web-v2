import { createProductItem } from '../../../../libs/factory/createProductItem';

import { ThumbnailProps } from '@/components/common/List';

export const CbRelatedProductsData = (props: any) => {
    const products: ThumbnailProps['items'] = [];

    if (props?.products && props.products.length > 0) {
        props.products.forEach((item: any) => {
            products.push(createProductItem(item));
        });
    }

    return { products };
};
