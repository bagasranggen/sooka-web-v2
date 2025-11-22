import React from 'react';

import Link, { LinkProps } from '@/components/common/Link';

import { CiInstagram, CiMail } from 'react-icons/ci';

const SOCIAL_ICON_HANDLES = {
    CiInstagram: CiInstagram,
    CiMail: CiMail,
};

export type FooterSocialItemProps = {
    cta: Pick<LinkProps, 'href' | 'target' | 'children'>;
    icon: string;
};

export type FooterSocialProps = {
    items?: FooterSocialItemProps[];
};

const FooterSocial = ({ items }: FooterSocialProps): React.ReactElement | null => {
    if (!items || items?.length === 0) return null;

    return (
        <div className="flex items-center justify-center md:justify-end">
            {items.map((item: FooterSocialItemProps, i: number) => {
                let Icon: any = undefined;
                if (item?.icon && SOCIAL_ICON_HANDLES?.[item.icon as keyof typeof SOCIAL_ICON_HANDLES]) {
                    Icon = SOCIAL_ICON_HANDLES?.[item.icon as keyof typeof SOCIAL_ICON_HANDLES];
                }

                return (
                    <Link
                        key={i}
                        className="[&:not(:first-child)]:ms-0.5"
                        {...item.cta}>
                        {Icon && <Icon size={30} />}
                    </Link>
                );
            })}
        </div>
    );
};

export default FooterSocial;
