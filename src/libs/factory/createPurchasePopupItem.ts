import { ArrayStringProps, MediaProduct, Product } from '@/libs/@types';
import { checkMediaStatus, convertIntToCurrency, joinArrayString, toCamelCase } from '@/libs/utils';
import { createPictureImage } from '@/libs/factory/createPictureImage';
import { createPriceItem } from '@/libs/factory/createPriceItem';

import { PurchaseProps } from '@/components/common/Modal';

export type CreatePurchasePopupItemProps = {
    media?: (Omit<MediaProduct, 'url'> & { src?: MediaProduct['url'] })[];
    title?: Product['title'];
    description?: Product['description'];
    variants?: Product['prices'];
    addOns?: Product['addons'];
};

export const createPurchasePopupItem = ({
    media: mediaProps,
    title,
    description,
    variants: variantsProps,
    addOns: addOnsProps,
}: CreatePurchasePopupItemProps): Pick<
    PurchaseProps,
    'title' | 'description' | 'media' | 'mediaThumbnail' | 'form'
> => {
    const media: PurchaseProps['media'] = [];

    if (mediaProps && mediaProps.length > 0) {
        mediaProps.forEach((item) => {
            if (!item) return;
            if (typeof item === 'number') return;
            if (!item?.src) return;

            const { data } = checkMediaStatus({
                item: item as any,
                handles: ['productDetailBanner', 'productDetailMobile'],
                volumeAssets: 'mediaProducts',
            });

            const tmp: NonNullable<PurchaseProps['media']>[number] = [];

            if (data?.productDetailBanner) {
                tmp.push(
                    createPictureImage({
                        item: data.productDetailBanner,
                        media: data?.productDetailMobile ? 768 : undefined,
                    })
                );
            }

            if (data?.productDetailMobile) {
                tmp.push(
                    createPictureImage({
                        item: data.productDetailMobile,
                    })
                );
            }

            if (tmp.length > 0) media.push(tmp);
        });
    }

    const variants: NonNullable<PurchaseProps['form']>['variants'] = [];

    if (variantsProps && variantsProps.length > 0) {
        variantsProps.forEach((item, i) => {
            const itemPrice = item?.price;
            const { price, priceRegular } = createPriceItem({ item: itemPrice });

            let value: ArrayStringProps = [];
            if (itemPrice?.note) value.push(itemPrice.note);
            value.push(price.toString());
            value = joinArrayString(value as string[], ',');

            if (value) {
                variants.push({
                    id: toCamelCase(itemPrice?.note ?? ''),
                    type: 'radio',
                    value,
                    label: itemPrice?.note ?? '',
                    description: itemPrice?.additionalInfo ?? '',
                    regularPrice: priceRegular ? convertIntToCurrency(priceRegular, true) : undefined,
                    price: convertIntToCurrency(price, true),
                    required: true,
                    checked: i === 0,
                });
            }
        });
    }

    const addOns: NonNullable<PurchaseProps['form']>['addOns'] = [];

    if (addOnsProps && addOnsProps.length > 0) {
        addOnsProps.forEach((item) => {
            if (typeof item === 'number') return;

            const { data: mediaItem } = checkMediaStatus({
                item: item?.thumbnail as any,
                handles: ['assets400x400'],
                volumeAssets: 'mediaAddons',
            });

            const media: NonNullable<NonNullable<PurchaseProps['form']>['addOns']>[number]['media'] = [];
            if (mediaItem?.assets400x400) {
                media.push(
                    createPictureImage({ item: mediaItem.assets400x400, className: 'aspect-square object-cover' })
                );
            }

            const itemPrice = item?.prices?.[0]?.price;
            const { price, priceRegular, priceIsFree } = createPriceItem({ item: itemPrice });

            const label = item?.title ?? '';
            const slug = toCamelCase(label);

            let value: ArrayStringProps = [];
            if (slug) value.push(slug);
            if (label) value.push(label);
            value.push(price.toString());
            value = joinArrayString(value, ',');

            let input = undefined;
            if (item?.hasNote && item?.note) {
                input = Object.assign(input ?? {}, {
                    placeholder: item.note,
                });
            }

            if (value) {
                addOns.push({
                    id: slug,
                    type: 'checkbox',
                    media,
                    value,
                    label,
                    description: itemPrice?.note ?? '',
                    regularPrice: priceRegular ? convertIntToCurrency(priceRegular, true) : undefined,
                    price: priceIsFree ? 'free' : convertIntToCurrency(price, true),
                    input,
                });
            }
        });
    }

    return {
        media,
        mediaThumbnail: media?.[0],
        title,
        description: description as any,
        form: { variants, addOns },
    };
};
