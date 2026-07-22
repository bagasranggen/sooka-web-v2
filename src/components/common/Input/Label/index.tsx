import React, { forwardRef, useState } from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseInputRef, BaseProps } from '@/components/common/Input/Base';
import LabelText from '@/components/common/Input/Label/LabelText';

const EXCLUDE_SPACING_TYPE = ['select', 'textarea'];

export type LabelProps = {
    label: string;
} & (Omit<BaseProps, 'id'> & Required<Pick<BaseProps, 'id'>>);

const Label = forwardRef<BaseInputRef, LabelProps>(
    ({ id, label, className, type, error, hidden, onFocus, onBlurCapture, ...props }, ref) => {
        const [isFocus, setIsFocus] = useState<boolean>(false);

        let inputGroupClass: ArrayStringProps = ['group input input--label'];
        if (isFocus) inputGroupClass.push('input--focus');
        if (type !== 'select') inputGroupClass.push('input--has-line');
        if (hidden) inputGroupClass.push('hidden');
        inputGroupClass = joinArrayString(inputGroupClass);

        let inputClass: ArrayStringProps = ['peer'];
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
