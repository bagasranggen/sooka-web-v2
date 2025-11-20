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

export type BaseProps = BaseInputProps;

const Base = forwardRef<HTMLInputElement, BaseInputProps>((props, ref) => {
    if (props.type === 'radio') {
        return (
            <InputRadio
                ref={ref}
                {...props}
            />
        );
    }

    if (props.type === 'checkbox') {
        return (
            <InputCheckbox
                ref={ref}
                {...props}
            />
        );
    }

    return (
        <InputText
            ref={ref}
            {...props}
        />
    );
});

Base.displayName = 'Base';
export default Base;
