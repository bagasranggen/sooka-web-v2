import React from 'react';

import { ClassnameProps } from '@/libs/@types';

import Columns from '@/components/common/Columns';
import Heading from '@/components/common/Heading';
import Picture, { BaseProps } from '@/components/common/Picture';
import Carousel from '@/components/common/Carousel';
import Container from '@/components/common/Container';
import RichText, { RichTextProps } from '@/components/common/RichText';
import Animation from '@/components/Animation';

export type HomepageStoryProps = {
    mediaMain?: BaseProps['items'];
    mediaSecondary?: BaseProps['items'];
    mediaCarousel?: BaseProps['items'][];
    description?: RichTextProps['children'];
} & ClassnameProps;

const HomepageStory = ({
    mediaMain,
    mediaSecondary,
    mediaCarousel,
    description,
    className,
}: HomepageStoryProps): React.ReactElement => {
    return (
        <Container
            as="section"
            className={className}>
            <Columns.Row spacing={{ x: 3, y: 0, lg: { x: 6 } }}>
                <Columns.Column
                    className=""
                    width={{ sm: 6, lg: 7 }}>
                    <Columns.Row className="relative justify-end md:justify-start hidden md:flex">
                        <Columns.Column
                            className="md:mt-8 absolute md:relative left-0 md:left-[unset]"
                            width={{ xs: 9, md: 8 }}>
                            {mediaMain && <Picture items={mediaMain} />}
                        </Columns.Column>

                        <Columns.Column
                            className="mt-8 md:mt-0 md:absolute md:right-0 md:top-0 z-10"
                            width={{ xs: 9, md: 8 }}>
                            {mediaSecondary && (
                                <Animation
                                    type="slide-y"
                                    config={{
                                        from: 0,
                                        to: 180,
                                    }}>
                                    <Picture items={mediaSecondary} />
                                </Animation>
                            )}
                        </Columns.Column>
                    </Columns.Row>

                    {mediaCarousel && mediaCarousel.length > 0 && (
                        <Carousel.Fade
                            className="!hidden landscape:!block md:landscape:!hidden md:!hidden"
                            items={mediaCarousel.map((item) => ({
                                children: <Picture items={item} />,
                            }))}
                        />
                    )}
                </Columns.Column>

                <Columns.Column width={{ sm: 6, lg: 5 }}>
                    <Heading
                        as="h2"
                        size="section">
                        Our Story
                    </Heading>

                    {mediaCarousel && mediaCarousel.length > 0 && (
                        <Carousel.Fade
                            className="mt-3 sm:!hidden"
                            items={mediaCarousel.map((item) => ({
                                children: <Picture items={item} />,
                            }))}
                        />
                    )}

                    {description && <RichText className="mt-3 sm:mt-5">{description}</RichText>}
                </Columns.Column>
            </Columns.Row>
        </Container>
    );
};

export default HomepageStory;
