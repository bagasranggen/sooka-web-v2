import React from 'react';

import Picture, { BaseProps } from '@/components/common/Picture';

export type ImageDividerProps = {
    media: BaseProps['items'];
};

const ImageDivider = ({ media }: ImageDividerProps): React.ReactElement => {
    return (
        <Picture
            className="md:ms-auto block md:w-[88vw] lg:w-[80vw]"
            items={media}
        />
    );
};

export default ImageDivider;
