import React, { forwardRef, useState } from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseProps } from '@/components/common/Input';

export type LabelProps = {
    label: string;
} & (Omit<BaseProps, 'id'> & Required<Pick<BaseProps, 'id'>>);

const Label = forwardRef<HTMLInputElement | HTMLSelectElement, LabelProps>(
    ({ id, label, className, type, error, hidden, onFocus, onBlurCapture, ...props }, ref) => {
        const [isFocus, setIsFocus] = useState<boolean>(false);

        let inputGroupClass: ArrayString = ['group relative after'];
        inputGroupClass.push("after:content-[''] after:bg-sooka-primary after:transition-width");
        inputGroupClass.push('after:absolute after:left-0 after:bottom-0');
        inputGroupClass.push('after:w-0 after:h-[.2rem]');
        inputGroupClass.push('after:w-0 after:h-[.2rem]');
        inputGroupClass.push('after:hover:w-full after:focus-within:w-full');
        if (hidden) inputGroupClass.push('hidden');
        inputGroupClass = joinArrayString(inputGroupClass);

        let inputClass: ArrayString = ['peer w-full placeholder:opacity-0 bg-transparent focus-visible:outline-none'];
        inputClass.push('min-h-[6.7rem]');
        if ((type !== 'select' && !props?.multiple) || (type === 'select' && !props?.multiple)) inputClass.push('pt-2');
        if (type === 'select' && props?.multiple) inputClass.push('mt-3');
        if (type !== 'select') inputClass.push('px-2');
        if (type === 'select') inputClass.push('px-[1.75rem]');
        inputClass.push('text-[2rem]');
        inputClass.push('border-b-2 border-b-sooka-primary/10');
        if (className) inputClass.push(className);
        inputClass = joinArrayString(inputClass);

        let labelClass: ArrayString = ['block uppercase transition-all origin-top-left'];
        labelClass.push('text-[2.5rem] whitespace-nowrap');
        labelClass.push('tracking-[.6rem]');
        labelClass.push('px-2 py-1');
        labelClass.push('absolute left-0 top-0');
        if (!isFocus) labelClass.push('peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2');
        labelClass.push(
            'group-focus-within:scale-50 group-focus-within:font-semibold group-focus-within:translate-x-[1.2rem]'
        );
        labelClass.push(
            'peer-[:not(:placeholder-shown)]:scale-50 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:translate-x-[1.2rem]'
        );
        labelClass = joinArrayString(labelClass);

        return (
            <>
                <div className={inputGroupClass}>
                    <Base
                        ref={ref}
                        type={type}
                        id={id}
                        className={inputClass}
                        placeholder={label}
                        hidden={hidden}
                        onFocus={(e: any) => {
                            setIsFocus(true);
                            if (onFocus) onFocus(e);
                        }}
                        onBlurCapture={(e: any) => {
                            setIsFocus(false);
                            if (onBlurCapture) onBlurCapture(e);
                        }}
                        {...props}
                    />

                    <label
                        htmlFor={id}
                        className={labelClass}>
                        {label}
                    </label>
                </div>

                {error && !hidden && <small className="text-rose-500 font-semibold">{error}</small>}
            </>
        );
    }
);

export default Label;
