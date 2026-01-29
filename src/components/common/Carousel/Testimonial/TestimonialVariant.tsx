'use client';

import React from 'react';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import { BaseVariantProps } from '@/components/common/Carousel';
import Icon from '@/components/common/Icon';

const TestimonialNavigation = () => {
    return (
        <div className="hidden lg:flex absolute top-0 right-0 z-20">
            <button className="[&:not(.button-disabled)]:opacity-100 opacity-20 button-prev">
                <Icon.CircleArrow direction="left" />
            </button>
            <button className="ms-3 [&:not(.button-disabled)]:opacity-100 opacity-20 button-next">
                <Icon.CircleArrow direction="right" />
            </button>
        </div>
    );
};

const TestimonialVariant: BaseVariantProps = {
    modules: [Navigation, Pagination],
    options: {
        navigation: {
            enabled: true,
            nextEl: '.button-next',
            prevEl: '.button-prev',
            disabledClass: 'button-disabled',
        },
        pagination: {
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active bg-sooka-primary!',
        },
    },
    element: <TestimonialNavigation />,
};

export default TestimonialVariant;
