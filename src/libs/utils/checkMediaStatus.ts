import { VOLUME_ASSET_HANDLES } from '@/libs/constants';
import { BareMediaProps, MediaGlobal } from '@/libs/@types';
import { createAssetsVolumeSource } from '@/libs/factory/createAssetsVolumeSource';

export type CheckMediaStatusProps = {
    item: Omit<MediaGlobal, 'url'> & Pick<BareMediaProps, 'src'>;
    handles: string[];
    volumeAssets?: (typeof VOLUME_ASSET_HANDLES)[keyof typeof VOLUME_ASSET_HANDLES];
};

export const checkMediaStatus = (
    props: CheckMediaStatusProps
): {
    data: (Partial<{ mobileAssets: Record<string, BareMediaProps> }> & Record<string, BareMediaProps>) | null;
    hasMobile: boolean;
} => {
    let data: (Partial<{ mobileAssets: Record<string, BareMediaProps> }> & Record<string, BareMediaProps>) | null =
        null;

    if (props?.item) {
        const { width, height, alt, filename } = props.item;

        data = Object.assign(
            data ?? {
                src: createAssetsVolumeSource({ item: props?.item, volumeAssets: props?.volumeAssets }),
                width,
                height,
                alt,
                filename,
            }
        );
    }

    props.handles.forEach((handle) => {
        const media = (props?.item?.sizes as any)?.[handle];

        if (media?.src) {
            data = Object.assign(data ?? {}, {
                [handle]: {
                    ...media,
                    src: createAssetsVolumeSource({
                        item: media,
                        volumeAssets: props?.volumeAssets,
                    }),
                    alt: props?.item?.alt ?? props?.item?.filename ?? '',
                },
            });
        }
    });

    const mobileAsset = props?.item?.mobileAssets;

    if (mobileAsset) {
        const { data: mobileItem } = checkMediaStatus({
            item: mobileAsset as CheckMediaStatusProps['item'],
            handles: props?.handles ?? [],
            volumeAssets: props?.volumeAssets,
        });

        const hasMobileItem = Object.keys(mobileItem ?? {}).length > 0;

        if (hasMobileItem && mobileItem)
            data = Object.assign(data ?? {}, {
                mobileAssets: {
                    ...mobileItem,
                    src: createAssetsVolumeSource({ item: mobileItem as any, volumeAssets: props?.volumeAssets }),
                },
            });
    }

    return {
        data,
        hasMobile: !!mobileAsset,
    };
};
