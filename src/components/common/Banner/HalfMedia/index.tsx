import React from 'react';

import Columns from '@/components/common/Columns';
import Heading, { BaseProps as HeadingBaseProps } from '@/components/common/Heading';
import Form, { OrderProps } from '@/components/common/Form';
import Overlay from '@/components/common/Overlay';
import Picture, { BaseProps as PictureBaseProps } from '@/components/common/Picture';

export type HalfMediaProps = {
    media: PictureBaseProps['items'];
    form: OrderProps;
} & Pick<HeadingBaseProps, 'children'>;

const HalfMedia = ({ media, form, children }: HalfMediaProps): React.ReactElement => {
    return (
        <>
            <Columns.Row
                className="items-center"
                spacing={{ x: 3, y: 3 }}>
                <Columns.Column
                    className="z-10 order-last md:order-first"
                    width={{ md: 6, lg: 10 }}>
                    <Heading
                        as="h1"
                        size="heading"
                        className="[&>span:nth-child(3)]:md:ms-2/12 [&>span:nth-child(5)]:md:ms-4/12">
                        {children}
                    </Heading>
                </Columns.Column>

                <Columns.Column
                    className="md:-ms-6/12 order-first md:order-last !px-0 md:!px-1.5"
                    width={{ md: 9, lg: 8 }}>
                    <Overlay
                        variant="solid"
                        opacity={1}>
                        <Picture items={media} />
                    </Overlay>
                </Columns.Column>
            </Columns.Row>

            <div className="mt-4">
                <Columns.Row className="lg:justify-end">
                    <Columns.Column width={{ md: 12, lg: 8 }}>
                        <Form.Order
                            title={form.title}
                            summaries={form.summaries}
                        />
                    </Columns.Column>
                </Columns.Row>
            </div>
        </>
    );
};

export default HalfMedia;
