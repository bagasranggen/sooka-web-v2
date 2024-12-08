import { Component } from '@/libs/@types';

import Sooka, { SookaProps } from '@/components/common/Icon/Sooka';

type IconComposition = {
    Sooka: Component<SookaProps>;
};

export default Object.assign<{}, IconComposition>({}, { Sooka });
