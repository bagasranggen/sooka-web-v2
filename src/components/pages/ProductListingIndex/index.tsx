import React from 'react';

import Heading, { BaseProps } from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import Card, { ThumbnailProps } from '@/components/common/Card';
import Container from '@/components/common/Container';

export type ProductListingIndexProps = {
    entries: {
        banner: {
            description?: React.ReactNode;
        } & Pick<BaseProps, 'children'>;
        products: ThumbnailProps['items'];
    };
};

const ProductListingIndex = ({ entries }: ProductListingIndexProps): React.ReactElement => {
    return (
        <>
            <Container
                as="section"
                className="mt-10">
                <Columns.Row>
                    <Columns.Column
                        offset={{ md: 1 }}
                        width={{ md: 7 }}>
                        <Heading
                            as="h1"
                            size="section">
                            {entries.banner.children}
                        </Heading>

                        {entries.banner?.description && (
                            <div className="mt-1.5 text-md">{entries.banner.description}</div>
                        )}
                    </Columns.Column>
                </Columns.Row>
            </Container>

            {entries.products.length > 0 && (
                <Container
                    as="section"
                    className="mt-10 mb-15">
                    <Card.Thumbnail
                        spacing={{ x: 3, y: 4 }}
                        columns={{ xs: 1, sm: 2, md: 4 }}
                        items={entries.products}
                    />
                </Container>
            )}
        </>
    );
};

export default ProductListingIndex;
