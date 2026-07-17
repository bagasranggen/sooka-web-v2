import type { Preview } from '@storybook/nextjs-vite';

import { INITIAL_VIEWPORTS } from 'storybook/viewport';

import ContextProvider from '../src/store/context';

import '@fontsource/noto-sans-jp';
import '@fontsource/noto-sans-jp/600.css';
import '../src/assets/styles/css/main.css';

type ViewportProps = Record<
    string,
    {
        name: string;
        styles: Record<'width' | 'height', string>;
        type: 'desktop' | 'mobile';
    }
>;

const desktopViewPorts: ViewportProps = {
    '1360x768': {
        name: '1360x768',
        styles: {
            width: '1360px',
            height: '768px',
        },
        type: 'desktop',
    },
    '1440x768': {
        name: '1440x768',
        styles: {
            width: '1440px',
            height: '768px',
        },
        type: 'desktop',
    },
    '1920x1080': {
        name: '1920x1080',
        styles: {
            width: '1920px',
            height: '1080px',
        },
        type: 'desktop',
    },
};

const preview: Preview = {
    decorators: [
        (Story) => (
            <ContextProvider>
                <Story />
            </ContextProvider>
        ),
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo',
        },
        viewport: {
            options: {
                iphonese2: INITIAL_VIEWPORTS.iphonese2,
                iphone14promax: INITIAL_VIEWPORTS.iphone14promax,
                ipad: INITIAL_VIEWPORTS.ipad,
                ipad12p: INITIAL_VIEWPORTS.ipad12p,
                ...desktopViewPorts,
            },
        },
    },
};

export default preview;
