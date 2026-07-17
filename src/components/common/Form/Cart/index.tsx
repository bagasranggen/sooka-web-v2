import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import CartItem, { CartItemProps } from '@/components/common/Form/Cart/CartItem';

export type CartProps = {
    items?: Omit<CartItemProps, 'className' | 'onSubmit'>[];
} & Pick<CartItemProps, 'onSubmit'>;

const Cart = ({ items, onSubmit }: CartProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    return (
        <>
            {items.map((item, i: number, array) => {
                let wrapperClass: ArrayStringProps = [];
                if (i !== 0) wrapperClass.push('mt-3 pt-3 border-t');
                // if (i === array.length - 1) formClass.push('pb-3 border-b');
                wrapperClass = joinArrayString(wrapperClass);

                return (
                    <CartItem
                        key={i}
                        className={wrapperClass}
                        onSubmit={onSubmit}
                        {...item}
                    />
                );
            })}
        </>
    );
};

export default Cart;
