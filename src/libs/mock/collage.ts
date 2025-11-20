import { createPicsumImage } from '../factory/createPicsumImage';
import { ImageCollageProps } from '@/components/common/ImageCollage';

export const IMAGE_COLLAGE_1_1 = [createPicsumImage({ id: 53, width: 600, height: 600 })];
export const IMAGE_COLLAGE_4_3 = [createPicsumImage({ id: 531, width: 600, height: 450 })];
export const IMAGE_COLLAGE_3_4 = [createPicsumImage({ id: 223, width: 600, height: 800 })];
export const IMAGE_COLLAGE_3_2 = [createPicsumImage({ id: 112, width: 600, height: 400 })];
export const IMAGE_COLLAGE_2_3 = [createPicsumImage({ id: 233, width: 600, height: 900 })];

export const IMAGE_COLLAGE: ImageCollageProps['items'] = [
    IMAGE_COLLAGE_4_3,
    IMAGE_COLLAGE_2_3,
    IMAGE_COLLAGE_1_1,
    IMAGE_COLLAGE_3_4,
    IMAGE_COLLAGE_1_1,
    IMAGE_COLLAGE_4_3,
    // IMAGE_COLLAGE_3_2,
    // IMAGE_COLLAGE_3_4,
    // IMAGE_COLLAGE_3_4,
];
