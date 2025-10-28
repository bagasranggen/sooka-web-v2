import { Product } from '@/libs/@types';
import { createPictureImage } from './createPictureImage';
import { convertIntToCurrency } from '../utils/convertIntToCurrency';
import { checkMediaStatus } from '../utils/checkMediaStatus';

import { BaseItemProps } from '@/components/common/Picture';

export type CreateProductItemProps = {
    item: Product;
    hasPrice?: boolean;
};

export const createProductItem = ({ item, hasPrice = true }: CreateProductItemProps) => {
    const priceItem = item?.prices?.[0]?.price;
    const priceIsSale = !!priceItem?.salePrice;

    let price = undefined;
    if (hasPrice) price = convertIntToCurrency(priceItem?.normalPrice ?? 0);

    let salePrice = undefined;
    if (hasPrice && priceIsSale) salePrice = convertIntToCurrency(priceItem?.salePrice ?? 0);

    const mediaThumbnail = checkMediaStatus({
        item: item?.thumbnail as any,
        handles: ['productListingThumbnail', 'productListingThumbnailMobile'],
    });
    const mediaThumbnailHover = checkMediaStatus({
        item: item?.thumbnailHover as any,
        handles: ['productListingThumbnail', 'productListingThumbnailMobile'],
    });

    const media: BaseItemProps[] = [];
    if (mediaThumbnail?.productListingThumbnail) {
        media.push(
            createPictureImage({
                item: mediaThumbnail?.productListingThumbnail,
                media: mediaThumbnail?.productListingThumbnailMobile ? 768 : undefined,
            })
        );
    }
    if (mediaThumbnail?.productListingThumbnailMobile) {
        media.push(createPictureImage({ item: mediaThumbnail?.productListingThumbnailMobile }));
    }

    const mediaHover: BaseItemProps[] = [];
    if (mediaThumbnailHover?.productListingThumbnail) {
        mediaHover.push(
            createPictureImage({
                item: mediaThumbnailHover?.productListingThumbnail,
                media: mediaThumbnailHover?.productListingThumbnailMobile ? 768 : undefined,
            })
        );
    }
    if (mediaThumbnailHover?.productListingThumbnailMobile) {
        mediaHover.push(createPictureImage({ item: mediaThumbnailHover?.productListingThumbnailMobile }));
    }

    return {
        cta: { href: item?.url as any },
        media,
        mediaHover,
        title: item?.title ?? '',
        price,
        salePrice,
    };
};
