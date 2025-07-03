import React from 'react';

import Heading from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import Carousel, { BannerProps, TestimonialProps } from '@/components/common/Carousel';
import List, { NumberProps } from '@/components/common/List';
import ImageDivider, { ImageDividerProps } from '@/components/common/ImageDivider';
import Container from '@/components/common/Container';
import HomepageStory, { HomepageStoryProps } from '@/components/pages/HomepageIndex/HomepageStory';
import RichText, { RichTextProps } from '@/components/common/RichText';
import HomepageHighlight, { HomepageHighlightProps } from '@/components/pages/HomepageIndex/HomepageHighlight';

export type HomepageIndexProps = {
    entries: {
        banner: BannerProps['items'];
        highlights: HomepageHighlightProps['items'];
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

            <HomepageHighlight items={entries.highlights} />

            {entries?.story?.description && <HomepageStory {...entries?.story} />}

            {entries?.testimonials && entries.testimonials.length > 0 && (
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
            )}

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
