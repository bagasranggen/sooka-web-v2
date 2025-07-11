import { Product } from '@/libs/@types';
import { createPictureImage } from './createPictureImage';
import { convertIntToCurrency } from '../utils/convertIntToCurrency';
import { checkMediaStatus } from '../utils/checkMediaStatus';

import { BaseItemProps } from '@/components/common/Picture';

export const createProductItem = (item: Product) => {
    // console.log({ item, sizes: item?.thumbnail?.sizes });

    const price = item?.prices?.[0]?.price;
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

    return {
        cta: { href: item?.url as any },
        media,
        mediaHover,
        title: item?.title ?? '',
        price: convertIntToCurrency(price?.normalPrice ?? 0),
        salePrice: priceIsSale ? convertIntToCurrency(price?.salePrice ?? 0) : undefined,
    };
};
