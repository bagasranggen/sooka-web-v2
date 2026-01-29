import React, { forwardRef, useState } from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseInputRef, BaseProps } from '@/components/common/Input';
import LabelText from '@/components/common/Input/Label/LabelText';

const EXCLUDE_SPACING_TYPE = ['select', 'textarea'];

export type LabelProps = {
    label: string;
} & (Omit<BaseProps, 'id'> & Required<Pick<BaseProps, 'id'>>);

const Label = forwardRef<BaseInputRef, LabelProps>(
    ({ id, label, className, type, error, hidden, onFocus, onBlurCapture, ...props }, ref) => {
        const [isFocus, setIsFocus] = useState<boolean>(false);

        let inputGroupClass: ArrayStringProps = ['group relative after'];
        inputGroupClass.push("after:content-[''] after:bg-sooka-primary after:transition-width");
        inputGroupClass.push('after:absolute after:left-0 after:bottom-0');
        inputGroupClass.push('after:w-0 after:h-[.2rem]');
        inputGroupClass.push('after:hover:w-full after:focus-within:w-full');
        if (hidden) inputGroupClass.push('hidden');
        inputGroupClass = joinArrayString(inputGroupClass);

        let inputClass: ArrayStringProps = [
            'peer w-full placeholder:opacity-0 bg-transparent focus-visible:outline-none',
        ];
        inputClass.push('min-h-[6.7rem]');
        if ((!EXCLUDE_SPACING_TYPE.includes(type) && !props?.multiple) || (type === 'select' && !props?.multiple)) {
            inputClass.push('pt-2');
        }
        if (type === 'textarea') inputClass.push('pt-3');
        if (type === 'select' && props?.multiple) inputClass.push('mt-3');
        if (type !== 'select') inputClass.push('px-2');
        if (type === 'select') inputClass.push('px-[1.75rem]');
        if (type === 'textarea') inputClass.push('-mb-0.5');
        inputClass.push('text-[2rem]');
        inputClass.push('border-b-2 border-b-sooka-primary/10');
        if (className) inputClass.push(className);
        inputClass = joinArrayString(inputClass);

        let labelClass = '';
        if (!isFocus && type !== 'textarea') {
            labelClass = 'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2';
        }

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

                    <LabelText
                        htmlFor={id}
                        className={labelClass}
                        required={props?.required || (props?.hook?.required as boolean)}>
                        {label}
                    </LabelText>
                </div>

                {error && !hidden && <small className="text-rose-500 font-semibold">{error}</small>}
            </>
        );
    }
);

export default Label;

export { LabelText };
