import { Component } from '@/libs/@types';

import Confirmation, { ConfirmationProps } from '@/components/common/Form/Confirmation';
import Order, { OrderProps } from '@/components/common/Form/Order';
import Purchase, { PurchaseProps } from '@/components/common/Form/Purchase';

export type * from '@/components/common/Form/Confirmation';
export type * from '@/components/common/Form/Order';
export type * from '@/components/common/Form/Purchase';

type FormComposition = {
    Confirmation: Component<ConfirmationProps>;
    Order: Component<OrderProps>;
    Purchase: Component<PurchaseProps>;
};

export default Object.assign<{}, FormComposition>({}, { Confirmation, Order, Purchase });
