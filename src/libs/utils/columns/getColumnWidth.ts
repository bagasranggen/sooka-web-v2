import { ObjectProps } from '@/libs/@types';

export type ColumnWidthProps = {
    width?: number | ObjectProps<number>;
    className?: string;
    division?: 12 | 100;
    isDirectChildren?: boolean;
};

export const getColumnWidth = ({
    width,
    className = 'w',
    division = 12,
    isDirectChildren = false,
}: ColumnWidthProps) => {
    const tmp: string[] = [];
    const direct = isDirectChildren ? '*:' : '';

    if (typeof width === 'number') {
        tmp.push(`${direct}${className}-${width}/${division}`);
    }

    if (typeof width === 'object') {
        Object.entries(width).forEach(([key, value]) => {
            const bp = key !== 'xs' ? `${key}:` : '';

            tmp.push(`${direct}${bp}${className}-${value}/${division}`);
        });
    }

    return tmp;
};
