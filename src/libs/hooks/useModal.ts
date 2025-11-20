import { useState } from 'react';

export const useModal = () => {
    const [show, setShow] = useState(false);

    const handleModalOpen = () => setShow(true);

    const handleModalClose = () => setShow(false);

    return { show, handleModalOpen, handleModalClose };
};
