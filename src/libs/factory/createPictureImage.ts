import { BareMediaProps, ObjectProps, ClassnameProps } from '@/libs/@types';

import { BaseItemProps } from '@/components/common/Picture';

const INITIAL_STATE: BaseItemProps = {
    src: '',
    // srcRetina: '',
    width: 0,
    height: 0,
    alt: '',
};

export type CreatePictureImageProps = {
    item: BareMediaProps;
    attribute?: ObjectProps<string>;
} & (Pick<BaseItemProps, 'media' | 'sizes' | 'loading'> & ClassnameProps);

export const createPictureImage = ({ item, media, sizes, className, attribute, loading }: CreatePictureImageProps) => {
    let pictureImage = INITIAL_STATE;

    if (item) {
        const { src, width, height, alt, filename } = item;

        pictureImage = {
            ...pictureImage,
            src,
            // srcRetina,
            width: width as any,
            height: height as any,
            alt: alt ?? filename,
            // ...(restImage?.mimeType !== 'image/jpeg' ? { type: restImage.mimeType } : {}),
        };
    }

    if (media) {
        pictureImage = Object.assign(pictureImage, { media });
    }

    if (className) {
        let pictureClass = className;
        if (pictureImage.className) pictureClass = `${pictureImage.className} ${className}`;

        pictureImage = Object.assign(pictureImage, { className: pictureClass });
    }

    if (attribute) {
        pictureImage = Object.assign(pictureImage, attribute);
    }

    if (sizes) {
        pictureImage = Object.assign(pictureImage, { sizes });
    }

    if (loading) {
        pictureImage = Object.assign(pictureImage, { loading });
    }

    // console.log({ pictureImage });

    return pictureImage;
};
