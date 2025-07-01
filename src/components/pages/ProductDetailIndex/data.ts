import { FORM_ORDER } from '@/libs/mock';
import { PageDataParamsProps, PageDataProps } from '@/libs/@types';
import { createPictureImage } from '@/libs/factory';
import { checkMediaStatus } from '@/libs/utils';

import { apolloClient } from '@/libs/fetcher';
import { PRODUCT_DETAIL_QUERY } from '@/graphql';

import parse from 'html-react-parser';

import { ProductDetailIndexProps } from '@/components/pages/ProductDetailIndex';
import { ProductDetailInfoProps } from '@/components/pages/ProductDetailIndex/ProductDetailInfo';
import { BaseProps } from '@/components/common/Picture';

export const ProductDetailData = async ({
    type,
    slug,
}: PageDataParamsProps): Promise<PageDataProps<ProductDetailIndexProps>> => {
    const { data } = await apolloClient.query({
        query: PRODUCT_DETAIL_QUERY,
        variables: {
            slug,
        },
    });

    const d = data?.products?.docs?.[0];

    const mediaMain = checkMediaStatus({ item: d.thumbnail, handles: ['productDetailBanner', 'productDetailMobile'] });
    const mediaSecondary = checkMediaStatus({
        item: d.thumbnailHover,
        handles: ['productDetailSticky', 'productDetailMobile'],
    });

    const banner: ProductDetailIndexProps['entries']['banner'] = {
        media: [],
        children: parse(
            `<span>Straw<span class="text-sooka-primary">berry</span></span> <span>Short<span class="text-sooka-primary">cake</span></span>`
        ),
        form: {
            title: 'Strawberry Shortcake',
            summaries: FORM_ORDER,
        },
    };

    if (mediaMain?.productDetailBanner) {
        banner.media.push(
            createPictureImage({
                item: mediaMain.productDetailBanner,
                media: mediaMain?.productDetailMobile ? 768 : undefined,
            })
        );
    }
    if (mediaMain?.productDetailMobile) {
        banner.media.push(createPictureImage({ item: mediaMain.productDetailMobile }));
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
            title: 'Product Description',
            description: d.description,
        });
    }

    // Content Add-on(s)
    if (d?.addons && d.addons.length > 0) {
        const tmp: ProductDetailInfoProps['addOns'] = [];

        d.addons.forEach((item: any) => {
            const price = item?.prices?.[0];

            const mediaItem = checkMediaStatus({ item: item?.thumbnail, handles: ['productAddon'] });

            const media = [];
            if (mediaItem?.productAddon) {
                media.push(createPictureImage({ item: mediaItem.productAddon }));
            }

            tmp.push({
                media,
                title: item.title,
                description: parse(price?.note ?? ''),
            });
        });

        infos.contents.push({
            title: 'Product Add-on(s)',
            addOns: tmp,
        });
    }

    // Marquee
    const marquee: ProductDetailIndexProps['entries']['marquee'] = [];

    if (d?.marquee && d.marquee.length > 0) {
        d.marquee.forEach((item: any) => {
            const tmp: BaseProps['items'] = [];

            const media = checkMediaStatus({ item: item, handles: ['productMarquee', 'productMarqueeMobile'] });

            if (media?.productMarquee) {
                tmp.push(
                    createPictureImage({
                        item: media.productMarquee,
                        media: media?.productMarqueeMobile ? 992 : undefined,
                    })
                );
            }

            if (media?.productMarqueeMobile) {
                tmp.push(createPictureImage({ item: media.productMarqueeMobile }));
            }

            marquee.push(tmp);
        });
    }

    return {
        type,
        entries: {
            banner,
            infos,
            marquee,
        },
    };
};
