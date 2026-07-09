import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Sheet, SheetContent } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Shadcn/Sheet',
    component: SheetContent,
    decorators: [
        (Story) => (
            <Sheet open={true}>
                <Story />
            </Sheet>
        ),
    ],
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
} satisfies Meta<typeof SheetContent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        side: 'bottom',
        // showCloseButton: false,
        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ex incidunt laborum. Beatae, consequatur cum cupiditate distinctio, doloremque eius inventore iste modi nobis, pariatur quam reiciendis sunt? Esse, et, sit?`,
    },
};
