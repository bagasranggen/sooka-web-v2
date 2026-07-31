import { createPicsumImage } from '@/libs/factory';
import { MediaProps } from '@/components/common/Banner';

export const BANNER_MEDIA_MEDIA: MediaProps['media'] = [
    `url(${createPicsumImage({ id: 200, width: 1920, height: 896 }).src})`,
    `url(${createPicsumImage({ id: 200, width: 1920, height: 896 }).src})`,
];
