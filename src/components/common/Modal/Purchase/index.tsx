'use client';

import React from 'react';

import { useDebounceWindowSize, useIsTouch } from '@/libs/hooks';

import PurchaseModal, { PurchaseModalProps } from '@/components/common/Modal/Purchase/PurchaseModal';
import PurchaseSheet from '@/components/common/Modal/Purchase/PurchaseSheet';

export type PurchaseProps = PurchaseModalProps;

const Purchase = (props: PurchaseProps): React.ReactElement | null => {
    const isTouch = useIsTouch();
    const { width } = useDebounceWindowSize();

    let isMobile = false;
    if (isTouch && width < 1200) isMobile = true;
    if (!isTouch && width < 992) isMobile = true;

    if (width === 0) return null;

    if (isMobile) {
        return <PurchaseSheet {...props} />;
    }

    return <PurchaseModal {...props} />;
};

export default Purchase;
