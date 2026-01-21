import React, { forwardRef } from 'react';

import { ArrayString, BaseRegularInputProps, InputRegularRef } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';
import { createInputHooks } from '@/libs/factory';

import { BaseInputHookProps } from '@/components/common/Input';
import Icon from '@/components/common/Icon';

export type InputCheckboxProps = BaseRegularInputProps & BaseInputHookProps;

const InputCheckbox = forwardRef<InputRegularRef, InputCheckboxProps>(
    ({ id, className, children, hook, checked, ...props }, ref) => {
        let inputClass: ArrayString = ['flex items-center gap-x-0.5 relative cursor-pointer'];
        inputClass.push(
            'before:content-[""] before:inline-block before:flex-shrink-0 before:w-[1.4rem] before:h-[1.4rem] before:border before:border-black before:rounded-[.3rem]'
        );
        inputClass.push('before:transition-colors before:duration-200');
        inputClass.push('peer-checked:before:bg-black');
        if (className) inputClass.push(className);
        inputClass = joinArrayString(inputClass);

        const inputHook = createInputHooks(hook, props);

        let inputRef = { ref: ref };
        if (hook && inputHook) {
            inputRef = {
                ref: (e) => {
                    inputHook?.ref(e);

                    if (ref && 'current' in ref && e) (ref as any).current = e;
                },
            };
        }

        return (
            <div>
                <input
                    {...props}
                    {...inputHook}
                    {...inputRef}
                    {...(hook ? { defaultChecked: checked } : { checked: checked })}
                    id={id}
                    type="checkbox"
                    className="peer"
                    hidden
                />
                <label
                    htmlFor={id}
                    className={inputClass}>
                    {children}
                    <Icon.Check className="absolute top-1/2 -translate-y-1/2 left-[.25rem]" />
                </label>
            </div>
        );
    }
);

InputCheckbox.displayName = 'InputRadio';
export default InputCheckbox;
