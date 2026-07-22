import { Component } from '@/libs/@types';

import Cart, { CartProps } from '@/components/common/Form/Cart';
import CartOrder, { CartOrderProps } from '@/components/common/Form/CartOrder';
import Confirmation, { ConfirmationProps } from '@/components/common/Form/Confirmation';
import Order, { OrderProps } from '@/components/common/Form/Order';
import Purchase, { PurchaseProps } from '@/components/common/Form/Purchase';

export type * from '@/components/common/Form/Cart';
export type * from '@/components/common/Form/CartOrder';
export type * from '@/components/common/Form/Confirmation';
export type * from '@/components/common/Form/Order';
export type * from '@/components/common/Form/Purchase';

type FormComposition = {
    Cart: Component<CartProps>;
    CartOrder: Component<CartOrderProps>;
    Confirmation: Component<ConfirmationProps>;
    Order: Component<OrderProps>;
    Purchase: Component<PurchaseProps>;
};

export default Object.assign<{}, FormComposition>({}, { Cart, CartOrder, Confirmation, Order, Purchase });
