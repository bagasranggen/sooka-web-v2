import React, { PropsWithChildren } from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type BaseErrorProps = PropsWithChildren & ClassnameProps;

const BaseError = ({ className, children }: BaseErrorProps): React.ReactElement | null => {
    if (!children) return null;

    let smallClass: ArrayStringProps = ['block text-rose-500 font-semibold'];
    if (className) smallClass.push(className);
    smallClass = joinArrayString(smallClass);

    return <small className={smallClass}>{children}</small>;
};

export default BaseError;
