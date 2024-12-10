import { Component } from '@/libs/@types';

import Arrow, { ArrowProps } from '@/components/common/Icon/Arrow';
import Sooka, { SookaProps } from '@/components/common/Icon/Sooka';

export type * from '@/components/common/Icon/Arrow';
export type * from '@/components/common/Icon/Sooka';

type IconComposition = {
    Arrow: Component<ArrowProps>;
    Sooka: Component<SookaProps>;
};

export default Object.assign<{}, IconComposition>({}, { Arrow, Sooka });
