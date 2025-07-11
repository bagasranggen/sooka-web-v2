import { createArrayFromNumber } from '@/libs/factory/createArrayFromNumber';
import { createPicsumImage } from '@/libs/factory/createPicsumImage';
// import { createPictureImage } from '@/libs/factory/createPictureImage';

import { MarqueeProps } from '@/components/common/Marquee';

export const MARQUEE: MarqueeProps['items'] = createArrayFromNumber(4).map((item) => [
    // createPictureImage({ item: createPicsumImage({ id: 24 + item, width: 550, height: 413 }), media: 992 }),
    createPicsumImage({ id: 24 + item, width: 250, height: 333 }),
]);
