'use client';

import React from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { PaginationOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';

import { BaseVariantProps } from '@/components/common/Carousel';

const ELEMENT = 'swiper-banner-pagination';

const renderBannerBullet: PaginationOptions['renderBullet'] = (index, className) => {
    let bulletClass: ArrayString = ['text-white font-semibold cursor-pointer'];
    bulletClass.push('transition-opacity'); // Transition
    bulletClass.push(
        'w-1 xl:w-auto h-1 xl:h-auto rounded-full xl:rounded-0 bg-white xl:bg-inherit inline-block xl:inline'
    ); // Mobile
    bulletClass.push('[&:not(.swiper-pagination-number-active)]:opacity-50'); // Active State
    bulletClass.push('[&:not(.swiper-pagination-number-active)]:hover:opacity-80'); // Hover State
    if (className) bulletClass.push(className);
    bulletClass = joinArrayString(bulletClass);

    return `<span class="${bulletClass}"><span class="hidden xl:inline-block">0${index + 1}</span></span>`;
};

const BannerPagination = (): React.ReactElement => {
    let paginationClass: ArrayString = [ELEMENT];
    paginationClass.push('xl:flex xl:flex-col');
    paginationClass.push('*:[&:not(:first-child)]:ms-0.5 *:ms-0');
    paginationClass.push(
        'absolute z-[2] bottom-1.5 xl:bottom-1/2 right-1/2 xl:right-3 translate-x-1/2 xl:translate-x-0 xl:translate-y-1/2'
    );
    paginationClass = joinArrayString(paginationClass);

    return <div className={paginationClass} />;
};

const BannerVariant = (props?: { length: number }): BaseVariantProps => ({
    modules: Pagination,
    options: {
        enabled: !!(props && props?.length > 1),
        loop: !!(props && props?.length > 1),
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
});

export default BannerVariant;
