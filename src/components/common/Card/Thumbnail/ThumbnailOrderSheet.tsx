import React from 'react';

import { Sheet, SheetContent } from '@/components/shadcn/Sheet';

import Heading, { BaseProps as BaseHeadingProps } from '@/components/common/Heading';
import Picture, { BaseProps } from '@/components/common/Picture';
import Carousel from '@/components/common/Carousel';
import Form, { PurchaseProps } from '@/components/common/Form';
import Columns from '@/components/common/Columns';

export type ThumbnailOrderSheetProps = {
    media?: BaseProps['items'][];
    form?: PurchaseProps;
    title?: BaseHeadingProps['children'];
    description?: React.ReactNode;
} & Pick<React.ComponentPropsWithoutRef<typeof Sheet>, 'open'>;

const ThumbnailOrderSheet = ({
    open,
    form,
    media,
    title,
    description,
}: ThumbnailOrderSheetProps): React.ReactElement => {
    return (
        <Sheet open={open}>
            <SheetContent
                side="bottom"
                showCloseButton={false}
                className="sheet sheet--thumbnail">
                <Columns gutterX={0}>
                    <Columns.Column md={6}>
                        {media && media.length > 0 && (
                            <div className="md:sticky md:top-0">
                                <Carousel.Fade
                                    className="md:h-[80dvh]"
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

                    <Columns.Column md={6}>
                        <div className="py-2 px-1 md:px-2">
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

export default ThumbnailOrderSheet;
