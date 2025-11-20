import { useCallback, useEffect, useState } from 'react';

import { PortalBaseProps, PortalEventsProps } from '@/libs/@types';

export type PortalProps = {
    transitionDuration?: number;
} & (PortalEventsProps & Partial<Pick<PortalBaseProps, 'show' | 'hide'>>);

export const usePortal = ({
    transitionDuration = 300,
    show: INIT_SHOW,
    hide,
    onOpen,
    onOpened,
    onClose,
    onClosed,
}: PortalProps) => {
    const [show, setShow] = useState(!!INIT_SHOW);
    const [isShow, setIsShow] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const triggerOpen = () => setShow(true);

    const triggerClose = () => setShow(false);

    // Handle open portal
    const handleOpen = useCallback(() => {
        const body = document.body;

        setIsShow(true);
        if (onOpen) onOpen();
        body.classList.add('overflow-hidden');

        setTimeout(() => {
            setIsTransitioning(false);
        }, 50);

        setTimeout(() => {
            if (onOpened) onOpened();
        }, transitionDuration);
    }, [transitionDuration, onOpen, onOpened]);

    // Handle close portal
    const handleClose = useCallback(() => {
        const body = document.body;

        setIsTransitioning(true);
        if (onClose) onClose();

        setTimeout(() => {
            setIsShow(false);
            if (hide) hide();
            if (onClosed) onClosed();
            body.classList.remove('overflow-hidden');
        }, transitionDuration);
    }, [transitionDuration, hide, onClose, onClosed]);

    // Detect escape keypress to exit the modal
    const handleKeyUp = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        },
        [handleClose]
    );

    // toggle portal based on state change
    useEffect(() => {
        // console.log({ show, isShow });
        if (INIT_SHOW && !isShow) {
            handleOpen();
        }

        if (!INIT_SHOW && isShow) {
            handleClose();
        }
    }, [INIT_SHOW, isShow, handleOpen, handleClose]);

    // Close on escape key
    useEffect(() => {
        if (!isShow) return;

        window.addEventListener('keyup', handleKeyUp);
        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [isShow, handleKeyUp]);

    return { show, isTransitioning, isShow, handleClose, triggerOpen, triggerClose };
};
