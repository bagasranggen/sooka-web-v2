import React from 'react';

import CbWrapper, { CbWrapperProps } from '@/components/common/ContentBlocks/CbWrapper';
import CbContainer from '@/components/common/ContentBlocks/CbContainer';
import Marquee, { PictureProps } from '@/components/common/Marquee';

export type CbMarqueeProps = Pick<CbWrapperProps, 'className'> & Pick<PictureProps, 'items'>;

const CbMarquee = ({ className, items }: CbMarqueeProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    return (
        <CbWrapper className={className}>
            <CbContainer isNested>
                <Marquee.Picture items={items} />
            </CbContainer>
        </CbWrapper>
    );
};

export default CbMarquee;
