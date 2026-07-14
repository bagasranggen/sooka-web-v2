import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { FADE_BANNER_MEDIA, FADE_BANNER_MEDIA_SINGLE } from '@/libs/mock';

import Fade from './index';
import Picture from '@/components/common/Picture';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Common/Carousel/Fade',
    component: Fade,
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
} satisfies Meta<typeof Fade>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        items: FADE_BANNER_MEDIA.map((item) => {
            return {
                children: <Picture items={item} />,
            };
        }),
    },
};

export const DesktopDisabled: Story = {
    args: {
        items: FADE_BANNER_MEDIA_SINGLE.map((item) => {
            return {
                children: <Picture items={item} />,
            };
        }),
    },
};

export const DesktopSingle: Story = {
    args: {
        items: FADE_BANNER_MEDIA.map((item) => {
            return {
                children: <Picture items={item} />,
            };
        }),
        options: {
            loop: true,
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
            },
        },
    },
};
