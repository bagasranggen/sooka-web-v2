import { VOLUME_ASSET_HANDLES } from '@/libs/constants';
import { BareMediaProps, MediaGlobal } from '@/libs/@types';

export type CreateAssetsVolumeSourceProps = {
    item: Omit<MediaGlobal, 'url'> & Pick<BareMediaProps, 'src'>;
    volumeAsset?: (typeof VOLUME_ASSET_HANDLES)[keyof typeof VOLUME_ASSET_HANDLES];
};

export const createAssetsVolumeSource = ({ item, volumeAsset }: CreateAssetsVolumeSourceProps) => {
    let data = item;

    if (volumeAsset) {
    }

    return data;
};
