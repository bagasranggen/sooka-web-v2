import React from 'react';

import Banner, { HalfMediaProps } from '@/components/common/Banner';
import Columns from '@/components/common/Columns';
import Container from '@/components/common/Container';
import Picture, { BaseProps } from '@/components/common/Picture';
import ProductDetailInfo, { ProductDetailInfoProps } from '@/components/pages/ProductDetailIndex/ProductDetailInfo';
import Marquee, { MarqueeProps } from '@/components/common/Marquee';

export type ProductDetailIndexProps = {
    entries: {
        banner: HalfMediaProps;
        infos: {
            media: BaseProps['items'];
            contents: ProductDetailInfoProps[];
        };
        marquee?: MarqueeProps['items'];
    };
};

const ProductDetailIndex = ({ entries }: ProductDetailIndexProps): React.ReactElement => {
    return (
        <>
            <Container
                as="section"
                className="md:mt-10">
                <Banner.HalfMedia
                    media={entries.banner.media}
                    form={entries.banner.form}>
                    {entries.banner.children}
                </Banner.HalfMedia>
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

                    <Columns.Column width={{ md: 6, lg: 5 }}>
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

            {entries?.marquee && entries.marquee.length > 0 && (
                <section className="mt-10 md:mt-20 mb-10 md:mb-15">
                    <Marquee items={entries.marquee} />
                </section>
            )}
        </>
    );
};

export default ProductDetailIndex;
