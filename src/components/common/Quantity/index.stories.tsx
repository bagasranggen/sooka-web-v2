import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Quantity from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Common/Quantity',
    component: Quantity,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    // tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    // args: { onClick: fn() },
} satisfies Meta<typeof Quantity>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {},
    render: (args) => {
        const limit = 9;

        const [qty, setQty] = useState<number>(1);

        const clickHandler = ({ type }: { type?: 'increment' | 'decrement' }) => {
            setQty((prevState) => {
                if (type === 'decrement') return prevState - 1;
                if (type === 'increment') return prevState + 1;

                return prevState;
            });
        };

        return (
            <Quantity
                {...args}
                input={{
                    type: 'number',
                    value: qty,
                    disabled: true,
                    max: limit,
                }}
                decrement={{
                    disabled: qty <= 1,
                    onClick: () => clickHandler({ type: 'decrement' }),
                }}
                increment={{
                    disabled: qty >= limit,
                    onClick: () => clickHandler({ type: 'increment' }),
                }}
            />
        );
    },
};
