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

            <div className="mt-4">
                <Columns className="lg:justify-end">
                    <Columns.Column lg={8}>
                        <Form.Order
                            title={form.title}
                            summaries={form.summaries}
                            disabled={form.disabled}
                            notes={form.notes}
                            onSubmit={form.onSubmit}
                        />
                    </Columns.Column>
                </Columns>
            </div>
        </>
    );
};

export default HalfMedia;
