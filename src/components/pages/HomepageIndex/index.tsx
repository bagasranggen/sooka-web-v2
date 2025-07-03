import React from 'react';

import { CARD_THUMBNAIL_WITH_PRICE } from '@/libs/mock';
// import { createPicsumImage, createPictureImage } from '@/libs/factory';

import Card from '@/components/common/Card';
import Heading from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import Carousel, { BannerProps, TestimonialProps } from '@/components/common/Carousel';
import Tabs from '@/components/common/Tabs';
import List, { NumberProps } from '@/components/common/List';
// import Picture from '@/components/common/Picture';
import ImageDivider, { ImageDividerProps } from '@/components/common/ImageDivider';
import Container from '@/components/common/Container';
import HomepageStory, { HomepageStoryProps } from '@/components/pages/HomepageIndex/HomepageStory';
import RichText, { RichTextProps } from '@/components/common/RichText';

export type HomepageIndexProps = {
    entries: {
        banner: BannerProps['items'];
        testimonials: TestimonialProps['items'];
        imageDivider: ImageDividerProps['media'];
        story: HomepageStoryProps;
        orders: {
            steps: NumberProps['items'];
        } & Pick<RichTextProps, 'children'>;
    };
};

const HomepageIndex = ({ entries }: HomepageIndexProps): React.ReactElement => {
    return (
        <>
            {entries?.banner && entries.banner.length > 0 && (
                <section>
                    <Carousel.Banner items={entries.banner} />
                </section>
            )}

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

            {entries?.story?.description && <HomepageStory {...entries?.story} />}

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

            {entries?.orders?.steps && entries.orders.steps.length > 0 && (
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
                                    <RichText className="text-center">{entries?.orders?.children as any}</RichText>
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
            )}
        </>
    );
};

export default HomepageIndex;
