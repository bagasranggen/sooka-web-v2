import { Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Modal/Base';
import Cart, { CartProps } from '@/components/common/Modal/Cart';
import Purchase, { PurchaseProps } from '@/components/common/Modal/Purchase';
import ModalSheet, { ModalSheetProps } from '@/components/common/Modal/ModalSheet';

export type * from '@/components/common/Modal/Base';
export type * from '@/components/common/Modal/Cart';
export type * from '@/components/common/Modal/Purchase';
export type * from '@/components/common/Modal/ModalSheet';

type ModalComposition = {
    Cart: Component<CartProps>;
    Purchase: Component<PurchaseProps>;
    ModalSheet: Component<ModalSheetProps>;
};

export default Object.assign<Component<BaseProps>, ModalComposition>(Base, { Cart, Purchase, ModalSheet });
