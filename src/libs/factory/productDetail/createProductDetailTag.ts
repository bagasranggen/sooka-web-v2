import { Product } from '@/libs/@types';

export const createProductDetailTag = ({
    item,
}: {
    item: Pick<Product, 'availability' | 'unavailableLabel' | 'unavailableCustomLabel'>;
}) => {
    let data = undefined;

    if (item?.availability === 'unavailable') {
        if (item?.unavailableCustomLabel) data = item?.unavailableCustomLabel;

        if (item?.unavailableLabel && typeof item?.unavailableLabel !== 'number') {
            data = item?.unavailableLabel?.title;
        }
    }

    return data;
};
