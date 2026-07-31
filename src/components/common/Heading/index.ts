import { Component, RefComponent } from '@/libs/@types';

import Base, { BaseHeadingRef, BaseProps } from '@/components/common/Heading/Base';
import Number, { NumberProps } from '@/components/common/Heading/Number';

export type * from '@/components/common/Heading/Base';
export type * from '@/components/common/Heading/Number';

type HeadingComposition = {
    Number: Component<NumberProps>;
};

export default Object.assign<RefComponent<BaseProps, BaseHeadingRef>, HeadingComposition>(Base, { Number });
