import React from 'react';

import { CARD_THUMBNAIL_WITH_PRICE } from '@/libs/mock';

import Container from '@/components/common/Container';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import Picture from '@/components/common/Picture';
import { createPicsumImage } from '@/libs/factory';
import Overlay from '@/components/common/Overlay';
import Carousel from '@/components/common/Carousel';

export type HomepageIndexProps = {
    entries: {};
};

const HomepageIndex = ({}: HomepageIndexProps): React.ReactElement => {
    const bg = createPicsumImage({ width: 1600, height: 900 });

    console.log(bg.src);

    return (
        <>
            <section>
                <Carousel.Banner items={[{}, {}]} />
                {/*<Button*/}
                {/*    as="anchor"*/}
                {/*    href="#">*/}
                {/*    <Overlay*/}
                {/*        variant="gradient-right"*/}
                {/*        opacity={4}>*/}
                {/*        <div className="bg-[url('https://picsum.photos/id/237/1600/900')] bg-cover">*/}
                {/*            <Container className="relative z-[2] h-screen">*/}
                {/*                <Columns.Row className="items-center justify-end h-full">*/}
                {/*                    <Columns.Column width={{ md: 5 }}>*/}
                {/*                        <div className="mb-1 flex items-center text-white text-[1.4rem] tracking-[.2rem] font-bold uppercase">*/}
                {/*                            <span className="w-[8.4rem] h-[.3rem] bg-white me-1.5" />*/}
                {/*                            New Products*/}
                {/*                        </div>*/}
                {/*                        <h1 className="text-white text-[7rem] leading-[6.5rem] font-anglecia">*/}
                {/*                            Strawberry Shortcake*/}
                {/*                        </h1>*/}
                {/*                        <div className="mt-2.5 text-white">*/}
                {/*                            <p>*/}
                {/*                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium*/}
                {/*                                alias deleniti dolores dolorum, ex non quod. Corporis dolore ea, fugit*/}
                {/*                                impedit laboriosam necessitatibus neque nostrum optio praesentium quod*/}
                {/*                                repudiandae unde.*/}
                {/*                            </p>*/}
                {/*                        </div>*/}
                {/*                    </Columns.Column>*/}
                {/*                </Columns.Row>*/}
                {/*            </Container>*/}
                {/*        </div>*/}
                {/*    </Overlay>*/}
                {/*</Button>*/}
            </section>

            <Container as="section">
                <div className="mt-5">
                    <Card.Thumbnail
                        spacing={{ x: 3, y: 4 }}
                        columns={{ xs: 1, sm: 2, md: 4 }}
                        items={CARD_THUMBNAIL_WITH_PRICE}
                    />

                    <Button.Container
                        className="mt-5 justify-center"
                        items={[
                            {
                                children: (
                                    <Button.Arrow
                                        href="#"
                                        size="lg">
                                        View All
                                    </Button.Arrow>
                                ),
                            },
                        ]}
                    />
                </div>
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nobis odio, quod repellat rerum
                            similique sit vero? Atque aut molestiae quidem reiciendis sapiente voluptate voluptatum.
                            Error in laborum maiores voluptatum?
                        </div>
                    </Columns.Column>
                </Columns.Row>
            </Container>

            <Container
                as="section"
                className="mt-15">
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
