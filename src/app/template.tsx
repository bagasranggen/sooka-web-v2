'use client';

import React from 'react';

import { ProgressProvider } from '@bprogress/next/app';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <ProgressProvider
            height="2px"
            color="#FF9A00"
            options={{ showSpinner: false }}
            shallowRouting>
            {children}
        </ProgressProvider>
    );
}
