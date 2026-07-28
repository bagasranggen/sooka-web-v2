'use client';

import React, { PropsWithChildren } from 'react';

import { useCartStateContext } from '@/store/context';

import Navigation, { NavigationProps } from '@/components/layout/Navigation';
import Footer, { FooterProps } from '@/components/layout/Footer';
import MainCartButton from '@/components/layout/Main/MainCartButton';
import Modal from '@/components/common/Modal';

export type MainProps = {
    navigation?: Pick<NavigationProps, 'items'>;
    footer?: Pick<FooterProps, 'address' | 'businessHour' | 'socialMedia'>;
} & PropsWithChildren;

const Main = ({ navigation, footer, children }: MainProps): React.ReactElement => {
    const { isOpen, setIsOpen, count, items, totalPrice, totalPriceCurrency, updateCartQuantityHandler } =
        useCartStateContext();

    return (
        <>
            {navigation && (
                <Navigation
                    {...navigation}
                    cart={{
                        count,
                        onClick: () => setIsOpen(true),
                    }}
                />
            )}

            {children}

            <MainCartButton
                price={totalPriceCurrency}
                count={count}
                className="w-max fixed left-1/2 -translate-x-1/2 bottom-1"
                onClick={() => setIsOpen(true)}
            />

            <Modal.Cart
                open={isOpen}
                items={items}
                price={totalPrice}
                priceCurrency={totalPriceCurrency}
                onOpenChange={(open) => setIsOpen(open)}
                onQuantityUpdate={(data) => {
                    updateCartQuantityHandler(data);
                }}
                onRemove={(data) => {
                    updateCartQuantityHandler(data);
                }}
            />

            <Footer {...footer} />
        </>
    );
};

export default Main;
