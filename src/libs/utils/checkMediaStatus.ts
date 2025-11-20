import { BareMediaProps, MediaGlobal } from '@/libs/@types';

export type CheckMediaStatusProps = {
    item: Omit<MediaGlobal, 'url'> & Pick<BareMediaProps, 'src'>;
    handles: string[];
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
        const { src, width, height, alt, filename } = props.item;

        data = Object.assign(
            data ?? {
                src,
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
        });

        const hasMobileItem = Object.keys(mobileItem ?? {}).length > 0;

        if (hasMobileItem) data = Object.assign(data ?? {}, { mobileAssets: mobileItem });
    }

    return {
        data,
        hasMobile: !!mobileAsset,
    };
};
