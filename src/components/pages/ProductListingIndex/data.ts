import { CARD_THUMBNAIL_WITH_PRICE, PRODUCT_LISTING_BANNER } from '@/libs/mock';
import { PageDataParamsProps, PageDataProps } from '@/libs/@types';

import { ProductListingIndexProps } from '@/components/pages/ProductListingIndex';

export const ProductListingData = async ({
    type,
}: PageDataParamsProps): Promise<PageDataProps<ProductListingIndexProps>> => {
    return {
        type,
        entries: {
            banner: PRODUCT_LISTING_BANNER,
            products: [...CARD_THUMBNAIL_WITH_PRICE, CARD_THUMBNAIL_WITH_PRICE[0], CARD_THUMBNAIL_WITH_PRICE[0]],
        },
    };
};
