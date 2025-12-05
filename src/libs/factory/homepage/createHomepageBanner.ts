import { checkMediaStatus } from '../../utils/checkMediaStatus';
import { createLinkItem } from '../../factory/createLinkItem';
import { createBackgroundImage } from '../../factory/createBackgroundImage';

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

    let media: BannerItemProps['media'] = mediaCustom?.bannerDesktop?.src;
    if (isProduct && mediaProduct?.bannerDesktop?.src) {
        media = createBackgroundImage({ item: mediaProduct.bannerDesktop });
    }

    let mediaMobile: BannerItemProps['mediaMobile'] = createBackgroundImage({ item: mediaCustom?.bannerMobile });
    if (mediaCustomHasMobile) {
        mediaMobile = createBackgroundImage({ item: mediaCustom?.mobileAssets?.bannerMobile });
    }
    if (isProduct && mediaProduct?.bannerMobile?.src) {
        mediaMobile = createBackgroundImage({ item: mediaProduct.bannerMobile });
    }
    if (isProduct && mediaProductHasMobile) {
        mediaMobile = createBackgroundImage({ item: mediaProduct?.mobileAssets?.bannerMobile });
    }

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
