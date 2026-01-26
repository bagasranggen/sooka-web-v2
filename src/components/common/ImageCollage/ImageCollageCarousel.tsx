'use client';

import React from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { Pagination } from 'swiper/modules';

import Picture from '@/components/common/Picture';
import Carousel from '@/components/common/Carousel';
import { ImageCollageItemProps } from '@/components/common/ImageCollage';

export type ImageCollageCarouselItemProps = ImageCollageItemProps;

export type ImageCollageCarouselProps = {
    items: ImageCollageCarouselItemProps[];
} & ClassnameProps;

const ImageCollageCarousel = ({ items, className }: ImageCollageCarouselProps): React.ReactElement | null => {
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
                    children: <Picture items={item} />,
                };
            })}
            modulesVariant={{
                modules: Pagination,
                options: {
                    autoplay: {
                        delay: 4000,
                    },
                    pagination: {
                        clickable: true,
                    },
                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                    },
                },
            }}
        />
    );
};

export default ImageCollageCarousel;
