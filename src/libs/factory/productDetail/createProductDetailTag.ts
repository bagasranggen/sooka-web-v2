import { Product } from '@/libs/@types';
import { ThumbnailItemProps } from '@/components/common/Card';

export type CreateProductDetailTagProps = {
    item: Pick<Product, 'availability' | 'unavailableLabel' | 'unavailableCustomLabel'>;
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

    if (!isUnavailable) {
        data = {
            children: 'test',
            // position: 'top-right',
        };
    }

    return data;
};
