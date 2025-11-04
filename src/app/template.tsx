'use client';

import React from 'react';

import { useHistoryStateContext } from '@/store/context';

import { ProgressProvider } from '@bprogress/next/app';

import Preloader from '@/components/common/Preloader';

export default function Template({ children }: { children: React.ReactNode }) {
    const { routeLength } = useHistoryStateContext();

    return (
        <>
            {routeLength <= 1 && <Preloader />}

            <ProgressProvider
                height="2px"
                color="#FF9A00"
                options={{ showSpinner: false }}
                shallowRouting>
                {children}
            </ProgressProvider>
        </>
    );
}
