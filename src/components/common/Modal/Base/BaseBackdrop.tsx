import React from 'react';

import { ArrayStringProps, PortalTransitionProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type BaseBackdropProps = PortalTransitionProps;

const BaseBackdrop = ({ isShow, isTransitioning }: BaseBackdropProps): React.ReactElement | null => {
    let modalClass: ArrayStringProps = [
        'fixed transition-opacity duration-300 w-full h-full top-0 left-0 bg-black z-1020 cursor-pointer',
    ];
    if (isTransitioning) modalClass.push('opacity-0');
    if (!isTransitioning) modalClass.push('opacity-40');
    modalClass = joinArrayString(modalClass);

    if (!isShow) return null;

    return <div className={modalClass} />;
};

export default BaseBackdrop;
