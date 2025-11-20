import { Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Button/Base';
import Arrow, { ArrowProps } from '@/components/common/Button/Arrow';
import Container, { ContainerProps } from '@/components/common/Button/Container';

export type * from '@/components/common/Button/Base';
export type * from '@/components/common/Button/Arrow';
export type * from '@/components/common/Button/Container';

type ButtonComposition = {
    Arrow: Component<ArrowProps>;
    Container: Component<ContainerProps>;
};

export default Object.assign<Component<BaseProps>, ButtonComposition>(Base, { Arrow, Container });
