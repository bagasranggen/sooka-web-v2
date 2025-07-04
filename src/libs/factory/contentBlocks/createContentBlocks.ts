import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '../../utils/joinArrayString';
import { createContentBlocksSpacing } from './createContentBlocksSpacing';

import { ContentBlocksProps } from '@/components/common/ContentBlocks';
// import { CONTENT_BLOCKS_DATA_HANDLES } from '@/components/common/ContentBlocks/handlesData';

export const createContentBlocks = (props: { items: ContentBlocksProps['items'] }) => {
    const content: any[] = [];

    if (props?.items && props.items.length > 0) {
        // await Promise.all(
        //     items.map(async (item, i: number) => {
        //         let tmp = {
        //             ...item,
        //             order: i,
        //             // locales: locales !== SITE_HANDLES.EN ? locales : LOCALES_HANDLES.EN,
        //         };
        //
        //         // if (page) tmp = { ...tmp, page };
        //
        //         // tmp = { ...tmp, ...createContentBlocksSettings(item) };
        //
        //         // if (CONTENT_BLOCKS_DATA_HANDLES?.[item?.blockType as keyof typeof CONTENT_BLOCKS_DATA_HANDLES]) {
        //         //     const data = await CONTENT_BLOCKS_DATA_HANDLES?.[item?.blockType as keyof typeof CONTENT_BLOCKS_DATA_HANDLES](tmp);
        //         //
        //         //     tmp = { ...tmp, ...data };
        //         // }
        //
        //         content.push(tmp);
        //     })
        // );

        props.items.forEach((item) => {
            let className: ArrayString = [];

            const { marginTop, marginBottom, ...props } = item;

            const spacing = createContentBlocksSpacing({ marginTop, marginBottom });

            if (spacing) className.push(spacing);

            className = joinArrayString(className);

            content.push({ ...props, className });
        });
    }

    return content;
};
