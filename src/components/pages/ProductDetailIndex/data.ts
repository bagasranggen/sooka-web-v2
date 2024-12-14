import { MARQUEE, PRODUCT_DETAIL_BANNER, PRODUCT_DETAIL_INFOS } from '@/libs/mock';
import { PageDataParamsProps, PageDataProps } from '@/libs/@types';
import { createPicsumImage } from '@/libs/factory';

import { ProductDetailIndexProps } from '@/components/pages/ProductDetailIndex';

export const ProductDetailData = async ({
    type,
}: PageDataParamsProps): Promise<PageDataProps<ProductDetailIndexProps>> => {
    return {
        type,
        entries: {
            banner: PRODUCT_DETAIL_BANNER,
            infos: {
                media: [createPicsumImage({ id: 682, width: 800, height: 1067 })],
                contents: PRODUCT_DETAIL_INFOS,
            },
            marquee: MARQUEE,
        },
    };
};
