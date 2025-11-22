import { Component, RefComponent } from '@/libs/@types';

import Base, { BaseProps, BaseRefProps } from '@/components/common/Button/Base';
import Arrow, { ArrowProps } from '@/components/common/Button/Arrow';
import Container, { ContainerProps } from '@/components/common/Button/Container';

export type * from '@/components/common/Button/Base';
export type * from '@/components/common/Button/Arrow';
export type * from '@/components/common/Button/Container';

type ButtonComposition = {
    Arrow: Component<ArrowProps>;
    Container: Component<ContainerProps>;
};

export default Object.assign<RefComponent<BaseProps, BaseRefProps>, ButtonComposition>(Base, { Arrow, Container });
