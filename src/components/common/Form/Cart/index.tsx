import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import CartItem, { CartItemProps, CartItemFormFields } from '@/components/common/Form/Cart/CartItem';

export type CartProps = {
    items?: Omit<CartItemProps, 'className' | 'onSubmit' | 'onRemove'>[];
} & Pick<CartItemProps, 'onSubmit' | 'onRemove' | 'className'>;

const Cart = ({ className, items, onSubmit, onRemove }: CartProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    return (
        <>
            {items.map((item, i: number, array) => {
                let wrapperClass: ArrayStringProps = [];
                if (i !== 0) wrapperClass.push('mt-1 md:mt-3 pt-1 md:pt-3 border-t');
                // if (i === array.length - 1) formClass.push('pb-3 border-b');
                if (className) wrapperClass.push(className);
                wrapperClass = joinArrayString(wrapperClass);

                return (
                    <CartItem
                        key={item.cartItemId}
                        className={wrapperClass}
                        onSubmit={onSubmit}
                        onRemove={onRemove}
                        {...item}
                    />
                );
            })}
        </>
    );
};

export default Cart;

export type { CartItemFormFields };
