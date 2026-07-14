import React, { forwardRef, HTMLInputTypeAttribute, useState } from 'react';

import Base, { BaseInputRef, BaseProps } from '@/components/common/Input/Base';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type BlockProps = {
    // type: Extract<NonNullable<BaseProps['type']>, 'radio' | 'checkbox'>;
    // type: HTMLInputTypeAttribute;
    type: Extract<HTMLInputTypeAttribute, 'radio' | 'checkbox'>;
    labelClassName?: ClassnameProps['className'];
} & (Omit<BaseProps, 'type'> & Required<Pick<BaseProps, 'id'>>);

const Block = forwardRef<BaseInputRef, BlockProps>(
    ({ type, id, children, className, labelClassName, ...props }, ref) => {
        let inputClass: ArrayStringProps = ['group input input--block'];
        if (type) inputClass.push(`input--${type}`);
        if (className) inputClass.push(className);
        inputClass = joinArrayString(inputClass);

        return (
            <div className={inputClass}>
                <Base
                    ref={ref}
                    type={type}
                    id={id}
                    hidden
                    {...props}
                />
                <label
                    htmlFor={id}
                    className={labelClassName}>
                    {children}
                </label>
            </div>
        );
    }
);

export default Block;
