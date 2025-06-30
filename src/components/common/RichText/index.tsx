import React, { ExoticComponent, FragmentProps } from 'react';

import { RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react';
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';

import { ElementTagsProps } from '@/libs/@types';

export type RichTextProps = {
    children?: SerializedEditorState;
} & React.HTMLAttributes<HTMLDivElement>;

const RichText = ({ children, ...props }: RichTextProps): React.ReactElement | null => {
    let Wrapper: ExoticComponent<FragmentProps> | ElementTagsProps = React.Fragment;
    if (props) Wrapper = 'div';

    if (!children) return null;

    return (
        <Wrapper {...(props ? props : {})}>
            <RichTextConverter data={children} />
        </Wrapper>
    );
};

export default RichText;
