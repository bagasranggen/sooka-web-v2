import React from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { PaginationOptions } from 'swiper/types';

export const BANNER_PAGINATION_ELEMENT = 'swiper-banner-pagination';

export const renderCustomBullet: PaginationOptions['renderBullet'] = (index, className) => {
    let bulletClass: ArrayString = ['text-white font-semibold cursor-pointer'];
    bulletClass.push('transition-opacity'); // Transition
    bulletClass.push('[&:not(.swiper-pagination-number-active)]:opacity-50'); // Active State
    bulletClass.push('[&:not(.swiper-pagination-number-active)]:hover:opacity-80'); // Hover State
    if (className) bulletClass.push(className);
    bulletClass = joinArrayString(bulletClass);

    return `<span class="${bulletClass}">0${index + 1}</span>`; // return pagination;
};

export const bannerPaginationOptions: PaginationOptions = {
    el: `.${BANNER_PAGINATION_ELEMENT}`,
    modifierClass: `${BANNER_PAGINATION_ELEMENT}-`,
    bulletClass: 'swiper-pagination-number',
    bulletActiveClass: 'swiper-pagination-number-active',
    renderBullet: renderCustomBullet,
};

const BannerPagination = (): React.ReactElement => {
    let paginationClass: ArrayString = [BANNER_PAGINATION_ELEMENT];
    paginationClass.push('absolute z-[2] top-1/2 right-3 flex flex-col');
    paginationClass = joinArrayString(paginationClass);

    return <div className={paginationClass} />;
};

export default BannerPagination;
