import { ObjectProps } from '@/libs/@types';

export type ColumnWidthValue = number | 'auto';

export type ColumnWidthProps = {
    width?: ColumnWidthValue | ObjectProps<ColumnWidthValue>;
    className?: string;
    division?: 12 | 100;
    isNegative?: boolean;
    isDirectChildren?: boolean;
};

export const getColumnWidth = ({
    width,
    className = 'w',
    division = 12,
    isNegative = false,
    isDirectChildren = false,
}: ColumnWidthProps) => {
    const tmp: string[] = [];
    const dir = isNegative ? '-' : '';
    const direct = isDirectChildren ? '*:' : '';

    if (typeof width === 'number') {
        tmp.push(`${direct}${dir}${className}-${width}/${division}`);
        if (width > 0) tmp.push('!flex-grow-0 !flex-shrink-0 !basis-auto');
    }

    if (typeof width === 'string' && width === 'auto') {
        tmp.push(`${direct}${dir}${className}-${width}`);
        tmp.push('!flex-grow-0 !flex-shrink-0 !basis-auto');
    }

    if (typeof width === 'object') {
        Object.entries(width).forEach(([key, value]) => {
            const bp = key !== 'xs' ? `${key}:` : '';

            if (typeof value === 'number') {
                tmp.push(`${direct}${bp}${className}-${value}/${division}`);
                if (value > 0) tmp.push('!flex-grow-0 !flex-shrink-0 !basis-auto');
            }

            if (typeof value === 'string' && value === 'auto') {
                tmp.push(`${direct}${bp}${className}-${value}`);
            }
        });
    }

    return tmp;
};
