import React from 'react';

import { CARD_THUMBNAIL_WITH_PRICE } from '@/libs/mock';

import Container from '@/components/common/Container';
import Card from '@/components/common/Card';

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
                <Card.Thumbnail
                    spacing={{ x: 3, y: 4 }}
                    items={CARD_THUMBNAIL_WITH_PRICE}
                />
            </Container>
        </>
    );
};

export default HomepageIndex;
