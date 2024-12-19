import React from 'react';
import { useBaseModal } from '@/libs/hooks';
import { BaseModalProps } from '@/components/common/Modal/Base/BaseModal';
import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type BaseBackdropProps = {} & Pick<BaseModalProps, 'show'>;
const BaseBackdrop = ({ show }: BaseBackdropProps): React.ReactElement | null => {
    const { isShow, isFading } = useBaseModal({ show });

    let modalClass: ArrayString = [
        'fixed transition-opacity duration-300 w-full h-full top-0 left-0 bg-sooka-primary z-[1020]',
    ];
    if (isFading) modalClass.push('opacity-0');
    if (!isFading) modalClass.push('opacity-100');
    modalClass = joinArrayString(modalClass);

    if (!isShow) return null;

    return (
        <div className={modalClass}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deserunt dolorum eaque impedit in iure
            laboriosam libero non sequi veniam. Adipisci, debitis ducimus eligendi ex in laboriosam odio voluptatem
            voluptatibus.
        </div>
    );
};

export default BaseBackdrop;
