'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import BaseModal, { BaseModalProps } from '@/components/common/Modal/Base/BaseModal';
import BaseBackdrop from '@/components/common/Modal/Base/BaseBackdrop';

export type BaseProps = Pick<BaseModalProps, 'show' | 'onHide'>;

const Base = ({ show, onHide }: BaseProps): React.ReactElement => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return mounted ? (
        createPortal(
            <>
                <BaseBackdrop show={show} />
                <BaseModal
                    show={show}
                    onHide={onHide}
                    onOpen={() => {
                        console.log('open');
                    }}
                    onOpened={() => {
                        console.log('opened');
                    }}
                    onClose={() => {
                        console.log('close');
                    }}
                    onClosed={() => {
                        console.log('closed');
                    }}>
                    MODAL
                </BaseModal>
            </>,
            document.body
        )
    ) : (
        <></>
    );
};

export default Base;
