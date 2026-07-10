import React from 'react';

import { createPicsumImage } from '@/libs/factory';

import { Dialog, DialogContent } from '@/components/shadcn/Dialog';

import Heading from '@/components/common/Heading';
import Picture from '@/components/common/Picture';
import Columns from '@/components/common/Columns';
import List from '@/components/common/List';
import Button from '@/components/common/Button';

export type ThumbnailOrderModalProps = {} & Pick<React.ComponentPropsWithoutRef<typeof Dialog>, 'open'>;

const ThumbnailOrderModal = ({ open }: ThumbnailOrderModalProps): React.ReactElement => {
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
                        <div className="p-2">
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

                                <Heading
                                    as="h3"
                                    family="default"
                                    className="uppercase tracking-0.2 font-black text-[1.2rem] mt-4">
                                    Available in:
                                </Heading>
                                <List
                                    className="mt-0.5"
                                    items={[{ className: 'border px-2 py-0.5', children: 'tes' }]}
                                />

                                <Heading
                                    as="h3"
                                    family="default"
                                    className="uppercase tracking-0.2 font-black text-[1.2rem] mt-2">
                                    Add on(s):
                                </Heading>

                                <List
                                    className="mt-0.5"
                                    items={[{ className: 'border px-2 py-0.5', children: 'tes' }]}
                                />

                                <div className="mt-2">
                                    <Columns>
                                        <Columns.Column md={9}>RPxx.xxx</Columns.Column>

                                        <Columns.Column
                                            md={3}
                                            className="text-end">
                                            <Button.Arrow
                                                as="button"
                                                type="button"
                                                className="uppercase"
                                                // size="lg"
                                            >
                                                Order
                                            </Button.Arrow>
                                        </Columns.Column>
                                    </Columns>
                                </div>
                            </div>
                        </div>
                    </Columns.Column>
                </Columns>
            </DialogContent>
        </Dialog>
    );
};

export default ThumbnailOrderModal;
