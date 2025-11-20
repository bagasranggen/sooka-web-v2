import { checkMediaStatus, CheckMediaStatusProps } from '../utils/checkMediaStatus';
import { createPictureImage } from './createPictureImage';

import { BaseProps } from '@/components/common/Picture';

export type CreateMarqueeItemProps = {
    // item: any;
    // handles: string[];
} & Pick<CheckMediaStatusProps, 'item' | 'handles'>;

export const createMarqueeItem = ({ item, handles }: CreateMarqueeItemProps) => {
    const tmp: BaseProps['items'] = [];
    const { data: media } = checkMediaStatus({ item: item, handles });

    if (handles && handles.length > 0) {
        handles.forEach((item, i) => {
            if (!media?.[item]) return;

            const isMultiple = handles.length > 1;

            tmp.push(
                createPictureImage({
                    item: media[item],
                    media: i === 0 && isMultiple ? 992 : undefined,
                })
            );
        });
    }

    return tmp;
};
