import { Suspense } from 'react';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { CART_ITEMS, NAVIGATION_LINKS } from '@/libs/mock';
import { NavigationEvents } from '@/libs/hooks';
import { useCartStateContext } from '@/store/context';

import Main from './index';
import MainCartButton from './MainCartButton';
import Container from '@/components/common/Container';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Layout/Main',
    // component: Main,
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
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Default: Story = {
export const Default: StoryObj<typeof Main> = {
    args: {
        navigation: {
            items: NAVIGATION_LINKS,
        },
        footer: {
            address: 'asdawdawd',
            businessHour: 'asdadw - asdadw',
            socialMedia: [
                {
                    cta: { href: '#' },
                    icon: 'CiInstagram',
                },
                {
                    cta: { href: '#' },
                    icon: 'CiMail',
                },
            ],
        },
        children: (
            <Container className="my-10">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, blanditiis dolorem eum expedita
                    ipsa itaque laboriosam libero modi molestias non nulla odit, quam quidem sint voluptates? Amet eum
                    facilis vitae.
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi consequatur dicta ea enim
                    ipsam ipsum iste iusto perspiciatis sequi, similique sint sit tempora tempore, voluptates? Aliquam
                    beatae, commodi dignissimos dolor doloribus enim expedita facilis, fugit impedit minus nam natus
                    nemo, nobis nostrum omnis provident quae quaerat quisquam quo repellendus rerum saepe temporibus
                    totam velit voluptatem. Aliquam culpa dolorum maiores tempora. Aspernatur at atque illo nisi
                    obcaecati perspiciatis quidem reiciendis sapiente vero voluptates. Architecto corporis expedita fuga
                    fugit illo nam optio quas quisquam recusandae vero! Eius iste libero molestiae nulla quaerat, quasi
                    quo rem voluptas?
                </p>
                <p>
                    Aut eligendi et fugiat mollitia nihil quam quod velit. A alias eligendi facilis fuga inventore ipsum
                    iusto magnam quos vero voluptas. Beatae blanditiis, commodi corporis dicta doloribus ea et facilis
                    itaque magni minima nihil officiis perspiciatis quo quod reiciendis repudiandae saepe soluta vitae.
                    Aut eius fugit ipsa iste minus similique sint suscipit, temporibus voluptates! Modi!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, blanditiis dolorem eum expedita
                    ipsa itaque laboriosam libero modi molestias non nulla odit, quam quidem sint voluptates? Amet eum
                    facilis vitae.
                </p>
            </Container>
        ),
    },
    render: (args) => {
        const { setItems } = useCartStateContext();

        return (
            <>
                <Suspense fallback={null}>
                    <NavigationEvents
                        endHandler={() => {
                            setItems(CART_ITEMS);
                        }}
                    />
                </Suspense>

                <Main {...args} />
            </>
        );
    },
};

export const CartButton: StoryObj<typeof MainCartButton> = {
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    args: {
        count: 2,
        price: 'Rp 240.000',
    },
    render: (args) => {
        return <MainCartButton {...args} />;
    },
};
