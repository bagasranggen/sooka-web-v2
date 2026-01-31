import { getImageProps } from 'next/image';

import { createPictureImage, CreatePictureImageProps } from './createPictureImage';

export type CreateBackgroundImage = Partial<Pick<CreatePictureImageProps, 'item'>>;

export const createBackgroundImage = ({ item }: CreateBackgroundImage) => {
    let data: string | undefined = undefined;

    if (item) {
        const image = createPictureImage({ item });
        if (image) {
            const {
                props: { srcSet },
            } = getImageProps({
                alt: image?.alt,
                width: image?.width,
                height: image?.height,
                src: image?.src,
            });

            if (srcSet) {
                const imageSet = srcSet
                    .split(', ')
                    .map((str) => {
                        const [url, dpi] = str.split(' ');
                        return `url("${url}") ${dpi}`;
                    })
                    .join(', ');

                data = `image-set(${imageSet})`;
            }
        }
    }

    return data;
};
