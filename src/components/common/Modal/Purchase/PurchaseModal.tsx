import React from 'react';

import { Dialog, DialogContent } from '@/components/shadcn/Dialog';

import Heading, { BaseProps as BaseHeadingProps } from '@/components/common/Heading';
import Picture, { BaseProps } from '@/components/common/Picture';
import Columns from '@/components/common/Columns';
import Form, { PurchaseProps } from '@/components/common/Form';
import Carousel from '@/components/common/Carousel';

export type PurchaseModalProps = {
    form?: PurchaseProps;
    media?: BaseProps['items'][];
    title?: BaseHeadingProps['children'];
    description?: React.ReactNode;
} & Pick<React.ComponentPropsWithoutRef<typeof Dialog>, 'open' | 'onOpenChange'>;

const PurchaseModal = ({
    open,
    onOpenChange,
    form,
    media,
    title,
    description,
}: PurchaseModalProps): React.ReactElement => {
    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}>
            <DialogContent
                showCloseButton={false}
                className="dialog dialog--thumbnail">
                <Columns gutterX={0}>
                    <Columns.Column lg={6}>
                        {media && media.length > 0 && (
                            <div className="sticky top-0">
                                <Carousel.Fade
                                    className="dialog__carousel"
                                    options={{
                                        loop: true,
                                        breakpoints: {
                                            768: {
                                                slidesPerView: 1,
                                                spaceBetween: 0,
                                            },
                                        },
                                    }}
                                    items={media.map((item) => {
                                        return {
                                            children: <Picture items={item} />,
                                        };
                                    })}
                                />
                            </div>
                        )}
                    </Columns.Column>

                    <Columns.Column lg={6}>
                        <div className="py-2 px-4">
                            {title && (
                                <Heading
                                    as="h2"
                                    className="text-[3.5rem] font-medium">
                                    {title}
                                </Heading>
                            )}

                            <div className="mt-2">
                                {description}

                                <Form.Purchase
                                    className="mt-3"
                                    {...form}
                                />
                            </div>
                        </div>
                    </Columns.Column>
                </Columns>
            </DialogContent>
        </Dialog>
    );
};

export default PurchaseModal;
