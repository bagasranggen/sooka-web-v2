import { checkMediaStatus } from '../../utils/checkMediaStatus';
import { createLinkItem } from '../../factory/createLinkItem';

import { BannerItemProps } from '@/components/common/Carousel';

export const createHomepageBanner = (item: any): BannerItemProps => {
    const isProduct = item?.source === 'products';
    const product = item?.product;

    const { data: mediaProduct, hasMobile: mediaProductHasMobile } = checkMediaStatus({
        item: product?.thumbnail,
        handles: ['bannerDesktop', 'bannerTablet', 'bannerMobile'],
    });
    const { data: mediaCustom, hasMobile: mediaCustomHasMobile } = checkMediaStatus({
        item: item?.media,
        handles: ['bannerDesktop', 'bannerTablet', 'bannerMobile'],
    });

    let media = mediaCustom?.bannerDesktop?.src;
    if (isProduct && mediaProduct?.bannerDesktop?.src) media = mediaProduct.bannerDesktop.src;

    let mediaMobile = mediaCustom?.bannerMobile?.src;
    if (mediaCustomHasMobile) mediaMobile = mediaCustom?.mobileAssets?.bannerMobile?.src;
    if (isProduct && mediaProduct?.bannerMobile?.src) mediaMobile = mediaProduct.bannerMobile.src;
    if (isProduct && mediaProductHasMobile) mediaMobile = mediaProduct?.mobileAssets?.bannerMobile?.src;

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
        mediaMobile,
        align: item?.textAlign,
        category: item?.tag?.title,
        title,
        description,
        cta,
        overlay,
    };
};
