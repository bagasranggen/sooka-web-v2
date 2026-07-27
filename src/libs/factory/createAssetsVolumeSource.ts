import { BareMediaProps, MediaGlobal } from '@/libs/@types';
import { VOLUME_ASSET_HANDLES } from '@/libs/constants';

export type CreateAssetsVolumeSourceProps = {
    item?: Omit<MediaGlobal, 'url'> & Pick<BareMediaProps, 'src'>;
    volumeAssets?: (typeof VOLUME_ASSET_HANDLES)[keyof typeof VOLUME_ASSET_HANDLES];
};

export const createAssetsVolumeSource = ({ item, volumeAssets }: CreateAssetsVolumeSourceProps) => {
    let data = '';

    if (item?.src && !volumeAssets) data = item.src;

    if (item?.filename && volumeAssets) data = `/api/media/${item.filename}?volumeAsset=${volumeAssets}`;

    return data;
};
