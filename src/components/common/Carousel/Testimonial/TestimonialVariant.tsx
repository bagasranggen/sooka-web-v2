'use client';

import React from 'react';

import { Navigation } from 'swiper/modules';

import { BaseVariantProps } from '@/components/common/Carousel';
import Icon from '@/components/common/Icon';

const TestimonialNavigation = () => {
    return (
        <div className="flex absolute top-0 right-0 z-20">
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
    modules: Navigation,
    options: {
        navigation: {
            enabled: true,
            nextEl: '.button-next',
            prevEl: '.button-prev',
            disabledClass: 'button-disabled',
        },
    },
    element: <TestimonialNavigation />,
};

export default TestimonialVariant;
