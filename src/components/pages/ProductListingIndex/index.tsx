'use client';

import React from 'react';

import { useCartStateContext, useOrderStateContext } from '@/store/context';

import Heading from '@/components/common/Heading';
import Banner, { MediaProps } from '@/components/common/Banner';
import Card, { ThumbnailProps } from '@/components/common/Card';
import Container from '@/components/common/Container';
import Animation from '@/components/Animation';

export type ProductListingIndexProps = {
    entries: {
        banner?: Pick<MediaProps, 'media' | 'description' | 'children'>;
        products?: ThumbnailProps['items'];
    };
};

const ProductListingIndex = ({ entries }: ProductListingIndexProps): React.ReactElement => {
    const { popupIsOpen, setPopupIsOpen, popupContent, setPopupContent } = useOrderStateContext();
    const { addCartItemHandler } = useCartStateContext();

    return (
        <>
            {entries?.banner && (
                <Banner.Media
                    className={entries?.banner?.media && entries.banner.media.length > 0 ? '' : 'mt-6 lg:mt-10'}
                    overlay={4}
                    {...entries.banner}
                />
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
                                column={{ sm: 6, md: 4, xl: 3 }}
                                items={entries.products}
                                popup={{
                                    open: popupIsOpen,
                                    onOpenChange: (open) => setPopupIsOpen(open),
                                    content: popupContent,
                                }}
                                onClick={(data) => {
                                    setPopupIsOpen(true);
                                    if (setPopupContent) setPopupContent(data);
                                }}
                                onSubmit={(data, media) => {
                                    let item = data;
                                    if (media && media.length) item = Object.assign(item, { media });

                                    addCartItemHandler(item);
                                    setPopupIsOpen(false);
                                }}
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
