'use client';

import { useState } from 'react';

import { useDebounce, useWindowSize } from 'react-use';

export const useDebounceWindowSize = (ms: number = 250) => {
    const { width, height } = useWindowSize();

    const [debounceWidth, setDebounceWidth] = useState<number>(0);
    const [debounceHeight, setDebounceHeight] = useState<number>(0);

    const [] = useDebounce(
        () => {
            setDebounceWidth(width);
            setDebounceHeight(height);
        },
        ms,
        [width, height]
    );

    return { width: debounceWidth, height: debounceHeight };
};
