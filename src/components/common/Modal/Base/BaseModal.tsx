import React, { PropsWithChildren } from 'react';

import { ArrayString, PortalTransitionProps, PropsClassname } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type BaseModalProps = PortalTransitionProps &
    PropsWithChildren &
    PropsClassname &
    Pick<React.HTMLAttributes<HTMLDivElement>, 'onClick'>;

const BaseModal = ({
    isShow,
    isTransitioning,
    onClick,
    className,
    children,
}: BaseModalProps): React.ReactElement | null => {
    let modalClass: ArrayString = ['fixed transition-opacity duration-300 w-full h-full top-0 left-0 z-1025'];
    if (isTransitioning) modalClass.push('opacity-0');
    if (!isTransitioning) modalClass.push('opacity-100');
    modalClass = joinArrayString(modalClass);

    let contentClass: ArrayString = ['relative'];
    if (className) contentClass.push(className);
    contentClass = joinArrayString(contentClass);

    if (!isShow) return null;

    return (
        <div
            className={modalClass}
            onClick={onClick}>
            <div className={contentClass}>{children}</div>
        </div>
    );
};

export default BaseModal;
