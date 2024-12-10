import React from 'react';

import { CARD_THUMBNAIL_WITH_PRICE } from '@/libs/mock';

import Container from '@/components/common/Container';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

export type HomepageIndexProps = {
    entries: {};
};

const HomepageIndex = ({}: HomepageIndexProps): React.ReactElement => {
    return (
        <>
            <Container as="section">
                <h1 className="mt-1 text-md/[5rem] font-anglecia">HELLO WORLD</h1>
            </Container>

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
        </>
    );
};

export default HomepageIndex;
