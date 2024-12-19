import { useCallback, useEffect, useState } from 'react';
import { BaseModalProps as ModalProps, BaseModalEventsProps } from '@/components/common/Modal/Base/BaseModal';

export type BaseModalProps = {
    fadeDuration?: number;
} & (BaseModalEventsProps & Partial<Pick<ModalProps, 'onHide' | 'show'>>);

export const useBaseModal = ({
    fadeDuration = 300,
    show,
    onOpen,
    onOpened,
    onClose,
    onClosed,
    onHide,
}: BaseModalProps) => {
    const [isShow, setIsShow] = useState(false);
    const [isFading, setIsFading] = useState(true);

    //
    const handleModalOpen = useCallback(() => {
        setIsShow(true);
        if (onOpen) onOpen();

        setTimeout(() => {
            setIsFading(false);
        }, 50);

        setTimeout(() => {
            if (onOpened) onOpened();
        }, fadeDuration);
    }, [fadeDuration, onOpen, onOpened]);

    //
    const handleModalClose = useCallback(() => {
        setIsFading(true);
        if (onClose) onClose();

        setTimeout(() => {
            setIsShow(false);
            if (onHide) onHide();
            if (onClosed) onClosed();
        }, fadeDuration);
    }, [fadeDuration, onHide, onClose, onClosed]);

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
        if (show) {
            handleModalOpen();
        }
    }, [show, handleModalOpen]);

    useEffect(() => {
        if (!isShow) return;

        window.addEventListener('keyup', handleKeyUp);
        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [isShow, handleKeyUp]);

    return { isShow, isFading };
};
