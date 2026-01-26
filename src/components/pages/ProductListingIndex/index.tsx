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
            {entries?.banner && (
                <Container
                    as="section"
                    className="mt-6 lg:mt-10">
                    <Columns>
                        <Columns.Column
                            offset={{ md: 1 }}
                            md={7}>
                            {entries?.banner?.children && (
                                <Animation type="fade-in">
                                    <Heading
                                        as="h1"
                                        size="section">
                                        {entries.banner.children}
                                    </Heading>
                                </Animation>
                            )}

                            {entries?.banner?.description && (
                                <Animation
                                    type="fade-in"
                                    config={{ delay: 0.15 }}>
                                    <RichText className="mt-1.5 text-md">{entries.banner.description}</RichText>
                                </Animation>
                            )}
                        </Columns.Column>
                    </Columns>
                </Container>
            )}

            {entries?.products && (
                <Animation
                    type="fade-in"
                    config={{ delay: 0.25 }}>
                    <Container
                        as="section"
                        className="mt-6 lg:mt-10 mb-10 lg:mb-15">
                        {entries?.products && entries?.products.length > 0 && (
                            <Card.Thumbnail
                                row={{ gutterY: 4 }}
                                column={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                                items={entries.products}
                            />
                        )}

                        {entries?.products.length === 0 && (
                            <Heading
                                as="h2"
                                family="default"
                                className="text-center text-[3rem]">
                                Sorry we have no items yet.
                            </Heading>
                        )}
                    </Container>
                </Animation>
            )}
        </>
    );
};

export default ProductListingIndex;
