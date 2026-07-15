import { Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Modal/Base';
import Purchase, { PurchaseProps } from '@/components/common/Modal/Purchase';

export type * from '@/components/common/Modal/Base';
export type * from '@/components/common/Modal/Purchase';

type ModalComposition = {
    Purchase: Component<PurchaseProps>;
};

export default Object.assign<Component<BaseProps>, ModalComposition>(Base, { Purchase });
