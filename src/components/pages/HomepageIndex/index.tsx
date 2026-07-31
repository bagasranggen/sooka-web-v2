import React from 'react';

import Heading from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import Carousel, { BannerProps, TestimonialProps } from '@/components/common/Carousel';
import List, { NumberProps } from '@/components/common/List';
import Container from '@/components/common/Container';
import Picture, { BaseProps } from '@/components/common/Picture';
import HomepageStory, { HomepageStoryProps } from '@/components/pages/HomepageIndex/HomepageStory';
import RichText, { RichTextProps } from '@/components/common/RichText';
import HomepageHighlight, { HomepageHighlightProps } from '@/components/pages/HomepageIndex/HomepageHighlight';
import Animation from '@/components/Animation';

export type HomepageIndexProps = {
    entries: {
        banner?: BannerProps['items'];
        highlights?: HomepageHighlightProps['items'];
        testimonials?: TestimonialProps['items'];
        imageDivider?: BaseProps['items'];
        story?: Omit<HomepageStoryProps, 'className'>;
        orders?: {
            steps: NumberProps['items'];
        } & Pick<RichTextProps, 'children'>;
    };
};

const HomepageIndex = ({ entries }: HomepageIndexProps): React.ReactElement => {
    return (
        <>
            {entries?.banner && (
                <section>
                    <Carousel.Banner items={entries.banner} />
                </section>
            )}

            {entries?.highlights && entries.highlights.length > 0 && (
                <Animation type="fade-in">
                    <Container
                        as="section"
                        className="mt-8 lg:mt-10 last:mb-10 lg:last:mb-20">
                        <HomepageHighlight items={entries.highlights} />
                    </Container>
                </Animation>
            )}

            {entries?.story?.description && (
                <Animation type="fade-in">
                    <Container
                        as="section"
                        className="mt-8 lg:mt-20 last:mb-10 lg:last:mb-20">
                        <HomepageStory {...entries?.story} />
                    </Container>
                </Animation>
            )}

            {entries?.testimonials && entries.testimonials.length > 0 && (
                <Animation type="fade-in">
                    <Container
                        as="section"
                        className="mt-8 lg:mt-20 last:mb-10 lg:last:mb-20">
                        <Columns className="justify-center">
                            <Columns.Column
                                md={8}
                                lg={9}>
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
                        </Columns>
                    </Container>
                </Animation>
            )}

            {entries?.imageDivider && entries.imageDivider.length > 0 && (
                <Animation type="fade-in">
                    <section className="mt-8 lg:mt-20 last:mb-10 lg:last:mb-20">
                        <Picture
                            className="md:ms-auto block md:w-[88vw] lg:w-[80vw]"
                            items={entries.imageDivider}
                        />
                    </section>
                </Animation>
            )}

            {entries?.orders?.steps && entries.orders.steps.length > 0 && (
                <Animation type="fade-in">
                    <Container
                        as="section"
                        className="mt-8 lg:mt-20 last:mb-10 lg:last:mb-20">
                        <Columns className="justify-center">
                            <Columns.Column lg={8}>
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
                        </Columns>
                    </Container>
                </Animation>
            )}
        </>
    );
};

export default HomepageIndex;
