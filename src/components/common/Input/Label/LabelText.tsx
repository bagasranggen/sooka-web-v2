import React, { PropsWithChildren } from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type LabelTextProps = {
    active?: boolean;
    standalone?: boolean;
    required?: boolean;
} & (Partial<Pick<HTMLLabelElement, 'className' | 'htmlFor'>> & PropsWithChildren);

const LabelText = ({
    children,
    htmlFor,
    className,
    active,
    standalone,
    required,
}: LabelTextProps): React.ReactElement => {
    let labelClass: ArrayString = ['block uppercase transition-all origin-top-left'];
    labelClass.push('text-[2.5rem] whitespace-nowrap');
    labelClass.push('tracking-[.6rem]');
    labelClass.push('px-2 py-1');
    if (!standalone) labelClass.push('absolute left-0 top-0');
    if (standalone) labelClass.push('-mb-2.5');
    labelClass.push(
        'group-focus-within:scale-50 group-focus-within:font-semibold group-focus-within:translate-x-[1.2rem]'
    );
    labelClass.push(
        'peer-[:not(:placeholder-shown)]:scale-50 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:translate-x-[1.2rem]'
    );
    // if (!isFocus) labelClass.push('peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2');
    if (active) labelClass.push('scale-50 translate-x-[1.2rem] font-semibold');
    if (className) labelClass.push(className);
    labelClass = joinArrayString(labelClass);

    return (
        <label
            htmlFor={htmlFor}
            className={labelClass}>
            {children}
            {required && <sup className="text-rose-500">*</sup>}
        </label>
    );
};

export default LabelText;
