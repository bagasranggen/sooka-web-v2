import React from 'react';

import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';

export type NotFoundIndexProps = {};

const NotFoundIndex = ({}: NotFoundIndexProps): React.ReactElement => {
    return (
        <>
            <Container className="mt-30 lg:mt-40 xl:mt-20 mb-30 lg:mb-40 xl:mb-20 text-center">
                <Heading
                    as="h1"
                    className="text-[4rem] md:text-[13rem] leading-8 md:leading-12">
                    Crumbs!
                </Heading>

                <p className="mt-2.5 md:text-[2.2rem]">We couldn’t find the page you’re looking for.</p>

                <Button.Container
                    className="mt-3 md:mt-5 justify-center"
                    items={[
                        {
                            children: (
                                <Button.Arrow
                                    as="anchor"
                                    size="lg"
                                    href="/">
                                    Bake to Home
                                </Button.Arrow>
                            ),
                        },
                    ]}
                />
            </Container>
        </>
    );
};

export default NotFoundIndex;
