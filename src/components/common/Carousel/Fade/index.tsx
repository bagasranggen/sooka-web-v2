'use client';

import React, { PropsWithChildren } from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import 'swiper/css/effect-fade';

import Carousel from '@/components/common/Carousel';
import FadeVariant from '@/components/common/Carousel/Fade/FadeVariant';

export type FadeProps = {
    items: PropsWithChildren[];
} & ClassnameProps;

const Fade = ({ items, className }: FadeProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    let carouselClass: ArrayStringProps = ['[&>.swiper-pagination]:relative [&>.swiper-pagination]:mt-1'];
    if (className) carouselClass.push(className);
    carouselClass = joinArrayString(carouselClass);

    return (
        <Carousel
            autoplay
            className={carouselClass}
            style={{ '--swiper-pagination-color': '#F7613F' } as React.CSSProperties}
            items={items.map((item) => {
                return {
                    children: item.children,
                };
            })}
            modulesVariant={FadeVariant}
        />
    );
};

export default Fade;
