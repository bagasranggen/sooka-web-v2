import React, { PropsWithChildren } from 'react';

import { ArrayString, PortalTransitionProps, PropsClassname } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type BaseOffcanvasProps = {
    from?: 'left' | 'right' | 'bottom' | 'top';
} & (PortalTransitionProps & PropsWithChildren & PropsClassname);

const BaseOffcanvas = ({
    from = 'left',
    isTransitioning,
    isShow,
    className,
    children,
}: BaseOffcanvasProps): React.ReactElement | null => {
    let offcanvasClass: ArrayString = ['fixed transition-transform duration-300 z-[1025]'];
    if (from === 'top' || from === 'bottom') offcanvasClass.push('w-full left-0');
    if (from === 'left' || from === 'right') offcanvasClass.push('h-full top-0');

    // Start position style
    if (from === 'bottom') offcanvasClass.push('bottom-0');
    if (from === 'top') offcanvasClass.push('top-0');

    // Active style
    if (from === 'bottom' && isTransitioning) offcanvasClass.push('translate-y-full');
    if (from === 'top' && isTransitioning) offcanvasClass.push('-translate-y-full');
    if (from === 'left' && isTransitioning) offcanvasClass.push('-translate-x-full');
    if (from === 'right' && isTransitioning) offcanvasClass.push('translate-x-full');

    if (className) offcanvasClass.push(className);
    offcanvasClass = joinArrayString(offcanvasClass);

    if (!isShow) return null;

    return <div className={offcanvasClass}>{children}</div>;
};

export default BaseOffcanvas;
