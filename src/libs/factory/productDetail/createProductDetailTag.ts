import { Product } from '@/libs/@types';
import parse from 'html-react-parser';
import { ThumbnailItemProps, ThumbnailLabelWithPositionProps } from '@/components/common/Card';

export type CreateProductDetailTagProps = {
    item: Pick<Product, 'availability' | 'unavailableLabel' | 'unavailableCustomLabel' | 'badge'>;
};

export const createProductDetailTag = ({ item }: CreateProductDetailTagProps) => {
    let data: undefined | ThumbnailItemProps['label'] = undefined;

    const isUnavailable = item?.availability === 'unavailable';

    if (isUnavailable) {
        if (item?.unavailableCustomLabel) data = item?.unavailableCustomLabel;

        if (item?.unavailableLabel && typeof item?.unavailableLabel !== 'number') {
            data = item?.unavailableLabel?.title;
        }
    }

    if (!isUnavailable && item?.badge) {
        let children: any = undefined;

        if (typeof item.badge === 'object') {
            let tmpChildren: any = item.badge.title;

            if (item?.badge?.badgeTitle) {
                tmpChildren = parse(item.badge.badgeTitle.replace(/\n/g, '<br />'));
            }

            children = tmpChildren;
        }

        data = Object.assign(data ?? {}, {
            children,
            position: 'top-right',
        } as ThumbnailLabelWithPositionProps);
    }

    return data;
};
