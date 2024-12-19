'use client';

import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { PropsClassname } from '@/libs/@types';

import BaseModal from '@/components/common/Modal/Base/BaseModal';
import BaseBackdrop from '@/components/common/Modal/Base/BaseBackdrop';
import Button from '@/components/common/Button';

export type BaseTransitionProps = {
    isShow: boolean;
    isFading: boolean;
};

export type BaseEventsProps = Partial<Record<'onOpen' | 'onOpened' | 'onClose' | 'onClosed', () => void>>;

export type BaseProps = {
    show: boolean;
    onHide: () => void;
    closeButton?: boolean | (PropsClassname & PropsWithChildren);
} & (BaseEventsProps & PropsClassname & PropsWithChildren);

const Base = ({
    className,
    closeButton = true,
    show,
    onHide,
    onOpen,
    onOpened,
    onClose,
    onClosed,
    children,
}: BaseProps): React.ReactElement => {
    const FADE_DURATION = 300;

    const [mounted, setMounted] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isFading, setIsFading] = useState(true);

    // Handle open modal
    const handleModalOpen = useCallback(() => {
        const body = document.body;

        setIsShow(true);
        if (onOpen) onOpen();
        body.classList.add('overflow-hidden');

        setTimeout(() => {
            setIsFading(false);
        }, 50);

        setTimeout(() => {
            if (onOpened) onOpened();
        }, FADE_DURATION);
    }, [FADE_DURATION, onOpen, onOpened]);

    // Handle close modal
    const handleModalClose = useCallback(() => {
        const body = document.body;

        setIsFading(true);
        if (onClose) onClose();

        setTimeout(() => {
            setIsShow(false);
            if (onHide) onHide();
            if (onClosed) onClosed();
            body.classList.remove('overflow-hidden');
        }, FADE_DURATION);
    }, [FADE_DURATION, onHide, onClose, onClosed]);

    // Detect escape keypress to exit the modal
    const handleKeyUp = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleModalClose();
            }
        },
        [handleModalClose]
    );

    // Open modal on state change
    useEffect(() => {
        if (show) {
            handleModalOpen();
        }
    }, [show, handleModalOpen]);

    // Close modal on escape key
    useEffect(() => {
        if (!isShow) return;

        window.addEventListener('keyup', handleKeyUp);
        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [isShow, handleKeyUp]);

    // Check window is mounted
    useEffect(() => setMounted(true), []);

    return mounted ? (
        createPortal(
            <>
                <BaseBackdrop
                    isShow={isShow}
                    isFading={isFading}
                />

                <BaseModal
                    className={className}
                    isShow={isShow}
                    isFading={isFading}
                    onClick={handleModalClose}>
                    {closeButton && (
                        <Button
                            as="button"
                            type="button"
                            className={typeof closeButton === 'object' ? closeButton?.className : undefined}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleModalClose();
                            }}>
                            {typeof closeButton === 'object' ? closeButton?.children : 'close'}
                        </Button>
                    )}

                    <div className="">{children}</div>
                </BaseModal>
            </>,
            document.body
        )
    ) : (
        <></>
    );
};

export default Base;
