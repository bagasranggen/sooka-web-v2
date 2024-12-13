import React from 'react';

import Banner, { HalfMediaProps } from '@/components/common/Banner';
import Columns from '@/components/common/Columns';
import Container from '@/components/common/Container';
import Picture, { BaseProps } from '@/components/common/Picture';
import ProductDetailInfo, { ProductDetailInfoProps } from '@/components/pages/ProductDetailIndex/ProductDetailInfo';

export type ProductDetailIndexProps = {
    entries: {
        banner: HalfMediaProps;
        infos: {
            media: BaseProps['items'];
            contents: ProductDetailInfoProps[];
        };
    };
};

const ProductDetailIndex = ({ entries }: ProductDetailIndexProps): React.ReactElement => {
    return (
        <>
            <Container
                as="section"
                className="mt-10">
                <Banner.HalfMedia media={entries.banner.media}>{entries.banner.children}</Banner.HalfMedia>
            </Container>

            <Container
                as="section"
                className="mt-10">
                <Columns.Row className="justify-between">
                    <Columns.Column width={{ md: 6 }}>
                        <Picture
                            className="sticky top-5"
                            items={entries.infos.media}
                        />
                    </Columns.Column>

                    <Columns.Column width={{ md: 5 }}>
                        {entries.infos.contents.map((item: ProductDetailInfoProps, i: number) => {
                            return (
                                <ProductDetailInfo
                                    key={i}
                                    {...item}
                                />
                            );
                        })}
                    </Columns.Column>
                </Columns.Row>
            </Container>

            <Container
                as="section"
                className="mt-10 mb-10">
                MARQUEE
            </Container>
        </>
    );
};

export default ProductDetailIndex;
