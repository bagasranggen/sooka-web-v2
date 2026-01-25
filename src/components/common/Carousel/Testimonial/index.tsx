import React from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base from '@/components/common/Carousel/Base';
import RichText, { RichTextProps } from '@/components/common/RichText';
import Columns from '@/components/common/Columns';
import Icon from '@/components/common/Icon';
import TestimonialVariant from '@/components/common/Carousel/Testimonial/TestimonialVariant';

export type TestimonialItemProps = {
    author: string;
    quote: RichTextProps['children'];
};

export type TestimonialProps = {
    items: TestimonialItemProps[];
};

const Testimonial = ({ items }: TestimonialProps): React.ReactElement => {
    let baseClass: ArrayString = ['relative'];
    baseClass.push(
        "after:content-[unset] lg:after:content-[''] after:absolute after:right-0 after:top-0 after:w-4/12 after:h-full after:bg-linear-to-l after:from-white after:from-70% after:z-10 after:pointer-events-none"
    );
    baseClass.push('lg:[&>_.swiper-pagination]:hidden pb-4! lg:pb-0!');
    baseClass = joinArrayString(baseClass);

    return (
        <Base
            className={baseClass}
            modulesVariant={TestimonialVariant}
            autoplay={{ delay: 8000 }}
            items={items.map(({ quote, author }: TestimonialItemProps) => {
                return {
                    children: (
                        <>
                            <Columns.Row>
                                <Columns.Column width={{ lg: 8 }}>
                                    <div className="relative">
                                        <Icon.Quote
                                            size="md"
                                            className="opacity-10 absolute"
                                        />
                                        <blockquote className="text-[2.2rem] pt-1 pl-2">
                                            <RichText>{quote}</RichText>
                                        </blockquote>

                                        <div className="mt-4 uppercase text-end text-[1.4rem] tracking-0.2 font-semibold">
                                            {author}
                                        </div>
                                    </div>
                                </Columns.Column>
                            </Columns.Row>
                        </>
                    ),
                };
            })}
        />
    );
};

export default Testimonial;
