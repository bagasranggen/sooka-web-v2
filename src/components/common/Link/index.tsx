import React from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & NextLinkProps;

const Link = ({ className, ...rest }: LinkProps): React.ReactElement => {
    let linkClass: ArrayString = ['cursor-pointer focus-visible:outline-0'];
    if (className) linkClass.push(className);
    linkClass = joinArrayString(linkClass);

    return (
        <NextLink
            className={linkClass}
            {...rest}
        />
    );
};

export default Link;
