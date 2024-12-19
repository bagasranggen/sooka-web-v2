import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';
import { useBaseModal } from '@/libs/hooks';

export type BaseModalEventsProps = Partial<Record<'onOpen' | 'onOpened' | 'onClose' | 'onClosed', () => void>>;

export type BaseModalProps = {
    show: boolean;
    onHide: () => void;
} & (PropsWithChildren & BaseModalEventsProps);

const BaseModal = ({
    show,
    children,
    onHide,
    onOpen,
    onOpened,
    onClose,
    onClosed,
}: BaseModalProps): React.ReactElement | null => {
    const { isShow, isFading } = useBaseModal({ show, onHide, onOpen, onOpened, onClose, onClosed });

    let modalClass: ArrayString = [
        'fixed transition-opacity duration-300 w-full h-full top-0 left-0 bg-sooka-primary z-[1025]',
    ];
    if (isFading) modalClass.push('opacity-0');
    if (!isFading) modalClass.push('opacity-100');
    modalClass = joinArrayString(modalClass);

    if (!isShow) return null;

    return <div className={modalClass}>{children}</div>;
};

export default BaseModal;
