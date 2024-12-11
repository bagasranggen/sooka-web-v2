import { Component } from '@/libs/@types';

import Banner, { BannerProps } from '@/components/common/Carousel/Banner';
import Base, { BaseProps } from '@/components/common/Carousel/Base';

export type * from '@/components/common/Carousel/Banner';
export type * from '@/components/common/Carousel/Base';

type CarouselComposition = {
    Banner: Component<BannerProps>;
};

export default Object.assign<Component<BaseProps>, CarouselComposition>(Base, { Banner });
