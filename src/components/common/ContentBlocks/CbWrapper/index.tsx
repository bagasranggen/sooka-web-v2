import React from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { ContentBlocksItemProps } from '@/components/common/ContentBlocks';
import Animation from '@/components/Animation';

export type CbWrapperProps = {
    children: React.ReactElement;
    ref?: React.Ref<HTMLDivElement> | undefined;
} & Pick<ContentBlocksItemProps, 'className'>;

const CbWrapper = ({ children, ref, className }: CbWrapperProps): React.ReactElement => {
    let wrapperClass: ArrayString = [];
    if (
        children?.props &&
        typeof children?.props === 'object' &&
        'className' in children?.props &&
        children?.props?.className
    ) {
        wrapperClass.push(children.props.className as string);
    }
    if (className) wrapperClass.push(className);
    wrapperClass = joinArrayString(wrapperClass);

    const props = {
        ...(ref ? { ref: ref } : {}),
        ...(wrapperClass ? { className: wrapperClass } : {}),
        // ...(id ? { id: id } : {}),
    };

    return (
        <Animation type="fade-in">
            <>{React.cloneElement(children, props)}</>
        </Animation>
    );
};

export default CbWrapper;
