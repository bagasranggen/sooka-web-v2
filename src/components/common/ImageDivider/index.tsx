import React from 'react';

import { ArrayString, ElementTagsProps, PropsClassname } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Picture, { BaseProps } from '@/components/common/Picture';

export type ImageDividerProps = {
    as?: Extract<ElementTagsProps, 'section' | 'div'>;
    media: BaseProps['items'];
} & PropsClassname;

const ImageDivider = ({ as: Container = 'section', className, media }: ImageDividerProps): React.ReactElement => {
    let containerClass: ArrayString = [];
    if (className) containerClass.push(className);
    containerClass = joinArrayString(containerClass);

    return (
        <Container {...(containerClass ? { className: containerClass } : {})}>
            <Picture
                className="md:ms-auto block md:w-[88vw] lg:w-[80vw]"
                items={media}
            />
        </Container>
    );
};

export default ImageDivider;
