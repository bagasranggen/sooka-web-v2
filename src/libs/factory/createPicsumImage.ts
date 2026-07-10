import { ClassnameProps } from '@/libs/@types';

export const createPicsumImage = ({
    id = 237,
    width = 400,
    height = 619,
    media,
    alt,
    className,
}: { alt?: string; media?: number } & Partial<Record<'id' | 'width' | 'height', number>> & ClassnameProps) => {
    return {
        src: `https://picsum.photos/id/${id}/${width}/${height}`,
        width,
        height,
        alt: alt ?? `image ${id}`,
        media: media ?? undefined,
        className,
    };
};
