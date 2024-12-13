import React from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseProps } from '@/components/common/Heading';

export type NumberProps = {
    number: string;
    size?: 'md' | 'lg';
} & Pick<BaseProps, 'className' | 'as' | 'children'>;

const Number = ({ as = 'h2', className, number, size = 'md', children }: NumberProps): React.ReactElement => {
    let headingClass: ArrayString = ['font-anglecia flex items-end'];
    if (size === 'md') headingClass.push('text-[4.5rem] leading-[4rem]');
    if (size === 'lg') headingClass.push('text-[8.5rem] leading-[7rem]');
    if (className) headingClass.push(className);
    headingClass = joinArrayString(headingClass);

    return (
        <Base
            as={as}
            className={headingClass}>
            <span className="font-bold me-1 font-noto-sans-jp text-[1.4rem] leading-[1.8]">{number}</span>
            {children}
        </Base>
    );
};

export default Number;
