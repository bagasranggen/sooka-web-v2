import { createMarqueeItem } from '@/libs/factory/createMarqueeItem';

import { CbMarqueeProps } from '@/components/common/ContentBlocks/CbMarquee';

export const CbMarqueeData = (props?: any): Pick<CbMarqueeProps, 'items'> => {
    const items: CbMarqueeProps['items'] = [];

    if (props?.media && props.media.length > 0) {
        props.media.forEach((item: any) => {
            const marquee = createMarqueeItem({
                item,
                handles: ['marquee', 'marqueeMobile'],
                volumeAssets: 'mediaMarquees',
            });

            if (marquee.length > 0) items.push(marquee);
        });
    }

    return { items };
};
