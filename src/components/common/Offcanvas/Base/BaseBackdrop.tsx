import React from 'react';

import { ArrayStringProps, PortalTransitionProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type BaseBackdropProps = PortalTransitionProps & ClassnameProps;

const BaseBackdrop = ({ className, isShow, isTransitioning }: BaseBackdropProps): React.ReactElement | null => {
    let offcanvasClass: ArrayStringProps = [
        'fixed transition-opacity duration-300 w-full h-full top-0 left-0 bg-black z-1020 cursor-pointer',
    ];
    if (isTransitioning) offcanvasClass.push('opacity-0');
    if (!isTransitioning) offcanvasClass.push('opacity-40');
    if (className) offcanvasClass.push(className);
    offcanvasClass = joinArrayString(offcanvasClass);

    if (!isShow) return null;

    return <div className={offcanvasClass} />;
};

export default BaseBackdrop;
