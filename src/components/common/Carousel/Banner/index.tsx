'use client';

import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base from '@/components/common/Carousel';
import Columns from '@/components/common/Columns';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import Overlay, { OverlayProps } from '@/components/common/Overlay';
import Container from '@/components/common/Container';
import { BaseItemProps } from '@/components/common/Picture';
import BannerVariant from '@/components/common/Carousel/Banner/BannerVariant';
import RichText, { RichTextProps } from '@/components/common/RichText';

export type BannerItemProps = {
    media?: BaseItemProps['src'];
    mediaMobile?: BaseItemProps['src'];
    align?: 'left' | 'right';
    category?: string;
    title: string;
    description?: RichTextProps['children'];
    cta?: Pick<BaseAnchorProps, 'href' | 'target'>;
    overlay?: OverlayProps['opacity'];
};

export type BannerProps = {
    items: BannerItemProps[];
};

const Banner = ({ items }: BannerProps): React.ReactElement => {
    return (
        <Base
            className="relative"
            modulesVariant={BannerVariant({ length: items.length })}
            autoplay={{ delay: 8000 }}
            loop
            items={items.map(({ align = 'right', cta, overlay, ...item }: BannerItemProps) => {
                let style = {} as React.CSSProperties;

                if (item?.media) {
                    style = Object.assign(style, { '--bg-image': item.media });
                }
                if (item?.mediaMobile) {
                    style = Object.assign(style, { '--bg-image-mobile': item.mediaMobile });
                }

                let bgClass: ArrayStringProps = ['bg-cover bg-center'];
                bgClass.push(`bg-(image:--bg-image-mobile)`);
                bgClass.push(`lg:bg-(image:--bg-image)`);
                bgClass = joinArrayString(bgClass);

                let contentClass: ArrayStringProps = ['items-center h-full'];
                if (align === 'right') contentClass.push('justify-end');
                contentClass = joinArrayString(contentClass);

                let Wrapper: any = 'div';
                if (cta) Wrapper = Button;

                let wrapperProps = {};
                if (cta) {
                    wrapperProps = {
                        as: 'anchor',
                        ...cta,
                    };
                }

                return {
                    children: (
                        <Wrapper
                            {...wrapperProps}
                            style={style}>
                            <Overlay
                                variant={align === 'right' ? 'gradient-right' : 'gradient-left'}
                                opacity={overlay ?? 5}>
                                <div className={bgClass}>
                                    <Container className="relative z-2 min-h-[55rem] h-[calc(90vh-7rem)] sm:h-[calc(70vh-7rem)] md:landscape:h-[calc(100vh-7rem)] lg:landscape:h-[calc(100vh-7rem)]">
                                        {/*<Columns.Row className={contentClass}>*/}
                                        {/*    <Columns.Column width={{ md: 7, xl: 5 }}>*/}
                                        {/*        {item.category && (*/}
                                        {/*            <div className="mb-1 flex items-center text-white text-sm lg:text-[1.4rem] tracking-0.2 font-bold uppercase">*/}
                                        {/*                <span className="w-[8.4rem] h-[.15rem] lg:h-[.3rem] bg-white me-1.5" />*/}
                                        {/*                {item.category}*/}
                                        {/*            </div>*/}
                                        {/*        )}*/}

                                        {/*        <h1 className="text-white text-[5rem] md:portrait:text-[6rem] lg:landscape:text-[7rem] leading-none md:landscape:leading-[5.5rem] lg:landscape:leading-[6.5rem] font-anglecia">*/}
                                        {/*            {item.title}*/}
                                        {/*        </h1>*/}

                                        {/*        {item?.description && (*/}
                                        {/*            <RichText className="mt-2.5 text-white">*/}
                                        {/*                {item.description}*/}
                                        {/*            </RichText>*/}
                                        {/*        )}*/}
                                        {/*    </Columns.Column>*/}
                                        {/*</Columns.Row>*/}
                                    </Container>
                                </div>
                            </Overlay>
                        </Wrapper>
                    ),
                };
            })}
        />
    );
};

export default Banner;
