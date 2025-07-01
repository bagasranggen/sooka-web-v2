import { FORM_ORDER, MARQUEE, PRODUCT_DETAIL_INFOS } from '@/libs/mock';
import { PageDataParamsProps, PageDataProps } from '@/libs/@types';
import { createPictureImage } from '@/libs/factory';
import { checkMediaStatus } from '@/libs/utils';

import { apolloClient } from '@/libs/fetcher';
import { PRODUCT_DETAIL_QUERY } from '@/graphql';

import { ProductDetailIndexProps } from '@/components/pages/ProductDetailIndex';
import parse from 'html-react-parser';

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
        // contents: PRODUCT_DETAIL_INFOS,
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
    console.log({ d });

    return {
        type,
        entries: {
            banner,
            infos,
            marquee: MARQUEE,
        },
    };
};
