import React from 'react';

import Columns from '@/components/common/Columns';
import Heading, { BaseProps as HeadingBaseProps } from '@/components/common/Heading';
import Picture, { BaseProps as PictureBaseProps } from '@/components/common/Picture';
import Overlay from '@/components/common/Overlay';
import HalfMediaVariants, { HalfMediaVariantsProps } from '@/components/common/Banner/HalfMedia/HalfMediaVariants';
import Modal, { PurchaseProps } from '@/components/common/Modal';

export type HalfMediaProps = {
    media: PictureBaseProps['items'];
    variants?: HalfMediaVariantsProps['items'];
    popup?: {
        content?: Omit<PurchaseProps, 'open' | 'onOpenChange'>;
    } & Pick<PurchaseProps, 'open' | 'onOpenChange'>;
    onClick?: (props: NonNullable<HalfMediaProps['popup']>['content']) => void;
} & (Pick<HeadingBaseProps, 'children'> &
    Pick<HalfMediaVariantsProps, 'notes' | 'disabled'> &
    Pick<PurchaseProps, 'onSubmit'>);

const HalfMedia = ({
    media,
    variants,
    disabled,
    notes,
    onClick,
    onSubmit,
    popup,
    children,
}: HalfMediaProps): React.ReactElement => {
    return (
        <>
            <Columns
                className="items-center"
                gutterY={3}>
                <Columns.Column
                    className="z-10 order-last md:order-first"
                    md={6}
                    lg={10}>
                    <Heading
                        as="h1"
                        size="heading"
                        className="md:[&>span:nth-child(3)]:column-offset-2 md:[&>span:nth-child(5)]:column-offset-4">
                        {children}
                    </Heading>
                </Columns.Column>

                <Columns.Column
                    className="order-first md:order-last px-0! md:px-1.5!"
                    offset={{ md: -3, lg: -6 }}
                    md={9}
                    lg={8}>
                    <Overlay
                        variant="solid"
                        opacity={1}>
                        <Picture items={media} />
                    </Overlay>
                </Columns.Column>
            </Columns>

            {variants && variants.length > 0 && (
                <HalfMediaVariants
                    items={variants}
                    disabled={disabled}
                    notes={notes}
                    button={{
                        onClick: () => {
                            if (onClick && popup?.content) onClick(popup.content);
                        },
                    }}>
                    Available In
                </HalfMediaVariants>
            )}

            <Modal.Purchase
                open={popup?.open}
                onOpenChange={popup?.onOpenChange}
                onSubmit={onSubmit}
                {...popup?.content}
            />
        </>
    );
};

export default HalfMedia;
