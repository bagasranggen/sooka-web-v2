import React from 'react';

import { createPicsumImage } from '@/libs/factory';

import { Dialog, DialogContent } from '@/components/shadcn/Dialog';

import Heading from '@/components/common/Heading';
import Picture from '@/components/common/Picture';
import Columns from '@/components/common/Columns';
import Form, { PurchaseProps } from '@/components/common/Form';

export type ThumbnailOrderModalProps = {
    form?: PurchaseProps;
} & Pick<React.ComponentPropsWithoutRef<typeof Dialog>, 'open'>;

const ThumbnailOrderModal = ({ open, form }: ThumbnailOrderModalProps): React.ReactElement => {
    return (
        <Dialog open={open}>
            <DialogContent
                showCloseButton={false}
                className="p-0 md:max-h-[calc(100vh-10rem)] overflow-y-auto">
                <Columns gutterX={0}>
                    <Columns.Column lg={6}>
                        <Picture
                            items={[
                                createPicsumImage({
                                    width: 1000,
                                    height: 800,
                                    media: 992,
                                    className: 'sticky top-0 object-cover lg:h-[calc(100vh-10rem)]',
                                }),
                                createPicsumImage({
                                    width: 800,
                                    height: 400,
                                    media: 992,
                                    className: 'sticky top-0 object-cover lg:h-[calc(100vh-10rem)]',
                                }),
                            ]}
                        />
                    </Columns.Column>

                    <Columns.Column lg={6}>
                        <div className="py-2 px-4">
                            <Heading
                                as="h2"
                                className="text-[3.5rem] font-medium">
                                Lorem ipsum dolor sit amet.
                            </Heading>

                            <div className="mt-2">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque excepturi nulla
                                    perferendis sapiente voluptatibus? Animi, cum ducimus, ipsam iure libero minus
                                    perspiciatis quam qui, quis quisquam quo repellat sed tenetur!
                                </p>

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

export default ThumbnailOrderModal;
