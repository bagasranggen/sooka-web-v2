import React from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Icon from '@/components/common/Icon';
import Base, { BaseProps } from '@/components/common/Button';

export type ArrowProps = {
    size?: 'md' | 'lg';
} & BaseProps;

const Arrow = ({ children, size = 'md', ...props }: ArrowProps): React.ReactElement => {
    const transitionClass = 'md:duration-500';

    let btnClass: ArrayString = [
        'group inline-flex py-0.5 items-center overflow-hidden rounded-full md:transition-colors md:hover:text-white',
    ];
    btnClass.push(transitionClass);
    if (size === 'md') btnClass.push('pl-2 pr-1');
    if (size === 'lg') btnClass.push('pl-2.5 pr-1.5');
    btnClass = joinArrayString(btnClass);

    let iconClass: ArrayString = [
        'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 md:-rotate-45 md:group-hover:rotate-0 transition-transform',
    ];
    iconClass.push(transitionClass);
    iconClass.push(
        'after:content-[""] after:bg-sooka-secondary after:w-full after:aspect-square after:absolute after:rounded-full after:z-[-1] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:pointer-events-none'
    );
    iconClass.push('after:transition-transform md:after:duration-500 md:group-hover:after:scale-[22]');
    iconClass = joinArrayString(iconClass);

    let textClass: ArrayString = ['z-10'];
    if (size === 'lg') textClass.push('text-[3rem]');
    textClass = joinArrayString(textClass);

    let circleClass: ArrayString = ['bg-sooka-secondary relative aspect-square rounded-full'];
    if (size === 'md') circleClass.push('ms-0.5 w-[1.8rem]');
    if (size === 'lg') circleClass.push('ms-1 w-[2.6rem]');
    circleClass = joinArrayString(circleClass);

    return (
        <Base
            {...props}
            className={btnClass}>
            <span className={textClass}>{children}</span>
            <div className={circleClass}>
                <div className={iconClass}>
                    <Icon.Arrow size={size} />
                </div>
            </div>
        </Base>
    );
};

export default Arrow;
