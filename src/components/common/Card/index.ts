import { Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Card/Base';
import Thumbnail, { ThumbnailProps } from '@/components/common/Card/Thumbnail';

export type * from '@/components/common/Card/Base';
export type * from '@/components/common/Card/Thumbnail';

type CardComposition = {
    Thumbnail: Component<ThumbnailProps>;
};

export default Object.assign<Component<BaseProps>, CardComposition>(Base, { Thumbnail });
