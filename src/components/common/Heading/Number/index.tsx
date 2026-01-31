import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseProps } from '@/components/common/Heading';

export type NumberProps = {
    number?: string;
    size?: 'md' | 'lg';
} & Pick<BaseProps, 'className' | 'as' | 'children'>;

const Number = ({ as = 'h2', className, number, size = 'md', children }: NumberProps): React.ReactElement => {
    let headingClass: ArrayStringProps = ['font-anglecia flex items-end'];
    if (size === 'md') headingClass.push('text-[3rem] md:text-[4.5rem] leading-[3.25rem] md:leading-[4rem]');
    if (className) headingClass.push(className);
    headingClass = joinArrayString(headingClass);

    let headerProps: Pick<BaseProps, 'className' | 'size'> = {
        className: headingClass,
    };
    if (size === 'lg') {
        headerProps = { ...headerProps, size: 'section' };
    }

    return (
        <Base
            as={as}
            {...headerProps}>
            {number && <span className="font-bold me-1 font-noto-sans-jp text-[1.4rem] leading-[1.8]">{number}</span>}
            {children}
        </Base>
    );
};

export default Number;
