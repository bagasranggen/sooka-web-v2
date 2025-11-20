import React from 'react';

import { TypesProps } from '@/libs/@types';

import Picture, { BaseProps } from '@/components/common/Picture';
import RichText, { RichTextProps } from '@/components/common/RichText';

export type CbDualPanelContentMediaProps = {
    media?: BaseProps['items'];
};

export type CbDualPanelContentTextProps = Pick<RichTextProps, 'children'>;

export type CbDualPanelContentProps =
    | TypesProps<'media', CbDualPanelContentMediaProps>
    | TypesProps<'text', CbDualPanelContentTextProps>;

const CbDualPanelContent = ({ type, ...props }: CbDualPanelContentProps): React.ReactElement | null => {
    if (type === 'media' && 'media' in props && props?.media) {
        return <Picture items={props.media} />;
    }

    if (type === 'text' && 'children' in props) {
        return <RichText className="cb-text">{props.children}</RichText>;
    }

    return null;
};

export default CbDualPanelContent;
