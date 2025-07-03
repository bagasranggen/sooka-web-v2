import React from 'react';

import Columns from '@/components/common/Columns';
import Heading from '@/components/common/Heading';
import Container from '@/components/common/Container';
import Picture, { BaseProps } from '@/components/common/Picture';
import RichText, { RichTextProps } from '@/components/common/RichText';

export type HomepageStoryProps = {
    mediaMain?: BaseProps['items'];
    mediaSecondary?: BaseProps['items'];
    description?: RichTextProps['children'];
    // } & Pick<RichTextProps, 'children'>;
};

const HomepageStory = ({ mediaMain, mediaSecondary, description }: HomepageStoryProps): React.ReactElement => {
    return (
        <Container
            as="section"
            className="mt-10 md:mt-20">
            <Columns.Row spacing={{ x: 3, y: 5, lg: { x: 6 } }}>
                <Columns.Column width={{ md: 7 }}>
                    <Columns.Row className="relative justify-end md:justify-start">
                        <Columns.Column
                            className="md:mt-8 absolute md:relative left-0 md:left-[unset]"
                            width={{ xs: 9, md: 8 }}>
                            {mediaMain && <Picture items={mediaMain} />}

                            {/*<Picture*/}
                            {/*    items={[*/}
                            {/*        createPictureImage({*/}
                            {/*            item: createPicsumImage({ width: 550, height: 733 }),*/}
                            {/*            // media: 768,*/}
                            {/*        }),*/}
                            {/*        // createPictureImage({*/}
                            {/*        //     item: createPicsumImage({ width: 600, height: 400 }),*/}
                            {/*        //     media: 768,*/}
                            {/*        // }),*/}
                            {/*    ]}*/}
                            {/*/>*/}
                        </Columns.Column>
                        <Columns.Column
                            className="mt-8 md:mt-0 md:absolute md:right-0 md:top-0 z-10"
                            width={{ xs: 9, md: 8 }}>
                            {mediaSecondary && <Picture items={mediaSecondary} />}
                            {/*<Picture*/}
                            {/*    items={[*/}
                            {/*        createPictureImage({*/}
                            {/*            item: createPicsumImage({ width: 550, height: 733 }),*/}
                            {/*            // media: 768,*/}
                            {/*        }),*/}
                            {/*        // createPictureImage({*/}
                            {/*        //     item: createPicsumImage({ width: 600, height: 400 }),*/}
                            {/*        //     media: 768,*/}
                            {/*        // }),*/}
                            {/*    ]}*/}
                            {/*/>*/}
                        </Columns.Column>
                    </Columns.Row>
                </Columns.Column>

                <Columns.Column width={{ md: 5 }}>
                    <Heading
                        as="h2"
                        size="section">
                        Our Story
                    </Heading>

                    {/*<div className="mt-5">*/}
                    {/*    <p>*/}
                    {/*        Hi! Welcome to Sooka Baked Goods. <br /> We offer an incredible range of cakes for your*/}
                    {/*        special occasions.*/}
                    {/*    </p>*/}
                    {/*    <p>*/}
                    {/*        The idea of Sooka began back in 2017, when I was randomly baking after a really loooong day.*/}
                    {/*        Let me tell you, it felt magical.*/}
                    {/*    </p>*/}
                    {/*    <p>*/}
                    {/*        As a home baker, I have spent years transforming simple ingredients to mouth-watering*/}
                    {/*        delights for my loved ones. They said, nothing compares to the scent of fresh-baked cakes or*/}
                    {/*        banana bread that came from my kitchen.*/}
                    {/*    </p>*/}

                    {/*    <p>Order now from our bakery and be a part of our growing family!</p>*/}
                    {/*</div>*/}

                    {description && <RichText className="mt-5">{description}</RichText>}
                </Columns.Column>
            </Columns.Row>
        </Container>
    );
};

export default HomepageStory;
