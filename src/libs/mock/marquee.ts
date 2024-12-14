import { createArrayFromNumber } from '@/libs/factory/createArrayFromNumber';
import { createPicsumImage } from '@/libs/factory/createPicsumImage';

import { MarqueeProps } from '@/components/common/Marquee';

export const MARQUEE: MarqueeProps['items'] = createArrayFromNumber(4).map((item) => [
    createPicsumImage({ id: 24 + item, width: 550, height: 413 }),
]);
