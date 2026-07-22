import React from 'react';

import Columns from '@/components/common/Columns';
import Carousel from '@/components/common/Carousel';
import Picture, { BaseProps } from '@/components/common/Picture';
import Heading, { BaseProps as BaseHeadingProps } from '@/components/common/Heading';
import Form, { PurchaseProps as FormPurchaseProps } from '@/components/common/Form';
import ModalSheet, { ModalSheetProps } from '@/components/common/Modal/ModalSheet';

export type PurchaseProps = {
    form?: Omit<FormPurchaseProps, 'onSubmit'>;
    media?: BaseProps['items'][];
    mediaThumbnail?: BaseProps['items'];
    title?: BaseHeadingProps['children'];
    description?: React.ReactNode;
    onSubmit?: (
        data: Parameters<NonNullable<FormPurchaseProps['onSubmit']>>[0],
        media: PurchaseProps['mediaThumbnail']
    ) => void;
} & Pick<ModalSheetProps, 'open' | 'onOpenChange'>;

const Purchase = ({
    open,
    onOpenChange,
    media,
    mediaThumbnail,
    title,
    description,
    form,
    onSubmit,
}: PurchaseProps): React.ReactElement | null => {
    return (
        <ModalSheet
            open={open}
            onOpenChange={onOpenChange}
            modal={{
                showCloseButton: false,
            }}
            sheet={{
                showCloseButton: false,
                side: 'bottom',
            }}
            className="modal--purchase">
            <Columns gutterX={0}>
                <Columns.Column sm={6}>
                    {media && media.length > 0 && (
                        <div className="modal__sticky">
                            <Carousel.Fade
                                className="modal__carousel"
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

                <Columns.Column sm={6}>
                    <div className="py-2 px-2 md:px-4">
                        {title && (
                            <Heading
                                as="h2"
                                className="leading-3.5 text-[3rem] md:leading-4.5 md:text-[4rem] font-medium">
                                {title}
                            </Heading>
                        )}

                        <div className="mt-2">
                            {description}

                            <Form.Purchase
                                className="mt-3"
                                onSubmit={(data) => {
                                    if (onSubmit) onSubmit(data, mediaThumbnail);
                                }}
                                {...form}
                            />
                        </div>
                    </div>
                </Columns.Column>
            </Columns>
        </ModalSheet>
    );
};

export default Purchase;
