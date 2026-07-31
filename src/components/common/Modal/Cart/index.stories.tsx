import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { CART_ITEMS } from '@/libs/mock';
import { useCartStateContext } from '@/store/context';
import { NavigationEvents } from '@/libs/hooks';

import Cart from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Common/Modal/Cart',
    component: Cart,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    // tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    // args: { onClick: fn() },
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {
        open: true,
        // items: FORM_CART,
        onSubmit: (data, lineItems) => {
            console.log({ data, lineItems });
        },
    },
    render: (args) => {
        const { items, setItems, totalPrice, totalPriceCurrency, updateCartQuantityHandler } = useCartStateContext();

        return (
            <>
                <Suspense fallback={null}>
                    <NavigationEvents
                        endHandler={() => {
                            setItems(CART_ITEMS);
                        }}
                    />
                </Suspense>
                <Cart
                    items={items}
                    onQuantityUpdate={(data) => {
                        console.log({ data });
                        updateCartQuantityHandler(data);
                    }}
                    onRemove={(data) => {
                        updateCartQuantityHandler(data);
                    }}
                    price={totalPrice}
                    priceCurrency={totalPriceCurrency}
                    {...args}
                />
            </>
        );
    },
};
