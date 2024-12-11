'use client';

import React, { PropsWithChildren } from 'react';

import { SwiperModule } from 'swiper/types';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export type BaseItemProps = PropsWithChildren;

export type BaseProps = {
    items: BaseItemProps[];
} & Omit<SwiperProps, 'modules'>;

const Base = ({ items, ...props }: BaseProps): React.ReactElement => {
    const modules: SwiperModule[] = [];
    if (props.autoplay) modules.push(Autoplay);
    if (props.pagination) modules.push(Pagination);

    return (
        <Swiper
            modules={modules}
            {...props}>
            {items.map((item: BaseItemProps, i: number) => (
                <SwiperSlide key={i}>{item.children}</SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Base;
