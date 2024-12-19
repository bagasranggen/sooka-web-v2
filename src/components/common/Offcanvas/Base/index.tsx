import React, { PropsWithChildren } from 'react';

import { PortalBaseProps, PortalEventsProps, PropsClassname } from '@/libs/@types';
import { usePortal } from '@/libs/hooks';

import BaseOffcanvas, { BaseOffcanvasProps } from '@/components/common/Offcanvas/Base/BaseOffcanvas';
import BaseBackdrop from '@/components/common/Offcanvas/Base/BaseBackdrop';
import Portal from '@/components/common/Portal';

export type BaseProps = {
    backdrop?: boolean | PropsClassname;
} & (PortalBaseProps & PortalEventsProps & PropsWithChildren & PropsClassname & Pick<BaseOffcanvasProps, 'from'>);

const Base = ({
    className,
    backdrop = true,
    from,
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
            {backdrop && (
                <BaseBackdrop
                    isShow={isShow}
                    isTransitioning={isTransitioning}
                    className={typeof backdrop === 'object' ? backdrop?.className : undefined}
                />
            )}
            <BaseOffcanvas
                from={from}
                isShow={isShow}
                isTransitioning={isTransitioning}
                className={className}>
                {children}
            </BaseOffcanvas>
        </Portal>
    );
};

export default Base;
