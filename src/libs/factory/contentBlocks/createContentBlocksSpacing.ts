import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '../../utils/joinArrayString';
import { checkStringIsNumber } from '../../utils/checkStringIsNumber';

import { ContentBlocksItemProps } from '@/components/common/ContentBlocks';

export const createContentBlocksSpacing = (props: Pick<ContentBlocksItemProps, 'marginTop' | 'marginBottom'>) => {
    const spacingLimit = 5;
    let className: ArrayString = [];

    const spacingProcessing = (str: string, handle: string, limit: number) => {
        const tmp: string[] = [];

        let value: string | number = str.replace('_', '');
        if (checkStringIsNumber(value)) value = parseInt(value);

        if (typeof value === 'number' && value > limit) {
            tmp.push(`${handle}-${limit}`);
            tmp.push(`md:${handle}-${value}`);
        }

        if (typeof value === 'number' && value < limit) {
            tmp.push(`${handle}-${value}`);
        }

        return tmp.length > 0 ? tmp : undefined;
    };

    if (props?.marginTop) {
        const spacing = spacingProcessing(props.marginTop, 'mt', spacingLimit);

        if (spacing) className.push(...spacing);
    }

    if (props?.marginBottom) {
        const spacing = spacingProcessing(props.marginBottom, 'mb', spacingLimit);

        if (spacing) className.push(...spacing);
    }

    className = joinArrayString(className);

    return className ?? undefined;
};
