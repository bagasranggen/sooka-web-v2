import { Component } from '@/libs/@types';

import Cart, { CartProps } from '@/components/common/Form/Cart';
import Confirmation, { ConfirmationProps } from '@/components/common/Form/Confirmation';
import Order, { OrderProps } from '@/components/common/Form/Order';
import Purchase, { PurchaseProps } from '@/components/common/Form/Purchase';

export type * from '@/components/common/Form/Cart';
export type * from '@/components/common/Form/Confirmation';
export type * from '@/components/common/Form/Order';
export type * from '@/components/common/Form/Purchase';

type FormComposition = {
    Cart: Component<CartProps>;
    Confirmation: Component<ConfirmationProps>;
    Order: Component<OrderProps>;
    Purchase: Component<PurchaseProps>;
};

export default Object.assign<{}, FormComposition>({}, { Cart, Confirmation, Order, Purchase });
