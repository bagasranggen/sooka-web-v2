import React, { PropsWithChildren } from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { LabelProps } from '@/components/common/Input';

export type LabelTextProps = {
    active?: boolean;
    standalone?: boolean;
    required?: boolean;
} & (Partial<Pick<HTMLLabelElement, 'className' | 'htmlFor'>> & PropsWithChildren & Pick<LabelProps, 'size'>);

const LabelText = ({
    children,
    htmlFor,
    className,
    active,
    standalone,
    size = 'md',
    required,
}: LabelTextProps): React.ReactElement => {
    let labelClass: ArrayStringProps = ['label-input'];
    if (size === 'md') labelClass.push('label-input--md');
    if (size === 'sm') labelClass.push('label-input--sm');
    if (standalone) labelClass.push('label-input--standalone');
    if (active) labelClass.push('label-input--active');
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
