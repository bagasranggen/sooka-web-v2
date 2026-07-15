import React from 'react';

import { Sheet, SheetContent } from '@/components/shadcn/Sheet';

import Heading, { BaseProps as BaseHeadingProps } from '@/components/common/Heading';
import Picture, { BaseProps } from '@/components/common/Picture';
import Carousel from '@/components/common/Carousel';
import Form, { PurchaseProps } from '@/components/common/Form';
import Columns from '@/components/common/Columns';

export type PurchaseSheetProps = {
    media?: BaseProps['items'][];
    form?: PurchaseProps;
    title?: BaseHeadingProps['children'];
    description?: React.ReactNode;
} & Pick<React.ComponentPropsWithoutRef<typeof Sheet>, 'open' | 'onOpenChange'>;

const PurchaseSheet = ({
    open,
    onOpenChange,
    form,
    media,
    title,
    description,
}: PurchaseSheetProps): React.ReactElement => {
    return (
        <Sheet
            open={open}
            onOpenChange={onOpenChange}>
            <SheetContent
                side="bottom"
                showCloseButton={false}
                className="sheet sheet--thumbnail">
                <Columns gutterX={0}>
                    <Columns.Column sm={6}>
                        {media && media.length > 0 && (
                            <div className="sm:sticky sm:top-0">
                                <Carousel.Fade
                                    className="sheet__carousel"
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
                        <div className="py-2 px-1 sm:px-2">
                            {title && (
                                <Heading
                                    as="h2"
                                    className="text-[2.5rem] leading-2.5 font-medium">
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
            </SheetContent>
        </Sheet>
    );
};

export default PurchaseSheet;
