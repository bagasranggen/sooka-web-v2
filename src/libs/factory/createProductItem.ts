import { Product } from '@/libs/@types';
import { createPictureImage } from '@/libs/factory/createPictureImage';
import { createProductDetailTag } from '@/libs/factory/productDetail/createProductDetailTag';
import { createPurchasePopupItem } from '@/libs/factory/createPurchasePopupItem';
import { convertIntToCurrency } from '@/libs/utils/convertIntToCurrency';
import { checkMediaStatus } from '@/libs/utils/checkMediaStatus';

import { ThumbnailItemProps } from '@/components/common/Card';

export type CreateProductItemProps = {
    item: Product;
    hasPrice?: boolean;
    hasBadge?: boolean;
};

export const createProductItem = ({ item, hasPrice = true, hasBadge = false }: CreateProductItemProps) => {
    const priceItem = item?.prices?.[0]?.price;
    const priceIsSale = !!priceItem?.salePrice;

    let price: ThumbnailItemProps['price'] = undefined;
    if (hasPrice) price = convertIntToCurrency(priceItem?.normalPrice ?? 0);

    let salePrice: ThumbnailItemProps['salePrice'] = undefined;
    if (hasPrice && priceIsSale) salePrice = convertIntToCurrency(priceItem?.salePrice ?? 0);

    const { data: mediaThumbnail } = checkMediaStatus({
        item: item?.thumbnail as any,
        handles: ['productListingThumbnail', 'productListingThumbnailMobile'],
        volumeAssets: 'mediaProducts',
    });
    const { data: mediaThumbnailHover } = checkMediaStatus({
        item: item?.thumbnailHover as any,
        handles: ['productListingThumbnail', 'productListingThumbnailMobile'],
        volumeAssets: 'mediaProducts',
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
        media.push(createPictureImage({ item: mediaThumbnail?.productListingThumbnailMobile, className: 'w-full' }));
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
        mediaHover.push(
            createPictureImage({ item: mediaThumbnailHover?.productListingThumbnailMobile, className: 'w-full' })
        );
    }

    let label = undefined;
    if (hasBadge) label = createProductDetailTag({ item });

    let disabled = false;
    if (label) disabled = item?.availability === 'unavailable';

    return {
        cta: { href: item?.url as any },
        media,
        mediaHover,
        title: item?.title ?? '',
        price,
        salePrice,
        disabled,
        label,
        popup: createPurchasePopupItem({
            title: item?.title,
            description: item?.description,
            media: [(item?.thumbnail as any) ?? {}, (item?.thumbnailHover as any) ?? {}],
            variants: item?.prices ?? [],
            addOns: item?.addons ?? [],
        }),
    };
};
