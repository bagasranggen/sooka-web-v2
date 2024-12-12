import React from 'react';

import Base, { BaseProps } from '@/components/common/Heading';
import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type NumberProps = {
    number: string;
} & Pick<BaseProps, 'className' | 'as' | 'children'>;

const Number = ({ as = 'h2', className, number, children }: NumberProps): React.ReactElement => {
    let headingClass: ArrayString = ['font-anglecia text-[8.5rem] leading-[7rem]'];
    if (className) headingClass.push(className);
    headingClass = joinArrayString(headingClass);

    return (
        <Base
            as={as}
            className={headingClass}>
            <span className="font-bold me-1 font-noto-sans-jp text-[1.4rem]">{number}</span>
            {children}
            {/*<span className="ms-1 font-anglecia text-[8.5rem] leading-[7rem]">Best Seller</span>*/}
        </Base>
    );
};

export default Number;
