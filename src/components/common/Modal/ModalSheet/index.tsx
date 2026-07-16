import React from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';
import { useDebounceWindowSize, useIsTouch } from '@/libs/hooks';

import Sheet, { SheetProps } from '@/components/common/Modal/ModalSheet/Sheet';
import Modal, { ModalProps } from '@/components/common/Modal/ModalSheet/Modal';

export type ModalSheetProps = {
    modal?: ModalProps['content'];
    sheet?: SheetProps['content'];
} & (Pick<ModalProps, 'children' | 'open' | 'onOpenChange'> & ClassnameProps);

const ModalSheet = ({
    open,
    modal,
    sheet,
    onOpenChange,
    className,
    children,
}: ModalSheetProps): React.ReactElement | null => {
    const isTouch = useIsTouch();
    const { width } = useDebounceWindowSize();

    const modalClass: ArrayStringProps = ['modal modal--modal-sheet'];
    if (className) modalClass.push(className);

    let isMobile = false;
    if (isTouch && width < 1200) isMobile = true;
    if (!isTouch && width < 992) isMobile = true;

    if (width === 0) return null;

    if (isMobile) {
        return (
            <Sheet
                open={open}
                onOpenChange={onOpenChange}
                content={{
                    ...sheet,
                    className: joinArrayString([...modalClass, sheet?.className ?? '']),
                }}>
                {children}
            </Sheet>
        );
    }

    return (
        <Modal
            open={open}
            onOpenChange={onOpenChange}
            content={{ ...modal, className: joinArrayString([...modalClass, modal?.className ?? '']) }}>
            {children}
        </Modal>
    );
};

export default ModalSheet;
