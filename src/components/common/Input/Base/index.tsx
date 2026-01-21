import React, { forwardRef, HTMLInputTypeAttribute, RefObject } from 'react';

import {
    BaseHookOptionProps,
    BaseInputHookProps as BaseInputCommonHookProps,
    BaseRegularInputProps,
    InputRegularRef,
    InputSelectRef,
} from '@/libs/@types';

import InputText from '@/components/common/Input/shared/InputText';
import InputRadio from '@/components/common/Input/shared/InputRadio';
import InputCheckbox from '@/components/common/Input/shared/InputCheckbox';
import InputSelect, { BaseInputSelectProps } from '@/components/common/Input/shared/InputSelect';

export type BaseInputRef = InputRegularRef | InputSelectRef;

export type BaseInputHookProps = {
    hook?: BaseInputCommonHookProps & BaseHookOptionProps;
};

export type BaseInputProps = BaseInputHookProps & {
    type: HTMLInputTypeAttribute | 'select';
} & (BaseRegularInputProps & BaseInputSelectProps);

export type BaseProps = {
    error?: React.ReactNode;
} & BaseInputProps;

const Base = forwardRef<BaseInputRef, BaseProps>(({ error, ...props }, ref) => {
    let input = (
        <InputText
            ref={ref as RefObject<InputRegularRef>}
            {...props}
        />
    );

    if (props.type === 'radio') {
        input = (
            <InputRadio
                ref={ref as RefObject<InputRegularRef>}
                {...props}
            />
        );
    }

    if (props.type === 'checkbox') {
        input = (
            <InputCheckbox
                ref={ref as RefObject<InputRegularRef>}
                {...props}
            />
        );
    }

    if (props?.type === 'select') {
        const { type, ...selectProps } = props;

        input = (
            <InputSelect
                ref={ref as RefObject<InputSelectRef>}
                {...selectProps}
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
