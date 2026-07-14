import { Pagination, EffectFade } from 'swiper/modules';

import { BaseVariantProps } from '@/components/common/Carousel';

export type FadeVariantProps = {
    length?: number;
} & Pick<BaseVariantProps, 'options'>;

const FadeVariant = ({ length, options }: FadeVariantProps): BaseVariantProps => ({
    modules: [Pagination, EffectFade],
    options: {
        enabled: !!(length && length > 0),
        autoplay: {
            delay: 6000,
        },
        effect: 'fade',
        pagination: {
            clickable: true,
        },
        // slidesPerView: 1,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
        },
        ...options,
    },
});

export default FadeVariant;
