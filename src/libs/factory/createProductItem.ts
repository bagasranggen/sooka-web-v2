import { Product } from '@/payload-types';

import { createPictureImage } from './createPictureImage';
// import { createPicsumImage } from './createPicsumImage';
import { convertIntToCurrency } from '../utils/convertIntToCurrency';
import { checkMediaStatus } from '../utils/checkMediaStatus';

import { BaseItemProps } from '@/components/common/Picture';

export const createProductItem = (item: Product) => {
    // console.log({ item, sizes: item?.thumbnail?.sizes });

    const price = item?.prices?.[0];
    const priceIsSale = !!price?.salePrice;

    const mediaThumbnail = checkMediaStatus({ item: item?.thumbnail as any, handles: ['productListingThumbnail'] });
    const mediaThumbnailHover = checkMediaStatus({
        item: item?.thumbnailHover as any,
        handles: ['productListingThumbnail'],
    });

    const media: BaseItemProps[] = [];
    if (mediaThumbnail?.productListingThumbnail) {
        media.push(createPictureImage({ item: mediaThumbnail?.productListingThumbnail }));
    }

    const mediaHover: BaseItemProps[] = [];
    if (mediaThumbnailHover?.productListingThumbnail) {
        mediaHover.push(createPictureImage({ item: mediaThumbnailHover?.productListingThumbnail }));
    }

    // console.log({ media });

    return {
        cta: {
            href: item?.url as any,
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
