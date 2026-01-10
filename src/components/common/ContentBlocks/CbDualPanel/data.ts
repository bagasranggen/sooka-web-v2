import { checkMediaStatus } from '../../../../libs/utils/checkMediaStatus';
import { joinArrayString } from '../../../../libs/utils/joinArrayString';
import { createPictureImage } from '../../../../libs/factory/createPictureImage';

import { CbDualPanelProps } from '@/components/common/ContentBlocks/CbDualPanel';
import { ColumnProps } from '@/components/common/Columns';

const COLUMN_WIDTH_HANDLES: Record<string, ColumnProps['width'][]> = {
    '2_3': [{ lg: 4 }, { lg: 8 }],
    '3_2': [{ lg: 7 }, { lg: 5 }],
    '1_1': [{ md: 6 }, { md: 6 }],
};

export const CbDualPanelData = (props?: any): Pick<CbDualPanelProps, 'items'> => {
    let layout = props?.layout ?? '_2_3';
    layout = layout.replace('_', '');

    const columWidth = COLUMN_WIDTH_HANDLES[layout];

    const hasContents = props?.contents && props.contents.length > 0;

    let isMediaLast = false;
    if (hasContents) {
        props.contents.forEach((item: any, i: number, arr: any[]) => {
            if (item?.type === 'media' && i === arr.length - 1) isMediaLast = true;
        });
    }

    let columnClass: undefined | string[] = undefined;
    if (isMediaLast) {
        columnClass = ['order-1 lg:order-0', 'order-0 lg:order-1'];
    }

    const items: CbDualPanelProps['items'] = [];
    if (hasContents) {
        props.contents.forEach((item: any, i: number) => {
            const type = item?.type;

            let tmp: any = undefined;

            if (columWidth?.[i]) tmp = Object.assign(tmp ?? {}, { width: columWidth[i] });
            if (type) tmp = Object.assign(tmp ?? {}, { type });

            if (type === 'text' && item?.description) {
                tmp = Object.assign(tmp ?? {}, { children: item.description });
            }

            if (columnClass && columnClass) {
                tmp = Object.assign(tmp ?? {}, { columnClassName: joinArrayString([columnClass[i]]) });
            }

            if (type === 'media' && item?.media) {
                const { data: media } = checkMediaStatus({
                    item: item?.media,
                    handles: ['media950x594', 'media950x975', 'mediaSquare', 'media4x3'],
                });

                const tmpMedia = [];

                if (layout === '2_3' && media?.['media950x594']) {
                    tmpMedia.push(createPictureImage({ item: media?.['media950x594'], media: 992 }));
                }

                if (layout === '3_2' && media?.['media950x975']) {
                    tmpMedia.push(createPictureImage({ item: media?.['media950x975'], media: 992 }));
                }

                if (layout === '1_1' && media?.['mediaSquare']) {
                    tmpMedia.push(createPictureImage({ item: media?.['mediaSquare'], media: 992 }));
                }

                if (media?.['media4x3'] && tmpMedia.length > 0) {
                    tmpMedia.push(createPictureImage({ item: media?.['media4x3'] }));
                }

                if (tmpMedia.length > 0) tmp = Object.assign(tmp ?? {}, { media: tmpMedia });
            }

            if (tmp) items.push(tmp);
        });
    }

    return { items };
};
