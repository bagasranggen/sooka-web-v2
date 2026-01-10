import React from 'react';

import Heading from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import Carousel, { TestimonialProps } from '@/components/common/Carousel';
import List, { NumberProps } from '@/components/common/List';
import ImageDivider, { ImageDividerProps } from '@/components/common/ImageDivider';
import Container from '@/components/common/Container';
import HomepageStory, { HomepageStoryProps } from '@/components/pages/HomepageIndex/HomepageStory';
import RichText, { RichTextProps } from '@/components/common/RichText';
import HomepageHighlight, { HomepageHighlightProps } from '@/components/pages/HomepageIndex/HomepageHighlight';
import HomepageBanner, { HomepageBannerProps } from '@/components/pages/HomepageIndex/HomepageBanner';
import Animation from '@/components/Animation';

export type HomepageIndexProps = {
    entries: {
        banner: HomepageBannerProps['items'];
        highlights: HomepageHighlightProps['items'];
        testimonials: TestimonialProps['items'];
        imageDivider: ImageDividerProps['media'];
        story: Omit<HomepageStoryProps, 'className'>;
        orders: {
            steps: NumberProps['items'];
        } & Pick<RichTextProps, 'children'>;
    };
};

const HomepageIndex = ({ entries }: HomepageIndexProps): React.ReactElement => {
    return (
        <>
            {entries?.banner && <HomepageBanner items={entries.banner} />}

            {entries?.highlights && entries.highlights.length > 0 && (
                <Animation type="fade-in">
                    <HomepageHighlight
                        className="mt-8 lg:mt-10 last:mb-10 last:lg:mb-20"
                        items={entries.highlights}
                    />
                </Animation>
            )}

            {entries?.story?.description && (
                <Animation type="fade-in">
                    <HomepageStory
                        className="mt-8 lg:mt-20 last:mb-10 last:lg:mb-20"
                        {...entries?.story}
                    />
                </Animation>
            )}

            {entries?.testimonials && entries.testimonials.length > 0 && (
                <Animation type="fade-in">
                    <Container
                        as="section"
                        className="mt-8 lg:mt-20 last:mb-10 last:lg:mb-20">
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
                </Animation>
            )}

            {entries?.imageDivider && entries.imageDivider.length > 0 && (
                <Animation type="fade-in">
                    <ImageDivider
                        className="mt-8 lg:mt-20 last:mb-10 last:lg:mb-20"
                        media={entries.imageDivider}
                    />
                </Animation>
            )}

            {entries?.orders?.steps && entries.orders.steps.length > 0 && (
                <Animation type="fade-in">
                    <Container
                        as="section"
                        className="mt-8 lg:mt-20 last:mb-10 last:lg:mb-20">
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
                </Animation>
            )}
        </>
    );
};

export default HomepageIndex;
