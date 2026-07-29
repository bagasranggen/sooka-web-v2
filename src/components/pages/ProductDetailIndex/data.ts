import { FLAVOURS } from '@/libs/data';
import { ArrayStringProps, Flavour, PageDataParamsProps, PageDataProps, Product } from '@/libs/@types';
import { createMarqueeItem, createPictureImage, createProductDetailTag, createPurchasePopupItem } from '@/libs/factory';
import { checkMediaStatus, convertIntToCurrency } from '@/libs/utils';

import { apolloClient } from '@/libs/fetcher';
import { PRODUCT_DETAIL_QUERY } from '@/graphql';

import parse from 'html-react-parser';

import { ProductDetailIndexProps } from '@/components/pages/ProductDetailIndex';
import { ProductDetailInfoProps } from '@/components/pages/ProductDetailIndex/ProductDetailInfo';
import { BaseProps as HeadingBaseProps } from '@/components/common/Heading';
import { RangeProps } from '@/components/common/Range';

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

    const bannerVariants: ProductDetailIndexProps['entries']['banner']['variants'] = [];

    if (d?.prices && d.prices.length > 0) {
        d.prices.forEach((item) => {
            let tmp: NonNullable<ProductDetailIndexProps['entries']['banner']['variants']>[number] | undefined =
                undefined;

            const price = item?.price;

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

    const banner: ProductDetailIndexProps['entries']['banner'] = {
        media: [],
        children: '',
        variants: bannerVariants,
        popup: {
            content: createPurchasePopupItem({
                title: d?.title,
                description: d?.description,
                media: [(d?.thumbnail as any) ?? {}, (d?.thumbnailHover as any) ?? {}],
                variants: d?.prices ?? [],
                addOns: d?.addons ?? [],
            }),
        },
    };

    // Banner Title
    const hasBannerTitle = !!d?.bannerTitle;

    let title: ArrayStringProps = d?.title ?? '';
    if (hasBannerTitle && d?.bannerTitle) title = d.bannerTitle;
    if (title && typeof title === 'string') title = title.split(hasBannerTitle ? '\n' : ' ');

    let tmpTitle: HeadingBaseProps['children'] = '';
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

    // Media Content Description
    if (d?.description) {
        infos.contents.push({
            title: 'Description',
            description: d.description as any,
        });
    }

    const flavour: Flavour | undefined = d?.flavour;

    // Content Flavours
    if (flavour?.showFlavour) {
        const flavours: [string, number][] = [];
        Object.entries(flavour).forEach(([key, value]) => {
            const excludedKey = ['__typename', 'showFlavour'];

            if (!excludedKey.includes(key) && value) flavours.push([key, parseInt(value.replace('_', ''))]);
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

            const { data: mediaItem } = checkMediaStatus({
                item: item?.thumbnail,
                handles: ['assets400x400'],
                volumeAssets: 'mediaAddons',
            });

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
            const marqueeItem = createMarqueeItem({
                item,
                handles: ['productMarquee', 'productMarqueeMobile'],
                volumeAssets: 'mediaProducts',
            });

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
