import { Media } from '@/payload-types';
import { BareMediaProps } from '@/libs/@types';

export const checkMediaStatus = (props: {
    item: { src: BareMediaProps['src'] } & Omit<Media, 'url'>;
    handles: string[];
}): Record<string, BareMediaProps> => {
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
