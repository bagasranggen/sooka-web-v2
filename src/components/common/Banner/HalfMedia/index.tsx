import React from 'react';

import Columns from '@/components/common/Columns';
import Heading, { BaseProps as HeadingBaseProps } from '@/components/common/Heading';
import Overlay from '@/components/common/Overlay';
import Picture, { BaseProps as PictureBaseProps } from '@/components/common/Picture';
import Button from '@/components/common/Button';

export type HalfMediaProps = {
    media: PictureBaseProps['items'];
} & Pick<HeadingBaseProps, 'children'>;

const HalfMedia = ({ media, children }: HalfMediaProps): React.ReactElement => {
    return (
        <>
            <Columns.Row className="items-center">
                <Columns.Column
                    className="z-10"
                    width={{ md: 6 }}>
                    <Heading
                        as="h1"
                        size="heading"
                        className="[&>span:nth-child(2)]:ms-2/12 [&>span:nth-child(3)]:ms-4/12">
                        {children}
                    </Heading>
                </Columns.Column>

                <Columns.Column
                    className="-ms-2/12"
                    width={{ md: 8 }}>
                    <Overlay
                        variant="solid"
                        opacity={1}>
                        <Picture items={media} />
                    </Overlay>
                </Columns.Column>
            </Columns.Row>

            <div className="mt-4">
                <Columns.Row className="justify-end">
                    <Columns.Column width={{ md: 8 }}>
                        <Columns.Row className="">
                            <Columns.Column width={{ md: 'auto' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At error fugit, iste libero
                                optio voluptas.
                            </Columns.Column>
                            <Columns.Column width={{ md: 'auto' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At error fugit, iste libero
                                optio voluptas.
                            </Columns.Column>
                            <Columns.Column width={{ md: 'auto' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At error fugit, iste libero
                                optio voluptas.
                            </Columns.Column>
                        </Columns.Row>

                        <Button.Container
                            className="mt-4 justify-center"
                            items={[{ children: <Button.Arrow href="#">Order Now</Button.Arrow> }]}
                        />
                    </Columns.Column>
                </Columns.Row>
            </div>
        </>
    );
};

export default HalfMedia;
