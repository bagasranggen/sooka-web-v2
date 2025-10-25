import React from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Banner, { HalfMediaProps } from '@/components/common/Banner';
import Columns from '@/components/common/Columns';
import Container from '@/components/common/Container';
import Picture, { BaseProps } from '@/components/common/Picture';
import ProductDetailInfo, { ProductDetailInfoProps } from '@/components/pages/ProductDetailIndex/ProductDetailInfo';
import Marquee, { MarqueeProps } from '@/components/common/Marquee';
import Animation from '@/components/Animation';

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
    let infoClass: ArrayString = ['mt-10'];
    if (!entries?.marquee || entries.marquee.length === 0) infoClass.push('mb-10 md:mb-15');
    infoClass = joinArrayString(infoClass);

    return (
        <>
            {entries?.banner && (
                <Container
                    as="section"
                    className="md:mt-10">
                    <Banner.HalfMedia
                        media={entries.banner.media}
                        form={entries.banner.form}>
                        {entries.banner.children}
                    </Banner.HalfMedia>
                </Container>
            )}

            {entries?.infos && (
                <Container
                    as="section"
                    className={infoClass}>
                    <Columns.Row className="justify-between">
                        <Columns.Column width={{ md: 6 }}>
                            <Animation type="fade-in">
                                <Picture
                                    className="sticky top-2 lg:top-5"
                                    items={entries.infos.media}
                                />
                            </Animation>
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
            )}

            {entries?.marquee && entries.marquee.length > 0 && (
                <section className="mt-10 md:mt-20 mb-10 md:mb-15">
                    <Marquee items={entries.marquee} />
                </section>
            )}
        </>
    );
};

export default ProductDetailIndex;
