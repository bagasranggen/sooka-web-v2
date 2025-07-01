import { BareMediaProps, ObjectProps, PropsClassname } from '@/libs/@types';

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
}: { item: BareMediaProps; media?: BaseItemProps['media']; attribute?: ObjectProps<string> } & PropsClassname) => {
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
