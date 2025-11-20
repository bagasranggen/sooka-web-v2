import { ObjectProps } from '@/libs/@types';

type RowWrapProps = {
    cond?: boolean | ObjectProps<boolean>;
    className?: Record<'true' | 'false', string>;
};

export const getRowWrap = ({ cond, className = { true: 'flex-wrap', false: 'flex-nowrap' } }: RowWrapProps) => {
    const tmp: string[] = [];

    if (typeof cond === 'boolean') {
        tmp.push(className[cond as unknown as 'true' | 'false']);
    }

    if (typeof cond === 'object') {
        Object.entries(cond).forEach(([key, value]) => {
            const bp = key !== 'xs' ? `${key}:` : '';

            tmp.push(`${bp}${className[value as unknown as 'true' | 'false']}`);
        });
    }

    return tmp;
};
