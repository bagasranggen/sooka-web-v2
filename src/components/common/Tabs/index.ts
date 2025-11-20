import { Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Tabs/Base';
import Tab, { TabProps } from '@/components/common/Tabs/Tab';

export type * from '@/components/common/Tabs/Base';
export type * from '@/components/common/Tabs/Tab';

type TabsComposition = {
    Tab: Component<TabProps>;
};

export default Object.assign<Component<BaseProps>, TabsComposition>(Base, { Tab });
