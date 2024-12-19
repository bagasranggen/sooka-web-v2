import React, { PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export type PortalProps = PropsWithChildren;

const Portal = ({ children }: PortalProps): React.ReactElement | null => {
    const [mounted, setMounted] = useState(false);

    // Check window is mounted
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return createPortal(<>{children}</>, document.body);
};

export default Portal;
