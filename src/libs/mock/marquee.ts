import { createArrayFromNumber } from '@/libs/factory/createArrayFromNumber';
import { createPicsumImage } from '@/libs/factory/createPicsumImage';

import { PictureProps } from '@/components/common/Marquee';

export const MARQUEE: PictureProps['items'] = createArrayFromNumber(4).map((item) => [
    createPicsumImage({ id: 24 + item, width: 250, height: 333 }),
]);
