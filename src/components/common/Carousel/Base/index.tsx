'use client';

import React, { PropsWithChildren } from 'react';

import { PaginationOptions, SwiperModule } from 'swiper/types';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import BannerPagination, { bannerPaginationOptions } from '@/components/common/Carousel/Banner/BannerPagination';

export type BaseItemProps = PropsWithChildren;

export type BaseProps = {
    items: BaseItemProps[];
    pagination?: { variant: 'banner' } & Omit<PaginationOptions, 'clickable' | 'renderBullet'>;
} & Omit<SwiperProps, 'modules' | 'pagination'>;

const Base = ({ items, pagination, ...props }: BaseProps): React.ReactElement => {
    const modules: SwiperModule[] = [];
    if (props.autoplay) modules.push(Autoplay);
    if (pagination) modules.push(Pagination);

    let paginationOptions: PaginationOptions = {};
    if (pagination) {
        paginationOptions = {
            clickable: true,
            ...pagination,
        };
    }
    if (pagination?.variant === 'banner') {
        paginationOptions = {
            ...paginationOptions,
            ...bannerPaginationOptions,
        };
    }

    return (
        <Swiper
            modules={modules}
            pagination={paginationOptions}
            {...props}>
            {items.map((item: BaseItemProps, i: number) => (
                <SwiperSlide key={i}>{item.children}</SwiperSlide>
            ))}
            {pagination?.variant === 'banner' && <BannerPagination />}
        </Swiper>
    );
};

export default Base;
