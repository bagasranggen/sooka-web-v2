import { Product } from '@/libs/@types';
import { createPictureImage } from './createPictureImage';
import { convertIntToCurrency } from '../utils/convertIntToCurrency';
import { checkMediaStatus } from '../utils/checkMediaStatus';

import { ThumbnailItemProps } from '@/components/common/Card';

export type CreateProductItemProps = {
    item: Product;
    hasPrice?: boolean;
};

export const createProductItem = ({ item, hasPrice = true }: CreateProductItemProps) => {
    const priceItem = item?.prices?.[0]?.price;
    const priceIsSale = !!priceItem?.salePrice;

    let price: ThumbnailItemProps['price'] = undefined;
    if (hasPrice) price = convertIntToCurrency(priceItem?.normalPrice ?? 0);

    let salePrice: ThumbnailItemProps['salePrice'] = undefined;
    if (hasPrice && priceIsSale) salePrice = convertIntToCurrency(priceItem?.salePrice ?? 0);

    const { data: mediaThumbnail } = checkMediaStatus({
        item: item?.thumbnail as any,
        handles: ['productListingThumbnail', 'productListingThumbnailMobile'],
    });
    const { data: mediaThumbnailHover } = checkMediaStatus({
        item: item?.thumbnailHover as any,
        handles: ['productListingThumbnail', 'productListingThumbnailMobile'],
    });

    const media: ThumbnailItemProps['media'] = [];
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

    const mediaHover: ThumbnailItemProps['mediaHover'] = [];
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

    let disabled: ThumbnailItemProps['disabled'] = false;
    let label: ThumbnailItemProps['label'] = undefined;

    if (item?.availability === 'unavailable') {
        disabled = true;
        label = 'Currently Unavailable';
    }

    return {
        cta: { href: item?.url as any },
        media,
        mediaHover,
        title: item?.title ?? '',
        price,
        salePrice,
        disabled,
        label,
    };
};
