import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '../../utils/joinArrayString';
import { createContentBlocksSpacing } from './createContentBlocksSpacing';

import { CONTENT_BLOCKS_DATA_HANDLES } from '../../../components/common/ContentBlocks/handlesData';

export const createContentBlocks = (props: { items: any }) => {
    const content: any[] = [];

    if (props?.items && props.items.length > 0) {
        props.items.forEach((item: any) => {
            const { cbSpacing, ...props } = item;

            const spacing = createContentBlocksSpacing(cbSpacing);

            let className: ArrayString = [];
            if (spacing) className.push(spacing);
            className = joinArrayString(className);

            let tmp: any = {
                ...props,
                className,
            };

            const dataProcess =
                item?.blockType &&
                CONTENT_BLOCKS_DATA_HANDLES?.[item?.blockType as keyof typeof CONTENT_BLOCKS_DATA_HANDLES];

            if (dataProcess) {
                const data = dataProcess(tmp);

                tmp = { ...tmp, ...(data as any) };
            }

            content.push(tmp);
        });
    }

    return content;
};
