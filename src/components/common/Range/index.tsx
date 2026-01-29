import React from 'react';

import { ArrayStringProps, CreateArrayWithLengthX, NumericRange, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type RangeProps = {
    start: string;
    end: string;
    value?: NumericRange<CreateArrayWithLengthX<0>, 100>;
} & ClassnameProps;

const Range = ({ className, value, start, end }: RangeProps): React.ReactElement | null => {
    if (!start || !value) return null;

    let style: undefined | React.CSSProperties = undefined;
    if (value && value > 0) {
        style = Object.assign(style ?? {}, { '--range-active-width': `${value}%` } as React.CSSProperties);
    }

    let rangeClass: ArrayStringProps = ['flex items-center gap-1.5'];
    if (className) rangeClass.push(className);
    rangeClass = joinArrayString(rangeClass);

    let rangeBarClass: ArrayStringProps = [];
    rangeBarClass.push('relative h-1 grow max-w-[60%]');
    rangeBarClass.push("before:content-[''] before:absolute before:h-full before:w-full before:bg-sooka-primary/15");
    rangeBarClass.push(
        "after:content-[''] after:absolute after:h-full after:w-(--range-active-width) after:bg-sooka-primary"
    );
    rangeBarClass = joinArrayString(rangeBarClass);

    const baseRangeTextClass = [];
    baseRangeTextClass.push('basis-[32%] lg:basis-[29%] xl:basis-[20%]');
    baseRangeTextClass.push('text-[1.4rem] leading-[1.4rem] uppercase font-black tracking-[.35rem]');

    return (
        <div
            style={style}
            className={rangeClass}>
            <p className={joinArrayString([...baseRangeTextClass, 'mb-0!'])}>{start}</p>
            <div className={rangeBarClass} />
            <p className={joinArrayString([...baseRangeTextClass, 'text-end'])}>{end}</p>
        </div>
    );
};

export default Range;
