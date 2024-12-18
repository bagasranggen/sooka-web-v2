import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type BaseModalEventsProps = Partial<Record<'onOpen' | 'onOpened' | 'onClose' | 'onClosed', () => void>>;

export type BaseModalProps = {
    show: boolean;
    // onHide: () => void;
    // setShow: React.Dispatch<React.SetStateAction<BaseModalProps['show']>>;
} & (PropsWithChildren & BaseModalEventsProps);

const BaseModal = ({
    show,
    // setShow,
    children,
    onOpen,
    onOpened,
    onClose,
    onClosed,
}: BaseModalProps): React.ReactElement | null => {
    const FADE_TIME = 300;

    const [isShow, setIsShow] = useState(false);
    const [isFading, setIsFading] = useState(true);

    let modalClass: ArrayString = [
        'fixed transition-opacity duration-300 w-full h-full top-0 left-0 bg-sooka-primary z-[1020]',
    ];
    if (isFading) modalClass.push('opacity-0');
    if (!isFading) modalClass.push('opacity-100');
    modalClass = joinArrayString(modalClass);

    const handleModalOpen = useCallback(() => {
        setIsShow(true);
        if (onOpen) onOpen();

        setTimeout(() => {
            setIsFading(false);
        }, 50);

        setTimeout(() => {
            if (onOpened) onOpened();
        }, FADE_TIME);
    }, [onOpen, onOpened]);

    const handleModalClose = useCallback(() => {
        setIsFading(true);
        if (onClose) onClose();

        setTimeout(() => {
            setIsShow(false);
            // setShow(false);
            if (onClosed) onClosed();
        }, FADE_TIME);
    }, [onClose, onClosed]);

    // Detect escape keypress to exit the modal
    const handleKeyUp = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleModalClose();
            }
        },
        [handleModalClose]
    );

    useEffect(() => {
        console.log(isShow, show);

        if (show) {
            handleModalOpen();
        }

        if (!show) {
            handleModalClose();
        }
    }, [show, handleModalClose, handleModalOpen]);

    useEffect(() => {
        if (!isShow) return;

        window.addEventListener('keyup', handleKeyUp);
        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [isShow, handleKeyUp]);

    if (!isShow) return null;

    return <div className={modalClass}>{children}</div>;
};

export default BaseModal;
