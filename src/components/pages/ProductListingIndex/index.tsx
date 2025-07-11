import React from 'react';

import Heading, { BaseProps } from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import Card, { ThumbnailProps } from '@/components/common/Card';
import Container from '@/components/common/Container';
import Animation from '@/components/Animation';
import RichText, { RichTextProps } from '@/components/common/RichText';

export type ProductListingIndexProps = {
    entries: {
        banner: {
            description?: RichTextProps['children'];
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
                        <Animation type="fade-in">
                            <Heading
                                as="h1"
                                size="section">
                                {entries.banner.children}
                            </Heading>
                        </Animation>

                        {entries.banner?.description && (
                            <Animation
                                type="fade-in"
                                config={{ delay: 0.15 }}>
                                <RichText className="mt-1.5 text-md">{entries.banner.description}</RichText>
                            </Animation>
                        )}
                    </Columns.Column>
                </Columns.Row>
            </Container>

            {entries.products.length > 0 && (
                <Animation
                    type="fade-in"
                    config={{ delay: 0.25 }}>
                    <Container
                        as="section"
                        className="mt-10 mb-15">
                        <Card.Thumbnail
                            spacing={{ x: 3, y: 4 }}
                            columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                            items={entries.products}
                        />
                    </Container>
                </Animation>
            )}
        </>
    );
};

export default ProductListingIndex;
