import React, { PropsWithChildren } from 'react';

import { ArrayString, ElementTagsProps, PropsClassname } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type HeadingProps = {
    as?: Extract<ElementTagsProps, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
    family?: 'default' | 'anglecia';
    size?: 'section' | 'callout';
    description?: React.ReactNode;
} & (PropsWithChildren & PropsClassname);

const Heading = ({
    as: Heading = 'h1',
    family = 'anglecia',
    size,
    className,
    description,
    children,
}: HeadingProps): React.ReactElement => {
    let headingClass: ArrayString = [''];
    if (family === 'anglecia') headingClass.push(`font-anglecia`);
    if (size === 'section') headingClass.push('text-[8.5rem] leading-[9rem]');
    if (className) headingClass.push(className);
    headingClass = joinArrayString(headingClass);

    return (
        <>
            <Heading className={headingClass}>{children}</Heading>
            {description && <div className="mt-4">{description}</div>}
        </>
    );
};

export default Heading;
