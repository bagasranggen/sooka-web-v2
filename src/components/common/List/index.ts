import { Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/List/Base';
import Number, { NumberProps } from '@/components/common/List/Number';

export type * from '@/components/common/List/Base';
export type * from '@/components/common/List/Number';

type ListComposition = {
    Number: Component<NumberProps>;
};

export default Object.assign<Component<BaseProps>, ListComposition>(Base, { Number });
