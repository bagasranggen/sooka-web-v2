import React from 'react';

import Picture, { BaseProps } from '@/components/common/Picture';
import Animation from '@/components/Animation';

export type MarqueeProps = {
    items: BaseProps['items'][];
};

const Marquee = ({ items }: MarqueeProps): React.ReactElement => {
    return (
        <div className="overflow-hidden">
            <Animation type="marquee">
                <div className="flex flex-nowrap *:flex-shrink-0 *:basis-auto *:flex-grow">
                    <Animation
                        type="marquee"
                        as="item">
                        <div className="flex flex-nowrap *:ms-2">
                            {items.map((item: BaseProps['items'], i: number) => (
                                <Picture
                                    key={i}
                                    items={item}
                                />
                            ))}
                        </div>
                    </Animation>
                </div>
            </Animation>
        </div>
    );
};

export default Marquee;
