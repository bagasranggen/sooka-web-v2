import { FLAVOURS } from '@/libs/data';
import { Flavour, PageDataParamsProps, PageDataProps, Product } from '@/libs/@types';
import {
    createMarqueeItem,
    createPicsumImage,
    createPictureImage,
    createProductDetailPrices,
    createProductDetailTag,
} from '@/libs/factory';
import { checkMediaStatus, convertIntToCurrency } from '@/libs/utils';

import { apolloClient } from '@/libs/fetcher';
import { PRODUCT_DETAIL_QUERY } from '@/graphql';

import parse from 'html-react-parser';

import { ProductDetailIndexProps } from '@/components/pages/ProductDetailIndex';
import { ProductDetailInfoProps } from '@/components/pages/ProductDetailIndex/ProductDetailInfo';
import { BaseProps as HeadingBaseProps } from '@/components/common/Heading';
import { RangeProps } from '@/components/common/Range';
import { FADE_BANNER_MEDIA, FORM_PURCHASE_ADDONS, FORM_PURCHASE_VARIANTS, MODAL_PURCHASE } from '@/libs/mock';
import { PurchaseProps } from '@/components/common/Form';

export const ProductDetailData = async ({
    type,
    uri,
}: PageDataParamsProps): Promise<PageDataProps<ProductDetailIndexProps>> => {
    const { data } = await apolloClient.query({
        query: PRODUCT_DETAIL_QUERY,
        variables: { uri },
    });

    const d: Product | undefined = data?.products?.docs?.[0];

    const { data: mediaMain } = checkMediaStatus({
        item: d?.thumbnail as any,
        handles: ['productDetailBanner', 'productDetailMobile'],
        volumeAssets: 'mediaProducts',
    });
    const { data: mediaSecondary } = checkMediaStatus({
        item: d?.thumbnailHover as any,
        handles: ['productDetailSticky', 'productDetailMobile'],
        volumeAssets: 'mediaProducts',
    });

    const notes = createProductDetailTag({ item: d });

    console.log({ d });

    const bannerVariants: ProductDetailIndexProps['entries']['banner']['variants'] = [
        // {
        //     title: 'Square - 15cm x 15cm',
        //     price: 'Rp 120.000',
        // },
        // {
        //     title: 'Round - 15cm x 15cm',
        //     price: 'Rp 140.000',
        // },
    ];

    if (d?.prices && d.prices.length > 0) {
        d.prices.forEach((item) => {
            let tmp: NonNullable<ProductDetailIndexProps['entries']['banner']['variants']>[number] | undefined =
                undefined;

            const price = item?.price;

            // console.log({ item });
            if (price?.note) {
                tmp = Object.assign(tmp ?? {}, { title: price.note } as any);
            }
            if (price?.normalPrice) {
                tmp = Object.assign(tmp ?? {}, { price: convertIntToCurrency(price.normalPrice, true) } as any);
            }
            if (price?.salePrice) {
                tmp = Object.assign(tmp ?? {}, { price: convertIntToCurrency(price.salePrice, true) } as any);
            }

            if (tmp && tmp?.price && tmp?.title) bannerVariants.push(tmp);
        });
    }

    const createPurchasePopupItem = ({ variants: variantsProps }: { variants?: Product['prices'] }) => {
        const variants: PurchaseProps['variants'] = [];

        if (variantsProps && variantsProps.length > 0) {
            variantsProps.forEach((item) => {
                const price = item?.price;

                let value:
                    | NonNullable<PurchaseProps['variants']>[number]['value']
                    | NonNullable<PurchaseProps['variants']>[number]['value'][] = [];
                if (price?.note && Array.isArray(value)) value.push(price.note);

                console.log({ price });
            });
        }

        //     variants: FORM_PURCHASE_VARIANTS,
        // {
        //     id: 'tes',
        //         type: 'radio',
        //     value: 'Round - 15cm,120000',
        //     // checked: true,
        //     label: 'Round - 15cm',
        //     price: 'Rp120.000',
        //     required: true,
        // },

        //         addOns: FORM_PURCHASE_ADDONS,
        // {
        //     id: 'extraCandle',
        //         media: [createPicsumImage({ width: 200, height: 200 })],
        //     type: 'checkbox',
        //     value: 'extraCandle,Extra Candle,3000',
        //     // checked: true,
        //     // required: true,
        //     label: 'Extra Candle',
        //     description: 'lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        //     price: 'Rp3.000',
        //     input: {
        //     placeholder: 'Let us know your preferred candle color',
        // },
        // },

        return { variants };
    };

    let bannerPopup: NonNullable<ProductDetailIndexProps['entries']['banner']['popup']>['content'] = {
        media: [],
        // form: {
        //     // variants: bannerVariants,
        // },
        form: createPurchasePopupItem({ variants: d?.prices ?? [] }),
    };

    // media: FADE_BANNER_MEDIA,
    //     mediaThumbnail: [createPicsumImage({ id: 200, width: 800, height: 800 })],
    //     title: 'Strawberry Shortcake',
    //     description: parse(
    //     `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque excepturi nulla perferendis sapiente voluptatibus? Animi, cum ducimus, ipsam iure libero minus perspiciatis quam qui, quis quisquam quo repellat sed tenetur!</p>`
    // ),
    //     form: {
    //     variants: FORM_PURCHASE_VARIANTS,
    //         addOns: FORM_PURCHASE_ADDONS,
    // },

    const banner: ProductDetailIndexProps['entries']['banner'] = {
        media: [],
        children: '',
        variants: bannerVariants,
        // form: {
        //     title: d?.title,
        //     summaries: createProductDetailPrices({ prices: d?.prices, addons: d?.addons }),
        //     disabled: d?.availability === 'unavailable',
        //     notes: typeof notes === 'string' ? notes : undefined,
        // },
        // variants: [
        //     {
        //         title: 'Square - 15cm x 15cm',
        //         price: 'Rp 120.000',
        //     },
        //     {
        //         title: 'Round - 15cm x 15cm',
        //         price: 'Rp 140.000',
        //     },
        // ],
        popup: {
            // content: MODAL_PURCHASE,
            content: bannerPopup,
        },
    };

    // Banner Title
    const hasBannerTitle = !!d?.bannerTitle;

    let tmpTitle: HeadingBaseProps['children'] = '';
    let title = d?.title;
    if (hasBannerTitle) title = d.bannerTitle;
    title = title.split(hasBannerTitle ? '\n' : ' ');

    if (Array.isArray(title)) {
        title.forEach((item, i, arr) => {
            tmpTitle += `<span>${item}</span>`;

            if (i !== arr.length - 1) tmpTitle += '<br/>';
            if (i === arr.length - 1 && typeof tmpTitle === 'string') tmpTitle = parse(tmpTitle);
        });

        banner.children = tmpTitle;
    }

    // Banner Media
    if (mediaMain?.productDetailBanner) {
        banner.media.push(
            createPictureImage({
                item: mediaMain.productDetailBanner,
                media: mediaMain?.productDetailMobile ? 768 : undefined,
                loading: 'eager',
            })
        );
    }
    if (mediaMain?.productDetailMobile) {
        banner.media.push(
            createPictureImage({
                item: mediaMain.productDetailMobile,
                loading: 'eager',
            })
        );
    }

    // if (banner?.media && banner.media.length > 0) {
    //     if (bannerPopup?.media) bannerPopup.media.push(banner.media);
    // }
    // console.log({ banner });

    const infos: ProductDetailIndexProps['entries']['infos'] = {
        media: [],
        contents: [],
    };

    // Media Info
    if (mediaSecondary?.productDetailSticky) {
        infos.media.push(
            createPictureImage({
                item: mediaSecondary.productDetailSticky,
                media: mediaSecondary?.productDetailMobile ? 768 : undefined,
            })
        );
    }
    if (mediaSecondary?.productDetailMobile) {
        infos.media.push(createPictureImage({ item: mediaSecondary.productDetailMobile }));
    }

    // if (infos?.media && infos.media.length > 0) {
    //     if (bannerPopup?.media) bannerPopup.media.push(infos.media);
    // }

    // Media Content Description
    if (d?.description) {
        infos.contents.push({
            title: 'Description',
            description: d.description,
        });
    }

    const flavour: Flavour = d?.flavour;

    // Content Flavours
    if (flavour?.showFlavour && flavour?.custardySpongy && flavour?.freshCreamy && flavour?.tangySweet) {
        const flavours: [string, number][] = [];
        Object.entries(flavour).forEach(([key, value]) => {
            const excludedKey = ['__typename', 'showFlavour'];

            if (!excludedKey.includes(key)) flavours.push([key, parseInt(value.replace('_', ''))]);
        });

        const tmp: RangeProps[] = [];
        if (flavours.length > 0) {
            flavours.forEach(([key, value]) => {
                const text = FLAVOURS?.[key];

                if (text) tmp.push({ ...text, value: value as RangeProps['value'] });
            });
        }

        if (tmp.length > 0) {
            infos.contents.push({
                title: 'Flavours',
                flavours: tmp,
            });
        }
    }

    // Content Add-on(s)
    if (d?.addons && d.addons.length > 0) {
        const tmp: ProductDetailInfoProps['addOns'] = [];

        d.addons.forEach((item: any) => {
            const price = item?.prices?.[0]?.price;

            const { data: mediaItem } = checkMediaStatus({ item: item?.thumbnail, handles: ['assets400x400'] });

            const media = [];
            if (mediaItem?.assets400x400) {
                media.push(createPictureImage({ item: mediaItem.assets400x400 }));
            }

            tmp.push({
                media,
                title: item.title,
                description: parse(price?.note ?? ''),
            });
        });

        infos.contents.push({
            title: 'Add-on(s)',
            addOns: tmp,
        });
    }

    // Marquee
    const marquee: ProductDetailIndexProps['entries']['marquee'] = [];

    if (d?.marquee && d.marquee.length > 0) {
        d.marquee.forEach((item: any) => {
            const marqueeItem = createMarqueeItem({ item, handles: ['productMarquee', 'productMarqueeMobile'] });

            if (marqueeItem.length > 0) marquee.push(marqueeItem);
        });
    }

    return {
        type,
        meta: d?.meta,
        entries: {
            banner,
            infos,
            marquee,
        },
    };
};
