import { Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Modal/Base';
import Purchase, { PurchaseProps } from '@/components/common/Modal/Purchase';
import ModalSheet, { ModalSheetProps } from '@/components/common/Modal/ModalSheet';

export type * from '@/components/common/Modal/Base';
export type * from '@/components/common/Modal/Purchase';

type ModalComposition = {
    Purchase: Component<PurchaseProps>;
    ModalSheet: Component<ModalSheetProps>;
};

export default Object.assign<Component<BaseProps>, ModalComposition>(Base, { Purchase, ModalSheet });
