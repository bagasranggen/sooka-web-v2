import React, { forwardRef, HTMLInputTypeAttribute } from 'react';

import { BaseHookOptionProps, BaseInputHookProps } from '@/libs/@types';

import InputText from '@/components/common/Input/shared/InputText';
import InputRadio from '@/components/common/Input/shared/InputRadio';
import InputCheckbox from '@/components/common/Input/shared/InputCheckbox';

export type BaseInputRef = HTMLInputElement;

export type BaseInputProps = {
    type: HTMLInputTypeAttribute;
    hook?: BaseInputHookProps & BaseHookOptionProps;
} & React.InputHTMLAttributes<BaseInputRef>;

export type BaseProps = {
    error?: React.ReactNode;
} & BaseInputProps;

const Base = forwardRef<HTMLInputElement, BaseProps>(({ error, ...props }, ref) => {
    let input = (
        <InputText
            ref={ref}
            {...props}
        />
    );

    if (props.type === 'radio') {
        input = (
            <InputRadio
                ref={ref}
                {...props}
            />
        );
    }

    if (props.type === 'checkbox') {
        input = (
            <InputCheckbox
                ref={ref}
                {...props}
            />
        );
    }

    return (
        <>
            {input}
            {error && <small className="block text-rose-500 font-semibold">{error}</small>}
        </>
    );
});

Base.displayName = 'Base';
export default Base;
