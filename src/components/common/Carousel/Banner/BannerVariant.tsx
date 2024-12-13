'use client';

import React from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { PaginationOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import { BaseVariantProps } from '@/components/common/Carousel';

const ELEMENT = 'swiper-banner-pagination';

const renderBannerBullet: PaginationOptions['renderBullet'] = (index, className) => {
    let bulletClass: ArrayString = ['text-white font-semibold cursor-pointer'];
    bulletClass.push('transition-opacity'); // Transition
    bulletClass.push('[&:not(.swiper-pagination-number-active)]:opacity-50'); // Active State
    bulletClass.push('[&:not(.swiper-pagination-number-active)]:hover:opacity-80'); // Hover State
    if (className) bulletClass.push(className);
    bulletClass = joinArrayString(bulletClass);

    return `<span class="${bulletClass}">0${index + 1}</span>`; // return pagination;
};

const BannerPagination = (): React.ReactElement => {
    let paginationClass: ArrayString = [ELEMENT];
    paginationClass.push('absolute z-[2] top-1/2 right-3 -translate-y-1/2 flex flex-col');
    paginationClass = joinArrayString(paginationClass);

    return <div className={paginationClass} />;
};

const BannerVariant: BaseVariantProps = {
    modules: Pagination,
    options: {
        pagination: {
            clickable: true,
            el: `.${ELEMENT}`,
            modifierClass: `${ELEMENT}-`,
            bulletClass: 'swiper-pagination-number',
            bulletActiveClass: 'swiper-pagination-number-active',
            renderBullet: renderBannerBullet,
        },
    },
    element: <BannerPagination />,
};

export default BannerVariant;
