import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { FORM_CART, INPUT_SELECT_OPTIONS } from '@/libs/mock';

import Label from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Common/Input/Label',
    component: Label,
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
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        type: 'text',
        id: 'test',
        label: 'Test',
    },
};

export const DefaultSmall: Story = {
    args: {
        type: 'text',
        id: 'test',
        label: 'Test',
        size: 'sm',
    },
};

export const Date: Story = {
    args: {
        type: 'date',
        id: 'test',
        label: 'Test',
    },
};

export const DateSmall: Story = {
    args: {
        type: 'date',
        id: 'test',
        label: 'Test',
        size: 'sm',
    },
};

export const TextArea: Story = {
    args: {
        type: 'textarea',
        id: 'test',
        label: 'Test',
    },
};

export const TextAreaSmall: Story = {
    args: {
        type: 'textarea',
        id: 'test',
        label: 'Test',
        size: 'sm',
    },
};

export const Select: Story = {
    args: {
        type: 'select',
        id: 'test',
        label: 'Test',
        items: INPUT_SELECT_OPTIONS,
    },
};

export const SelectMultiple: Story = {
    args: {
        type: 'select',
        id: 'test',
        label: 'Test',
        multiple: true,
        items: INPUT_SELECT_OPTIONS,
    },
};

export const Time: Story = {
    args: {
        type: 'time',
        id: 'test',
        label: 'Test',
        min: '16:50',
        // multiple: true,
        // items: INPUT_SELECT_OPTIONS,
    },
};
