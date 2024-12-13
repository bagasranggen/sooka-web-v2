import React from 'react';

import { CARD_THUMBNAIL_WITHOUT_PRICE, IMAGE_COLLAGE } from '@/libs/mock';

import Columns from '@/components/common/Columns';
import Heading from '@/components/common/Heading';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import ImageCollage from '@/components/common/ImageCollage';

export type CustomCakesIndexProps = {};

const CustomCakesIndex = ({}: CustomCakesIndexProps): React.ReactElement => {
    return (
        <>
            <Container
                as="section"
                className="mt-10">
                <Columns.Row className="justify-center">
                    <Columns.Column width={{ md: 8 }}>
                        <Heading
                            as="h1"
                            size="heading"
                            className="text-center">
                            Custom <span className="text-sooka-primary">Cakes</span>
                        </Heading>
                    </Columns.Column>
                </Columns.Row>
            </Container>

            <Container
                as="section"
                className="mt-10">
                <Columns.Row className="justify-center">
                    <Columns.Column width={{ md: 10 }}>
                        <ImageCollage items={IMAGE_COLLAGE} />
                    </Columns.Column>
                </Columns.Row>
            </Container>

            <Container
                as="section"
                className="mt-10">
                <Columns.Row>
                    <Columns.Column
                        offset={{ md: 1 }}
                        width={{ md: 7 }}>
                        <Heading
                            as="h2"
                            size="section">
                            Filling Range
                        </Heading>
                    </Columns.Column>
                </Columns.Row>

                <div className="mt-5">
                    <Card.Thumbnail
                        spacing={{ x: 2, y: 4 }}
                        columns={{ xs: 1, sm: 2, md: 5 }}
                        items={[...CARD_THUMBNAIL_WITHOUT_PRICE, CARD_THUMBNAIL_WITHOUT_PRICE[0]]}
                    />
                </div>
            </Container>

            <Container
                as="section"
                className="mt-10 mb-10">
                <Columns.Row className="justify-center">
                    <Columns.Column width={{ md: 8 }}>
                        <Heading
                            as="h4"
                            size="callout"
                            className="text-center">
                            Ready to create some deliciously decorated cakes?
                        </Heading>

                        <Button.Container
                            className="mt-3 justify-center"
                            items={[
                                {
                                    children: (
                                        <Button.Arrow
                                            href="#"
                                            size="lg">
                                            Let&apos;s Collabs
                                        </Button.Arrow>
                                    ),
                                },
                            ]}
                        />
                    </Columns.Column>
                </Columns.Row>
            </Container>
        </>
    );
};

export default CustomCakesIndex;
