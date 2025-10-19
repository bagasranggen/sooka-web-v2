import { checkMediaStatus } from '../../utils/checkMediaStatus';
import { createLinkItem } from '../../factory/createLinkItem';

import { BannerItemProps } from '@/components/common/Carousel';

export const createHomepageBanner = (item: any): BannerItemProps => {
    const isProduct = item?.source === 'products';
    const product = item?.product;

    const mediaProduct = checkMediaStatus({
        item: product?.thumbnail,
        handles: ['bannerDesktop', 'bannerTablet', 'bannerMobile'],
    });
    const mediaCustom = checkMediaStatus({
        item: item?.media,
        handles: ['bannerDesktop', 'bannerTablet', 'bannerMobile'],
    });

    let media = mediaCustom?.bannerDesktop?.src;
    if (isProduct && mediaProduct?.bannerDesktop?.src) media = mediaProduct.bannerDesktop.src;

    let title = item?.title;
    if (isProduct && product?.title) title = product?.title;

    let description = item?.description;
    if (isProduct && product?.description) description = product.description;

    let cta = undefined;

    const { linkIsValid, link } = createLinkItem(item?.link);
    if (linkIsValid) {
        cta = link;
    }
    if (isProduct && product?.url) {
        cta = Object.assign({
            href: product.url,
            target: item?.productTarget ? '_blank' : undefined,
        });
    }

    let overlay: BannerItemProps['overlay'] = 3;
    if (item?.bannerOverlay) {
        const oly = item.bannerOverlay.replace('_', '');
        overlay = parseInt(oly) as BannerItemProps['overlay'];
    }

    return {
        media,
        align: item?.textAlign,
        category: item?.tag?.title,
        title,
        description,
        cta,
        overlay,
    };
};
