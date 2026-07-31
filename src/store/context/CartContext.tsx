'use client';

import React, { createContext, PropsWithChildren, Suspense, useMemo, useState } from 'react';

import { ParametersProps } from '@/libs/@types';
import {
    checkStringIsNumber,
    convertIntToCurrency,
    convertIntToMilliseconds,
    getLocalStorage,
    setLocalStorage,
} from '@/libs/utils';
import { NavigationEvents } from '@/libs/hooks';
import { useHistoryStateContext } from '@/store/context';

import parse from 'html-react-parser';

import { CartProps } from '@/components/common/Modal';
import { PurchaseFormFields, CartItemFormFields } from '@/components/common/Form';

export type CartState = {
    isOpen: CartProps['open'];
    setIsOpen: React.Dispatch<React.SetStateAction<CartState['isOpen']>>;
    items: ({ noteRaw?: string } & NonNullable<CartProps['items']>[number])[];
    setItems: React.Dispatch<React.SetStateAction<PurchaseFormFields[]>>;
    count: number;
    totalPrice: number;
    totalPriceCurrency: React.ReactNode;
    updateCartQuantityHandler: (props: CartItemFormFields) => void;
    addCartItemHandler: (props: PurchaseFormFields) => void;
};

export const CartStateContext = createContext<CartState>({
    isOpen: false,
    setIsOpen: () => {},
    items: [],
    setItems: () => {},
    count: 0,
    totalPrice: 0,
    totalPriceCurrency: 0,
    updateCartQuantityHandler: () => {},
    addCartItemHandler: () => {},
});

const CART_KEY = 'cart';
const CART_EXPIRED_TIME = convertIntToMilliseconds({ type: 'day', number: 7 });

export const CartStateContextProvider = ({ children }: PropsWithChildren) => {
    const { routeLength } = useHistoryStateContext();
    const [isOpen, setIsOpen] = useState<CartState['isOpen']>(false);
    const [items, setItems] = useState<PurchaseFormFields[]>([]);

    const updateCartQuantityHandler = (props: CartItemFormFields) => {
        setItems((prevState) => {
            let tmp = [...prevState];

            const updateItemIndex = tmp.findIndex((item) => item.cartItemId === props.cartItemId);
            let updateItem = tmp.find((item) => item.cartItemId === props.cartItemId);

            if (updateItem && props?.qty && props.qty > 0) {
                const [variantLabel, variantPrice] = ((updateItem?.variant as string) ?? '').split(',');

                let addOnsPrice = 0;
                if (updateItem?.addOns && Array.isArray(updateItem.addOns) && updateItem.addOns.length > 0)
                    updateItem.addOns.forEach((itm) => {
                        const [addOnSlug, addOnLabel, addOnPrice] = ((itm as string) ?? '').split(',');

                        if (checkStringIsNumber(addOnPrice)) addOnsPrice += parseInt(addOnPrice);
                    });

                let totalPrice = 0;
                if (checkStringIsNumber(variantPrice)) totalPrice = parseInt(variantPrice);
                if (addOnsPrice > 0) totalPrice += addOnsPrice;
                if (props?.qty && props.qty > 0) totalPrice = totalPrice * props.qty;

                updateItem = Object.assign(updateItem, {
                    qty: props.qty,
                    totalPrice,
                });

                tmp.splice(updateItemIndex, 1, updateItem);
            }

            if (updateItemIndex >= 0 && props?.qty === 0) {
                tmp.splice(updateItemIndex, 1);
            }

            setLocalStorage({ key: CART_KEY, value: JSON.stringify(tmp), expiryInMs: CART_EXPIRED_TIME });

            return tmp;
        });
    };

    const addCartItemHandler = (item: ParametersProps<CartState['addCartItemHandler']>) => {
        if (!item) return;

        setItems((prevState) => {
            let tmp = [...prevState];

            tmp.push(item);

            setLocalStorage({ key: CART_KEY, value: JSON.stringify(tmp), expiryInMs: CART_EXPIRED_TIME });

            return tmp;
        });
    };

    const lineItems = useMemo(() => {
        const data: CartState['items'] = [];

        if (items && items.length > 0) {
            items.forEach((item, i) => {
                const [variantLabel, variantPrice] = ((item?.variant as string) ?? '').split(',');

                const addOns: NonNullable<CartProps['items']>[number]['addOns'] = [];

                if (item?.addOns && Array.isArray(item.addOns) && item.addOns.length > 0) {
                    item.addOns.forEach((itm) => {
                        const [addOnSlug, addOnLabel, addOnPrice] = ((itm as string) ?? '').split(',');

                        let tmp: NonNullable<NonNullable<CartProps['items']>[number]['addOns']>[number] = addOnLabel;
                        if (item?.[`addOns_${addOnSlug}_note`]) tmp += `: ${item?.[`addOns_${addOnSlug}_note`]}`;

                        if (tmp) addOns.push(tmp);
                    });
                }

                let note: string | React.ReactNode | undefined = (item?.note as string) ?? undefined;
                // if (note) note = note.replace(/\n/g, '</br>');
                if (note) note = `<p>${note}</p>`;
                if (note && typeof note === 'string') note = parse(note);

                let noteRaw: string | undefined = item?.note;
                if (noteRaw) noteRaw = noteRaw.replace(/\n/g, ' ');

                data.push({
                    cartItemId: item.cartItemId.toString(),
                    media: (item?.media as any) ?? [],
                    title: item.title,
                    variant: variantLabel,
                    addOns,
                    note,
                    noteRaw,
                    qty: (item?.qty as number) ?? 1,
                    maxQty: 5,
                    price: item?.totalPrice ?? 0,
                    priceCurrency: convertIntToCurrency((item?.totalPrice as number) ?? 0, true),
                });
            });
        }

        return data;
    }, [items]);

    const totalPrice = lineItems.reduce((total, item) => {
        return total + (item?.price ?? 0);
    }, 0);

    const count = lineItems.reduce((total, item) => {
        return total + (item?.qty ?? 0);
    }, 0);

    const defaultContext = {
        isOpen,
        setIsOpen,
        items: lineItems,
        setItems,
        count,
        totalPrice: totalPrice,
        totalPriceCurrency: convertIntToCurrency(totalPrice, true),
        updateCartQuantityHandler,
        addCartItemHandler,
    };

    return (
        <>
            <Suspense fallback={null}>
                <NavigationEvents
                    endHandler={() => {
                        if (routeLength > 0) return;

                        const cartItemsStringify = getLocalStorage(CART_KEY);
                        if (cartItemsStringify) setItems(JSON.parse(cartItemsStringify));
                    }}
                />
            </Suspense>
            <CartStateContext.Provider value={defaultContext}>{children}</CartStateContext.Provider>
        </>
    );
};
