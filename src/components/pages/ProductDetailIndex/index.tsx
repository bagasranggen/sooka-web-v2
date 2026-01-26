'use client';

import React from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString, sendWhatsappMessage } from '@/libs/utils';
import { createMessageText } from '@/libs/factory';

import Banner, { HalfMediaProps } from '@/components/common/Banner';
import Columns from '@/components/common/Columns';
import Container from '@/components/common/Container';
import Picture, { BaseProps } from '@/components/common/Picture';
import ProductDetailInfo, { ProductDetailInfoProps } from '@/components/pages/ProductDetailIndex/ProductDetailInfo';
import Marquee, { PictureProps } from '@/components/common/Marquee';
import Animation from '@/components/Animation';

export type ProductDetailIndexProps = {
    entries: {
        banner: HalfMediaProps;
        infos: {
            media: BaseProps['items'];
            contents: ProductDetailInfoProps[];
        };
        marquee?: PictureProps['items'];
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
                        form={{
                            ...entries.banner.form,
                            onSubmit: (data) => {
                                sendWhatsappMessage(
                                    createMessageText({
                                        type: 'regular-cake',
                                        isEncoded: true,
                                        dimension: data?.price,
                                        flavour: data?.title,
                                        addon: data?.addOns ?? undefined,
                                    })
                                );
                            },
                        }}>
                        {entries.banner.children}
                    </Banner.HalfMedia>
                </Container>
            )}

            {entries?.infos && (
                <Container
                    as="section"
                    className={infoClass}>
                    <Columns className="justify-between">
                        <Columns.Column md={6}>
                            <Animation type="fade-in">
                                <Picture
                                    className="sticky top-2 lg:top-5"
                                    items={entries.infos.media}
                                />
                            </Animation>
                        </Columns.Column>

                        <Columns.Column
                            md={6}
                            lg={5}>
                            {entries.infos.contents.map((item: ProductDetailInfoProps, i: number) => {
                                return (
                                    <ProductDetailInfo
                                        key={i}
                                        {...item}
                                    />
                                );
                            })}
                        </Columns.Column>
                    </Columns>
                </Container>
            )}

            {entries?.marquee && entries.marquee.length > 0 && (
                <Animation type="fade-in">
                    <section className="mt-10 md:mt-20 mb-10 md:mb-15">
                        <Marquee.Picture items={entries.marquee} />
                    </section>
                </Animation>
            )}
        </>
    );
};

export default ProductDetailIndex;
