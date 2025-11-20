import { Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Carousel/Base';
import Banner, { BannerProps } from '@/components/common/Carousel/Banner';
import Fade, { FadeProps } from '@/components/common/Carousel/Fade';
import Testimonial, { TestimonialProps } from '@/components/common/Carousel/Testimonial';

export type * from '@/components/common/Carousel/Base';
export type * from '@/components/common/Carousel/Banner';
export type * from '@/components/common/Carousel/Fade';
export type * from '@/components/common/Carousel/Testimonial';

type CarouselComposition = {
    Banner: Component<BannerProps>;
    Fade: Component<FadeProps>;
    Testimonial: Component<TestimonialProps>;
};

export default Object.assign<Component<BaseProps>, CarouselComposition>(Base, { Banner, Fade, Testimonial });
