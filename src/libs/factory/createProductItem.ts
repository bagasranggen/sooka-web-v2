import { Product } from '@/payload-types';

import { createPictureImage } from './createPictureImage';
import { createPicsumImage } from './createPicsumImage';
import { convertIntToCurrency } from '../utils/convertIntToCurrency';

import { BaseItemProps } from '@/components/common/Picture';

export const createProductItem = (item: Product) => {
    // console.log({ item, sizes: item?.thumbnail?.sizes });

    const price = item?.prices?.[0];
    const priceIsSale = !!price?.salePrice;

    const media: BaseItemProps[] = [];
    if (item?.thumbnail && 'sizes' in item?.thumbnail && item?.thumbnail?.sizes?.productListingThumbnail) {
        // console.log({ me: item?.thumbnail?.sizes?.productListingThumbnail });
        media.push(createPictureImage({ item: item?.thumbnail?.sizes?.productListingThumbnail }));
    }

    const mediaHover: BaseItemProps[] = [];
    if (
        item?.thumbnailHover &&
        'sizes' in item?.thumbnailHover &&
        item?.thumbnailHover?.sizes?.productListingThumbnail
    ) {
        mediaHover.push(createPictureImage({ item: item?.thumbnailHover?.sizes?.productListingThumbnail }));
    }

    console.log({ media });

    return {
        cta: {
            href: item?.url,
        },
        media,
        mediaHover,
        // media: [
        //     createPictureImage({ item: createPicsumImage({ id: 237, width: 400, height: 619 }), media: 768 }),
        //     createPictureImage({ item: createPicsumImage({ id: 237, width: 400, height: 400 }) }),
        // ],
        // mediaHover: [
        //     createPictureImage({ item: createPicsumImage({ id: 22, width: 400, height: 619 }), media: 768 }),
        //     createPictureImage({ item: createPicsumImage({ id: 22, width: 400, height: 400 }) }),
        // ],
        title: item?.title ?? '',
        price: convertIntToCurrency(price?.price ?? 0),
        salePrice: priceIsSale ? convertIntToCurrency(price?.salePrice ?? 0) : undefined,
    };
};
