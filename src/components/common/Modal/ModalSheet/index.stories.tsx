import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { MODAL_PURCHASE } from '@/libs/mock';

import parse from 'html-react-parser';

import ModalSheet from './index';
import { default as ModalComponent } from './Modal';
import { default as SheetComponent } from './Sheet';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Common/Modal/Modal Sheet',
    component: ModalSheet,
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
} satisfies Meta<typeof ModalSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {
        open: true,
        modal: {
            showCloseButton: false,
        },
        sheet: {
            showCloseButton: false,
            side: 'bottom',
        },
        children: parse(
            `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque excepturi nulla perferendis sapiente voluptatibus? Animi, cum ducimus, ipsam iure libero minus perspiciatis quam qui, quis quisquam quo repellat sed tenetur!</p>`
        ),
    },
};

export const Modal: StoryObj<typeof ModalComponent> = {
    args: {
        open: true,
        content: {
            showCloseButton: false,
        },
        children: parse(
            `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque excepturi nulla perferendis sapiente voluptatibus? Animi, cum ducimus, ipsam iure libero minus perspiciatis quam qui, quis quisquam quo repellat sed tenetur!</p>`
        ),
    },
    render: (arg) => <ModalComponent {...arg} />,
};

export const Sheet: StoryObj<typeof SheetComponent> = {
    globals: {
        viewport: {
            value: 'iphone14promax',
        },
    },
    args: {
        open: true,
        content: {
            showCloseButton: false,
            side: 'bottom',
        },
        children: parse(
            `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque excepturi nulla perferendis sapiente voluptatibus? Animi, cum ducimus, ipsam iure libero minus perspiciatis quam qui, quis quisquam quo repellat sed tenetur!</p>`
        ),
    },
    render: (arg) => <SheetComponent {...arg} />,
};
