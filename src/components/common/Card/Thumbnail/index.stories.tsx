import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { CARD_THUMBNAIL_WITH_PRICE, FORM_PURCHASE_ADDONS, FORM_PURCHASE_VARIANTS } from '@/libs/mock';

import Container from '@/components/common/Container';

import Thumbnail from './index';
import ThumbnailItem from './ThumbnailItem';
import ThumbnailOrder from './ThumbnailOrder';
import ThumbnailOrderModal from './ThumbnailOrderModal';
import ThumbnailOrderSheet from './ThumbnailOrderSheet';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Common/Card/Thumbnail',
    // component: Thumbnail,
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
} satisfies Meta<typeof Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;
type ThumbnailStory = StoryObj<typeof Thumbnail>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: ThumbnailStory = {
    args: {
        items: CARD_THUMBNAIL_WITH_PRICE,
    },
    render: (arg) => (
        <Container>
            <Thumbnail {...arg} />
        </Container>
    ),
};

export const Individual: ThumbnailStory = {
    args: {
        items: [CARD_THUMBNAIL_WITH_PRICE[0]],
    },
    // parameters: {
    //     layout: 'centered',
    // },
    // render: (arg) => <ThumbnailItem {...arg} />,
    render: (arg) => (
        <Container>
            <Thumbnail {...arg} />
        </Container>
    ),
};

export const OrderPopup: StoryObj<typeof ThumbnailOrder> = {
    render: (arg) => <ThumbnailOrder {...arg} />,
};

export const OrderPopupModal: StoryObj<typeof ThumbnailOrderModal> = {
    args: {
        open: true,
        form: {
            variants: FORM_PURCHASE_VARIANTS,
            addOns: FORM_PURCHASE_ADDONS,
        },
    },
    render: (arg) => <ThumbnailOrderModal {...arg} />,
};

export const OrderPopupSheet: StoryObj<typeof ThumbnailOrderSheet> = {
    args: {
        open: true,
    },
    render: (arg) => <ThumbnailOrderSheet {...arg} />,
};
