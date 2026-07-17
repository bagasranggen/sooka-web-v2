import React from 'react';

import { BaseHookOptionProps, BaseInputHookProps } from '@/libs/@types';

export const createInputHooks = (
    hook?: BaseInputHookProps & BaseHookOptionProps,
    input?:
        | Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onClick' | 'max'>
        | Pick<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'>
        | Pick<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>
) => {
    const { register, name, ...restHook } = hook ?? {};

    let hookOptions = {};
    if (restHook) hookOptions = Object.assign(hookOptions, restHook);
    if (input?.onChange) hookOptions = Object.assign(hookOptions, { onChange: input.onChange });
    if (input && 'max' in input && input?.max) {
        hookOptions = Object.assign(hookOptions, { max: { value: input.max, message: 'Maximum of value' } });
    }

    return hook ? hook?.register(hook.name, hookOptions) : undefined;
};
