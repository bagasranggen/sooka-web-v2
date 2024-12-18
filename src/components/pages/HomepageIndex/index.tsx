import React from 'react';

import { CARD_THUMBNAIL_WITH_PRICE } from '@/libs/mock';
import { createPicsumImage, createPictureImage } from '@/libs/factory';

import Card from '@/components/common/Card';
import Heading from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import Carousel, { BannerProps, TestimonialProps } from '@/components/common/Carousel';
import Tabs from '@/components/common/Tabs';
import List, { NumberProps } from '@/components/common/List';
import Picture from '@/components/common/Picture';
import ImageDivider, { ImageDividerProps } from '@/components/common/ImageDivider';
import Container from '@/components/common/Container';

export type HomepageIndexProps = {
    entries: {
        banner: BannerProps['items'];
        testimonials: TestimonialProps['items'];
        imageDivider: ImageDividerProps['media'];
        orders: {
            steps: NumberProps['items'];
        };
    };
};

const HomepageIndex = ({ entries }: HomepageIndexProps): React.ReactElement => {
    return (
        <>
            <section>
                <Carousel.Banner items={entries.banner} />
            </section>

            <Container as="section">
                <Tabs
                    className="mt-10 relative z-10"
                    items={[
                        {
                            id: 'lis',
                            titleClass: '[&:not(.active)]:opacity-60',
                            title: (
                                <Heading.Number
                                    number="01"
                                    size="lg">
                                    New
                                </Heading.Number>
                            ),
                            children: (
                                <Card.Thumbnail
                                    spacing={{ x: 3, y: 4 }}
                                    columns={{ xs: 1, sm: 2, md: 4 }}
                                    items={CARD_THUMBNAIL_WITH_PRICE}
                                />
                            ),
                        },
                        {
                            id: 'lis2',
                            titleClass: '[&:not(.active)]:opacity-60',
                            title: (
                                <Heading.Number
                                    number="02"
                                    size="lg">
                                    Best Seller
                                </Heading.Number>
                            ),
                            children: (
                                <Card.Thumbnail
                                    spacing={{ x: 3, y: 4 }}
                                    columns={{ xs: 1, sm: 2, md: 4 }}
                                    items={CARD_THUMBNAIL_WITH_PRICE}
                                />
                            ),
                        },
                    ]}
                />
            </Container>

            <Container
                as="section"
                className="mt-10 md:mt-20">
                <Columns.Row spacing={{ x: 3, y: 5, lg: { x: 6 } }}>
                    <Columns.Column
                        width={{
                            md: 7,
                        }}>
                        <Columns.Row className="relative justify-end md:justify-start">
                            <Columns.Column
                                className="md:mt-8 absolute md:relative left-0 md:left-[unset]"
                                width={{ xs: 9, md: 8 }}>
                                <Picture
                                    items={[
                                        createPictureImage({
                                            item: createPicsumImage({ width: 550, height: 733 }),
                                            // media: 768,
                                        }),
                                        // createPictureImage({
                                        //     item: createPicsumImage({ width: 600, height: 400 }),
                                        //     media: 768,
                                        // }),
                                    ]}
                                />
                            </Columns.Column>
                            <Columns.Column
                                className="mt-8 md:mt-0 md:absolute md:right-0 md:top-0 z-10"
                                width={{ xs: 9, md: 8 }}>
                                <Picture
                                    items={[
                                        createPictureImage({
                                            item: createPicsumImage({ width: 550, height: 733 }),
                                            // media: 768,
                                        }),
                                        // createPictureImage({
                                        //     item: createPicsumImage({ width: 600, height: 400 }),
                                        //     media: 768,
                                        // }),
                                    ]}
                                />
                            </Columns.Column>
                        </Columns.Row>
                    </Columns.Column>

                    <Columns.Column
                        width={{
                            md: 5,
                        }}>
                        <Heading
                            as="h2"
                            size="section">
                            Our Story
                        </Heading>

                        <div className="mt-5">
                            <p>
                                Hi! Welcome to Sooka Baked Goods. <br /> We offer an incredible range of cakes for your
                                special occasions.
                            </p>
                            <p>
                                The idea of Sooka began back in 2017, when I was randomly baking after a really loooong
                                day. Let me tell you, it felt magical.
                            </p>
                            <p>
                                As a home baker, I have spent years transforming simple ingredients to mouth-watering
                                delights for my loved ones. They said, nothing compares to the scent of fresh-baked
                                cakes or banana bread that came from my kitchen.
                            </p>

                            <p>Order now from our bakery and be a part of our growing family!</p>
                        </div>
                    </Columns.Column>
                </Columns.Row>
            </Container>

            <Container
                as="section"
                className="mt-10 md:mt-20">
                <Columns.Row className="justify-center">
                    <Columns.Column
                        width={{
                            md: 10,
                            lg: 9,
                        }}>
                        <Heading
                            as="h2"
                            size="section"
                            className="text-center">
                            Testimonials
                        </Heading>

                        <div className="mt-8">
                            <Carousel.Testimonial items={entries.testimonials} />
                        </div>
                    </Columns.Column>
                </Columns.Row>
            </Container>

            <ImageDivider
                className="mt-10 md:mt-20"
                media={entries.imageDivider}
            />

            <Container
                as="section"
                className="mt-10 md:mt-20 mb-10 md:mb-20">
                <Columns.Row className="justify-center">
                    <Columns.Column width={{ lg: 8 }}>
                        <Heading
                            as="h2"
                            size="section"
                            className="text-center"
                            description={
                                <p className="text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis qui quo
                                    velit.
                                </p>
                            }>
                            First Time <span className="text-sooka-primary">Ordering</span>?
                        </Heading>

                        <List.Number
                            className="mt-8"
                            items={entries.orders.steps}
                        />
                    </Columns.Column>
                </Columns.Row>
            </Container>
        </>
    );
};

export default HomepageIndex;
