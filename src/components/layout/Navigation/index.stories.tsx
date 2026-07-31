import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { NAVIGATION_LINKS } from '@/libs/mock';

import Navigation from './index';
import NavigationCart from './NavigationCart';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Layout/Navigation',
    // component: Navigation,
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
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Default: Story = {
export const Default: StoryObj<typeof Navigation> = {
    args: {
        items: NAVIGATION_LINKS,
    },
    render: (args) => {
        return <Navigation {...args} />;
    },
};

export const Cart: StoryObj<typeof NavigationCart> = {
    args: {
        count: 3,
    },
    parameters: {
        layout: 'centered',
    },
    render: (args) => {
        return <NavigationCart {...args} />;
    },
};
