import React, { forwardRef } from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseProps } from '@/components/common/Input';

export type LabelProps = {
    label: React.ReactNode;
} & (Omit<BaseProps, 'id'> & Required<Pick<BaseProps, 'id'>>);

const Label = forwardRef<HTMLInputElement, LabelProps>(({ id, label, className, ...props }, ref) => {
    // const textSize =

    let inputClass: ArrayString = [];
    if (className) inputClass.push(className);
    inputClass = joinArrayString(inputClass);

    return (
        <div className="group relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[.2rem] after:bg-sooka-primary after:transition-width after:hover:w-full after:focus-within:w-full">
            <label
                htmlFor={id}
                className="block text-[3rem] absolute px-2 py-1 uppercase tracking-0.5 transition-all">
                {label}
            </label>

            <Base
                ref={ref}
                id={id}
                // className={inputClass}
                className="border-b-2 focus-visible:outline-none pt-2 px-2 text-[3rem] w-full"
                {...props}
            />
        </div>
    );
});

export default Label;
