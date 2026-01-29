import { Pagination, EffectFade } from 'swiper/modules';

import { BaseVariantProps } from '@/components/common/Carousel';

const FadeVariant: BaseVariantProps = {
    modules: [Pagination, EffectFade],
    options: {
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
    },
};

export default FadeVariant;
