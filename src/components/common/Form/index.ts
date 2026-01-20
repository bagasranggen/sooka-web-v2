import { Component } from '@/libs/@types';

import Confirmation, { ConfirmationProps } from '@/components/common/Form/Confirmation';
import Order, { OrderProps } from '@/components/common/Form/Order';

export type * from '@/components/common/Form/Order';

type FormComposition = {
    Confirmation: Component<ConfirmationProps>;
    Order: Component<OrderProps>;
};

export default Object.assign<{}, FormComposition>({}, { Confirmation, Order });
