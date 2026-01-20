import React, { forwardRef } from 'react';

import Base, { BaseInputProps, BaseProps } from '@/components/common/Input';

export type LabelProps = {
    label: React.ReactNode;
} & (Omit<BaseProps, 'id'> & Required<Pick<BaseProps, 'id'>>);

const Label = forwardRef<HTMLInputElement, LabelProps>(({ id, label, ...props }, ref) => {
    return (
        <>
            <label
                htmlFor={id}
                className="block">
                {label}
            </label>

            <Base
                ref={ref}
                id={id}
                {...props}
            />
        </>
    );
});

export default Label;
