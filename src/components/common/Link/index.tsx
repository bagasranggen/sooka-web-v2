import React from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & NextLinkProps;

const Link = ({ className, href, ...rest }: LinkProps): React.ReactElement => {
    let linkClass: ArrayString = ['cursor-pointer focus-visible:outline-0'];
    if (className) linkClass.push(className);
    linkClass = joinArrayString(linkClass);

    const hrefReplacer = (href: NextLinkProps['href']) => {
        let hrefUpdate: NextLinkProps['href'] = href;
        const replaceHref = process.env.NEXT_PUBLIC_LINK_REPLACE?.split(',');
        if (typeof href === 'string' && replaceHref && href.includes(replaceHref[0])) {
            hrefUpdate = href.replace(replaceHref[0], replaceHref[1]);
        }

        return hrefUpdate;
    };

    return (
        <NextLink
            className={linkClass}
            href={hrefReplacer(href)}
            {...rest}
        />
    );
};

export default Link;
