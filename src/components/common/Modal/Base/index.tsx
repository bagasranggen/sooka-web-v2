'use client';

import React, { PropsWithChildren } from 'react';

import { PortalBaseProps, PortalEventsProps, PropsClassname } from '@/libs/@types';
import { usePortal } from '@/libs/hooks';

import BaseModal from '@/components/common/Modal/Base/BaseModal';
import BaseBackdrop from '@/components/common/Modal/Base/BaseBackdrop';
import Portal from '@/components/common/Portal';
import Button from '@/components/common/Button';

export type BaseProps = {
    closeButton?: boolean | (PropsClassname & PropsWithChildren);
} & (PortalBaseProps & PortalEventsProps & PropsClassname & PropsWithChildren);

const Base = ({
    className,
    closeButton = true,
    show,
    hide,
    onOpen,
    onOpened,
    onClose,
    onClosed,
    children,
}: BaseProps): React.ReactElement | null => {
    const { isShow, isTransitioning, handleClose } = usePortal({ show, hide, onOpen, onOpened, onClose, onClosed });

    return (
        <Portal>
            <BaseBackdrop
                isShow={isShow}
                isTransitioning={isTransitioning}
            />

            <BaseModal
                className={className}
                isShow={isShow}
                isTransitioning={isTransitioning}
                onClick={handleClose}>
                {closeButton && (
                    <Button
                        as="button"
                        type="button"
                        className={typeof closeButton === 'object' ? closeButton?.className : undefined}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClose();
                        }}>
                        {typeof closeButton === 'object' ? closeButton?.children : 'close'}
                    </Button>
                )}

                <div className="">{children}</div>
            </BaseModal>
        </Portal>
    );
};

export default Base;
