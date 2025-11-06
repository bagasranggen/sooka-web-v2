'use client';

import React from 'react';

import Carousel, { BannerProps } from '@/components/common/Carousel';

export type HomepageBannerProps = Pick<BannerProps, 'items'>;

const HomepageBanner = ({ items }: HomepageBannerProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    return (
        <section>
            <Carousel.Banner items={items} />
        </section>
    );
};

export default HomepageBanner;
