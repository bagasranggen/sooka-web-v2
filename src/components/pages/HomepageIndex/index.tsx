import React from 'react';

import { CARD_THUMBNAIL_WITH_PRICE } from '@/libs/mock';
import { createPicsumImage } from '@/libs/factory';

import Container from '@/components/common/Container';
import Card from '@/components/common/Card';
import Heading from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import Picture from '@/components/common/Picture';
import Carousel, { BannerProps, TestimonialProps } from '@/components/common/Carousel';
import Tabs from '@/components/common/Tabs';

export type HomepageIndexProps = {
    entries: {
        banner: BannerProps['items'];
        testimonials: TestimonialProps['items'];
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
                    className="mt-5 relative z-10"
                    items={[
                        {
                            id: 'lis',
                            titleClass: '[&:not(.active)]:opacity-60',
                            title: <Heading.Number number="01">New</Heading.Number>,
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
                            title: <Heading.Number number="02">Best Seller</Heading.Number>,
                            children: (
                                <>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur cum,
                                    cumque dolorem fuga id odio quos repellat repudiandae ullam! At, culpa delectus
                                    eaque odit officia quibusdam! Natus, quia, repudiandae.
                                </>
                            ),
                        },
                    ]}
                />
            </Container>

            <Container
                as="section"
                className="mt-15">
                <Columns.Row spacing={{ x: 3, md: { x: 6 } }}>
                    <Columns.Column
                        width={{
                            md: 7,
                        }}>
                        <Columns.Row className="relative">
                            <Columns.Column
                                width={{ md: 8 }}
                                className="mt-6">
                                <Picture items={[createPicsumImage({ width: 550, height: 733 })]} />
                            </Columns.Column>
                            <Columns.Column
                                className="absolute right-0 top-0"
                                width={{ md: 8 }}>
                                <Picture items={[createPicsumImage({ width: 550, height: 733 })]} />
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
                className="mt-15">
                <Columns.Row className="justify-center">
                    <Columns.Column
                        width={{
                            md: 9,
                        }}>
                        <Heading
                            as="h2"
                            size="section"
                            className="text-center">
                            Testimonials
                        </Heading>

                        <div className="mt-6">
                            <Carousel.Testimonial items={entries.testimonials} />
                        </div>
                    </Columns.Column>
                </Columns.Row>
            </Container>

            <Container
                as="section"
                className="mt-15 mb-15">
                <Columns.Row className="justify-center">
                    <Columns.Column width={{ md: 8 }}>
                        <Heading
                            as="h2"
                            size="section"
                            className="text-center"
                            description={
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis qui quo
                                    velit. Aperiam, atque consequatur. Cum cumque ducimus eligendi ex incidunt labore
                                    magnam, nihil nulla numquam provident quibusdam sit.
                                </p>
                            }>
                            First Time <span className="text-sooka-primary">Ordering</span>?
                        </Heading>
                    </Columns.Column>
                </Columns.Row>
            </Container>
        </>
    );
};

export default HomepageIndex;
