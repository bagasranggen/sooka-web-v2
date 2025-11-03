import { checkMediaStatus } from '../../../../libs/utils/checkMediaStatus';
import { createPictureImage } from '../../../../libs/factory/createPictureImage';

import { CbGalleryProps } from '@/components/common/ContentBlocks/CbGallery';

const HANDLES = {
    '1x1': 'collage1x1',
    '4x3': 'collage4x3',
    '3x4': 'collage3x4',
    '3x2': 'collage3x2',
    '2x3': 'collage2x3',
};

const ORDERS = [
    HANDLES['4x3'],
    HANDLES['2x3'],
    HANDLES['1x1'],
    HANDLES['3x4'],
    HANDLES['1x1'],
    HANDLES['4x3'],
    HANDLES['3x2'],
    HANDLES['3x4'],
    HANDLES['3x4'],
];

export const CbGalleryData = (props?: any): Pick<CbGalleryProps, 'items'> => {
    const items: CbGalleryProps['items'] = [];

    if (props?.media && props.media.length > 0) {
        props.media.forEach((item: any, i: number) => {
            const handles = Object.values(HANDLES);
            const order = i % handles.length;
            const handle = ORDERS?.[order];
            const media = checkMediaStatus({ item: item, handles });

            const tmp = [];

            if (handle && media?.[handle]) {
                tmp.push(createPictureImage({ item: media[handle], media: 768 }));
                tmp.push(createPictureImage({ item: media[HANDLES['1x1']] }));
            }

            if (tmp.length > 0) {
                items.push(tmp);
            }
        });
    }

    return { items };
};
