import { Component } from '@/libs/@types';

import HalfMedia, { HalfMediaProps } from '@/components/common/Banner/HalfMedia';
import Media, { MediaProps } from '@/components/common/Banner/Media';

export type * from '@/components/common/Banner/HalfMedia';
export type * from '@/components/common/Banner/Media';

type BannerComposition = {
    HalfMedia: Component<HalfMediaProps>;
    Media: Component<MediaProps>;
};

export default Object.assign<{}, BannerComposition>({}, { HalfMedia, Media });
