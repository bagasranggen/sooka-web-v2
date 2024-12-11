// 'use client';

import React from 'react';

import Base from '@/components/common/Carousel';
import Overlay from '@/components/common/Overlay';
import Container from '@/components/common/Container';
import Columns from '@/components/common/Columns';
import Button from '@/components/common/Button';
import { PaginationOptions } from 'swiper/types';

export type BannerItemProps = {};

export type BannerProps = {
    items: BannerItemProps[];
};

const Banner = ({ items }: BannerProps): React.ReactElement => {
    const pagination: PaginationOptions = {
        clickable: true,
        // renderBullet: () => {
        //     return `<div>aaa</div>`;
        // },
    };

    return (
        <Base
            pagination={pagination}
            // autoplay={true}
            items={items.map((item: BannerItemProps) => {
                return {
                    children: (
                        <Button
                            as="anchor"
                            href="#">
                            <Overlay
                                variant="gradient-right"
                                opacity={4}>
                                <div className="bg-[url('https://picsum.photos/id/237/1600/900')] bg-cover">
                                    <Container className="relative z-[2] h-[calc(100vh-7rem)]">
                                        <Columns.Row className="items-center justify-end h-full">
                                            <Columns.Column width={{ md: 5 }}>
                                                <div className="mb-1 flex items-center text-white text-[1.4rem] tracking-[.2rem] font-bold uppercase">
                                                    <span className="w-[8.4rem] h-[.3rem] bg-white me-1.5" />
                                                    New Products
                                                </div>
                                                <h1 className="text-white text-[7rem] leading-[6.5rem] font-anglecia">
                                                    Strawberry Shortcake
                                                </h1>
                                                <div className="mt-2.5 text-white">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Accusantium alias deleniti dolores dolorum, ex non quod.
                                                        Corporis dolore ea, fugit impedit laboriosam necessitatibus
                                                        neque nostrum optio praesentium quod repudiandae unde.
                                                    </p>
                                                </div>
                                            </Columns.Column>
                                        </Columns.Row>
                                    </Container>
                                </div>
                            </Overlay>
                        </Button>
                    ),
                };
            })}
        />
    );
};

export default Banner;
