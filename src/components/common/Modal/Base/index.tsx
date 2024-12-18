'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import BaseModal, { BaseModalProps } from '@/components/common/Modal/Base/BaseModal';

export type BaseProps = {
    // show?: boolean;
} & Pick<BaseModalProps, 'show'>;

const Base = ({ show }: BaseProps): React.ReactElement => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted ? (
        createPortal(
            <BaseModal
                show={show}
                // setShow={setShow}
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
            </BaseModal>,
            document.body
        )
    ) : (
        <></>
    );
};

export default Base;
