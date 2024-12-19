import React from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { BaseTransitionProps } from '@/components/common/Modal/Base';

export type BaseBackdropProps = BaseTransitionProps;

const BaseBackdrop = ({ isShow, isFading }: BaseBackdropProps): React.ReactElement | null => {
    let modalClass: ArrayString = [
        'fixed transition-opacity duration-300 w-full h-full top-0 left-0 bg-black z-[1020] cursor-pointer',
    ];
    if (isFading) modalClass.push('opacity-0');
    if (!isFading) modalClass.push('opacity-40');
    modalClass = joinArrayString(modalClass);

    if (!isShow) return null;

    return <div className={modalClass} />;
};

export default BaseBackdrop;
