import { ObjectProps, PropsClassname } from '@/libs/@types';

import { Media } from '@/payload-types';

import { BaseItemProps } from '@/components/common/Picture';

export type PictureItemProps = {
    filename?: string;
    mimeType?: 'image/jpeg' | 'image/png' | 'image/webp' | string;
} & BaseItemProps;

const INITIAL_STATE: BaseItemProps = {
    src: '',
    // srcRetina: '',
    width: 0,
    height: 0,
    alt: '',
};

export const createPictureImage = ({
    item,
    media,
    className,
    attribute,
}: { item: Media; media?: BaseItemProps['media']; attribute?: ObjectProps<string> } & PropsClassname) => {
    let pictureImage = INITIAL_STATE;

    if (item) {
        const { src, width, height, alt, filename, ...restImage } = item;
        pictureImage = {
            ...pictureImage,
            src,
            // srcRetina,
            width,
            height,
            alt: alt ?? filename,
            ...(restImage?.mimeType !== 'image/jpeg' ? { type: restImage.mimeType } : {}),
        };

        // console.log({ src, width });
        // console.log({ pictureImage });
    }

    if (media) {
        pictureImage = { ...pictureImage, media };
    }

    if (className) {
        let pictureClass = className;
        if (pictureImage.className) pictureClass = `${pictureImage.className} ${className}`;

        pictureImage = {
            ...pictureImage,
            className: pictureClass,
        };
    }

    if (attribute) {
        pictureImage = { ...pictureImage, ...attribute };
    }

    // console.log({ pictureImage });

    return pictureImage;
};
