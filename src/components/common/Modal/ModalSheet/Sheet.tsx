import React, { PropsWithChildren } from 'react';

import { Sheet as ShadcnSheet, SheetContent } from '@/components/shadcn/Sheet';

export type SheetProps = {
    content?: Pick<
        React.ComponentPropsWithoutRef<typeof SheetContent>,
        'side' | 'showCloseButton' | 'onOpenAutoFocus' | 'className'
    >;
} & (Pick<React.ComponentPropsWithoutRef<typeof ShadcnSheet>, 'open' | 'onOpenChange'> & PropsWithChildren);

const Sheet = ({ open, onOpenChange, content, children }: SheetProps): React.ReactElement => {
    return (
        <ShadcnSheet
            open={open}
            onOpenChange={onOpenChange}>
            <SheetContent {...content}>{children}</SheetContent>
        </ShadcnSheet>
    );
};

export default Sheet;
