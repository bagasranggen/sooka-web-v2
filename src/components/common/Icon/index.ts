import { Component } from '@/libs/@types';

import Arrow, { ArrowProps } from '@/components/common/Icon/Arrow';
import Check, { CheckProps } from '@/components/common/Icon/Check';
import CircleArrow, { CircleArrowProps } from '@/components/common/Icon/CircleArrow';
import Quote, { QuoteProps } from '@/components/common/Icon/Quote';
import Sooka, { SookaProps } from '@/components/common/Icon/Sooka';

export type * from '@/components/common/Icon/Arrow';
export type * from '@/components/common/Icon/CircleArrow';
export type * from '@/components/common/Icon/Quote';
export type * from '@/components/common/Icon/Sooka';

type IconComposition = {
    Arrow: Component<ArrowProps>;
    Check: Component<CheckProps>;
    CircleArrow: Component<CircleArrowProps>;
    Quote: Component<QuoteProps>;
    Sooka: Component<SookaProps>;
};

export default Object.assign<{}, IconComposition>({}, { Arrow, Check, CircleArrow, Quote, Sooka });
