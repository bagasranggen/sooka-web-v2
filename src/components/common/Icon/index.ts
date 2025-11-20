import { Component } from '@/libs/@types';

import Arrow, { ArrowProps } from '@/components/common/Icon/Arrow';
import Cake, { CakeProps } from '@/components/common/Icon/Cake';
import Check, { CheckProps } from '@/components/common/Icon/Check';
import CircleArrow, { CircleArrowProps } from '@/components/common/Icon/CircleArrow';
import Quote, { QuoteProps } from '@/components/common/Icon/Quote';
import Sooka, { SookaProps } from '@/components/common/Icon/Sooka';
import Toggle, { ToggleProps } from '@/components/common/Icon/Toggle';

export type * from '@/components/common/Icon/Arrow';
export type * from '@/components/common/Icon/CircleArrow';
export type * from '@/components/common/Icon/Quote';
export type * from '@/components/common/Icon/Sooka';
export type * from '@/components/common/Icon/Toggle';

type IconComposition = {
    Arrow: Component<ArrowProps>;
    Cake: Component<CakeProps>;
    Check: Component<CheckProps>;
    CircleArrow: Component<CircleArrowProps>;
    Quote: Component<QuoteProps>;
    Sooka: Component<SookaProps>;
    Toggle: Component<ToggleProps>;
};

export default Object.assign<{}, IconComposition>({}, { Arrow, Cake, Check, CircleArrow, Quote, Sooka, Toggle });
