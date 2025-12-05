import { FLAVOURS } from '@/libs/data';
import { Flavour, PageDataParamsProps, PageDataProps } from '@/libs/@types';
import {
    createMarqueeItem,
    createPictureImage,
    createProductDetailPrices,
    createProductDetailTag,
} from '@/libs/factory';
import { checkMediaStatus } from '@/libs/utils';

import { axiosClient } from '@/libs/fetcher';

import parse from 'html-react-parser';

import { ProductDetailIndexProps } from '@/components/pages/ProductDetailIndex';
import { ProductDetailInfoProps } from '@/components/pages/ProductDetailIndex/ProductDetailInfo';
import { BaseProps as HeadingBaseProps } from '@/components/common/Heading';
import { RangeProps } from '@/components/common/Range';

export const ProductDetailData = async ({
    type,
    slug,
}: PageDataParamsProps): Promise<PageDataProps<ProductDetailIndexProps>> => {
    const { data } = await axiosClient().get(`/products?slug=${slug}`);

    const d = data?.products?.docs?.[0];

    const { data: mediaMain } = checkMediaStatus({
        item: d?.thumbnail,
        handles: ['productDetailBanner', 'productDetailMobile'],
    });
    const { data: mediaSecondary } = checkMediaStatus({
        item: d?.thumbnailHover,
        handles: ['productDetailSticky', 'productDetailMobile'],
    });

    const banner: ProductDetailIndexProps['entries']['banner'] = {
        media: [],
        children: '',
        form: {
            title: d?.title,
            summaries: createProductDetailPrices({ prices: d?.prices, addons: d?.addons }),
            disabled: d?.availability === 'unavailable',
            notes: createProductDetailTag({ item: d }),
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
