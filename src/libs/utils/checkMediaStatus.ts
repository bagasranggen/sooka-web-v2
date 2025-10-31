import { BareMediaProps, MediaGlobal } from '@/libs/@types';

export type CheckMediaStatusProps = {
    item: Omit<MediaGlobal, 'url'> & Pick<BareMediaProps, 'src'>;
    handles: string[];
};

export const checkMediaStatus = (props: CheckMediaStatusProps): Record<string, BareMediaProps> => {
    const item: Record<string, BareMediaProps> = {};

    if (props?.item) {
        const { src, width, height, alt, filename } = props.item;

        item.original = { src, width, height, alt, filename };
    }

    props.handles.forEach((handle) => {
        const media = (props?.item?.sizes as any)?.[handle];

        if (media?.src) {
            item[handle] = {
                ...media,
                alt: props?.item?.alt ?? props?.item?.filename ?? '',
            };
        }
    });

    return item;
};
