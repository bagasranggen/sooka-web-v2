import React from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base from '@/components/common/Carousel';
import Columns from '@/components/common/Columns';
import Button from '@/components/common/Button';
import Overlay from '@/components/common/Overlay';
import Container from '@/components/common/Container';
import { BaseItemProps } from '@/components/common/Picture';

export type BannerItemProps = {
    media: BaseItemProps['src'];
    align?: 'left' | 'right';
    category?: string;
    title: string;
    description?: React.ReactNode;
};

export type BannerProps = {
    items: BannerItemProps[];
};

const Banner = ({ items }: BannerProps): React.ReactElement => {
    return (
        <Base
            className="relative"
            pagination={{ variant: 'banner' }}
            autoplay={{ delay: 8000 }}
            loop
            items={items.map(({ align = 'right', ...item }: BannerItemProps) => {
                const style = {
                    '--bg-image': `url("${item.media}")`,
                } as React.CSSProperties;

                let bgClass: ArrayString = ['bg-cover'];
                bgClass.push(`bg-[image:var(--bg-image)]`);
                bgClass = joinArrayString(bgClass);

                let contentClass: ArrayString = ['items-center h-full'];
                if (align === 'right') contentClass.push('justify-end');
                contentClass = joinArrayString(contentClass);

                return {
                    children: (
                        <Button
                            as="anchor"
                            href="#"
                            style={style}>
                            <Overlay
                                variant={align === 'right' ? 'gradient-right' : 'gradient-left'}
                                // variant='solid'
                                opacity={5}>
                                <div className={bgClass}>
                                    <Container className="relative z-[2] h-[calc(100vh-7rem)]">
                                        <Columns.Row className={contentClass}>
                                            <Columns.Column width={{ md: 5 }}>
                                                {item.category && (
                                                    <div className="mb-1 flex items-center text-white text-[1.4rem] tracking-0.2 font-bold uppercase">
                                                        <span className="w-[8.4rem] h-[.3rem] bg-white me-1.5" />
                                                        {item.category}
                                                    </div>
                                                )}

                                                <h1 className="text-white text-[7rem] leading-[6.5rem] font-anglecia">
                                                    {item.title}
                                                </h1>

                                                {item?.description && (
                                                    <div className="mt-2.5 text-white">{item.description}</div>
                                                )}
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
