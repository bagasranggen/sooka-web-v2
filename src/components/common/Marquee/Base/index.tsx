'use client';

import React, { PropsWithChildren, Ref } from 'react';

import { ClassnameProps } from '@/libs/@types';
import { createArrayFromNumber } from '@/libs/factory';

import { useMeasure, useWindowSize } from 'react-use';

import Animation from '@/components/Animation';
import { MarqueeConfigProps } from '@/components/Animation/elements/Marquee';

export type BaseProps = {
    config?: MarqueeConfigProps;
    itemClassName?: ClassnameProps['className'];
} & PropsWithChildren;

const Base = ({ config, itemClassName, children }: BaseProps): React.ReactElement => {
    const { width: windowWidth } = useWindowSize();
    const [itemRef, { width: itemWidth }] = useMeasure();

    let repeat = 0;
    if (windowWidth > 0 && itemWidth > 0) repeat = Math.ceil((windowWidth * 2) / itemWidth);

    let itemProps = { 'data-animation-marquee': 'item' };
    if (itemClassName) itemProps = Object.assign(itemProps, { className: itemClassName });

    return (
        <div className="overflow-hidden">
            <Animation
                type="marquee"
                config={config}>
                <div
                    className="flex flex-nowrap *:shrink-0 *:basis-auto"
                    data-animation-marquee="wrapper">
                    <div
                        ref={itemRef as Ref<HTMLDivElement>}
                        {...itemProps}>
                        {children}
                    </div>

                    {createArrayFromNumber(repeat).map((_, i: number) => {
                        return (
                            <div
                                key={i}
                                {...itemProps}>
                                {children}
                            </div>
                        );
                    })}
                </div>
            </Animation>
        </div>
    );
};

export default Base;
