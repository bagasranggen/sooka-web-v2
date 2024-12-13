import React from 'react';
import Columns from '@/components/common/Columns';
import Picture from '@/components/common/Picture';
import { createPicsumImage } from '@/libs/factory';

export type MarqueeProps = {};

const Marquee = ({}: MarqueeProps): React.ReactElement => {
    return (
        <div className="overflow-hidden">
            <Columns.Row isWrap={false}>
                <Columns.Column width="auto">
                    <Picture items={[createPicsumImage({ width: 550, height: 413 })]} />
                </Columns.Column>
                <Columns.Column width="auto">
                    <Picture items={[createPicsumImage({ width: 550, height: 413 })]} />
                </Columns.Column>
                <Columns.Column width="auto">
                    <Picture items={[createPicsumImage({ width: 550, height: 413 })]} />
                </Columns.Column>
                <Columns.Column width="auto">
                    <Picture items={[createPicsumImage({ width: 550, height: 413 })]} />
                </Columns.Column>
            </Columns.Row>
        </div>
    );
};

export default Marquee;
