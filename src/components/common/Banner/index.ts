import { Component } from '@/libs/@types';

import HalfMedia, { HalfMediaProps } from '@/components/common/Banner/HalfMedia';

export type * from '@/components/common/Banner/HalfMedia';

type BannerComposition = {
    HalfMedia: Component<HalfMediaProps>;
};

export default Object.assign<{}, BannerComposition>({}, { HalfMedia });
