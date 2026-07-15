import React from 'react';

import Base, { BaseProps as CardBaseProps } from '@/components/common/Card/Base';
import ThumbnailItem, { ThumbnailItemProps } from '@/components/common/Card/Thumbnail/ThumbnailItem';
import Modal, { PurchaseProps } from '@/components/common/Modal';

export type ThumbnailProps = {
    items: ThumbnailItemProps[];
    popup?: {
        content?: Omit<PurchaseProps, 'open' | 'onOpenChange'>;
    } & Pick<PurchaseProps, 'open' | 'onOpenChange'>;
} & (Omit<CardBaseProps, 'items'> & Pick<ThumbnailItemProps, 'onClick'>);

const Thumbnail = ({
    items,
    row = { gutterY: 4 },
    column = { sm: 6, md: 4, lg: 3 },
    onClick,
    popup,
    ...props
}: ThumbnailProps): React.ReactElement => {
    return (
        <>
            <Base
                {...props}
                row={row}
                column={column}
                items={items.map((item: ThumbnailItemProps) => {
                    return {
                        children: (
                            <ThumbnailItem
                                {...item}
                                onClick={onClick}
                            />
                        ),
                    };
                })}
            />

            <Modal.Purchase
                open={popup?.open}
                onOpenChange={popup?.onOpenChange}
                {...popup?.content}
            />
        </>
    );
};

export default Thumbnail;
