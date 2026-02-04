import { Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Marquee/Base';
import Picture, { PictureProps } from '@/components/common/Marquee/Picture';

export type * from '@/components/common/Marquee/Base';
export type * from '@/components/common/Marquee/Picture';

type ButtonComposition = {
    Picture: Component<PictureProps>;
};

export default Object.assign<Component<BaseProps>, ButtonComposition>(Base, { Picture });
