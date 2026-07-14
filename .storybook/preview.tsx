import type { Preview } from '@storybook/nextjs-vite';

import { INITIAL_VIEWPORTS } from 'storybook/viewport';

// import '@fontsource/noto-sans-jp';
// import '@fontsource/noto-sans-jp/600.css';
import '../src/assets/styles/css/main.css';

const preview: Preview = {
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
        // viewport: {
        //     options: INITIAL_VIEWPORTS,
        // },
    },
    // initialGlobals: {
    // viewport: { value: 'ipad', isRotated: false },
    // },
};

export default preview;
