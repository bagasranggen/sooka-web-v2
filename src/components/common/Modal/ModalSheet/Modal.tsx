import React, { PropsWithChildren } from 'react';

import { Dialog, DialogContent } from '@/components/shadcn/Dialog';

export type ModalProps = {
    content?: Pick<
        React.ComponentPropsWithoutRef<typeof DialogContent>,
        'showCloseButton' | 'onOpenAutoFocus' | 'className'
    >;
} & (Pick<React.ComponentPropsWithoutRef<typeof Dialog>, 'open' | 'onOpenChange'> & PropsWithChildren);

const Modal = ({ open, onOpenChange, content, children }: ModalProps): React.ReactElement => {
    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}>
            <DialogContent {...content}>{children}</DialogContent>
        </Dialog>
    );
};

export default Modal;
