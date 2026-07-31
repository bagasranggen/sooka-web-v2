import React from 'react';

import * as CiIcon from 'react-icons/ci';

import Icon from '@/components/common/Icon';
import Columns from '@/components/common/Columns';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import Container from '@/components/common/Container';
import FooterSocial, { FooterSocialProps } from '@/components/layout/Footer/FooterSocial';

export type FooterProps = {
    address?: Partial<Pick<BaseAnchorProps, 'children' | 'href' | 'target'>>;
    businessHour?: string | null;
    socialMedia?: FooterSocialProps['items'];
};

const Footer = ({ address, businessHour, socialMedia }: FooterProps): React.ReactElement => {
    return (
        <footer className="bg-sooka-primary text-white py-5">
            <Container>
                <Icon.Sooka
                    id="footerLogo"
                    color="light"
                    className="mx-auto w-xs lg:w-30"
                />
                <div className="mt-5">
                    <Columns
                        className="justify-center md:justify-between"
                        gutterY={2}>
                        <Columns.Column
                            md={6}
                            className="*:mb-0! uppercase tracking-0.2 font-semibold text-[1.2rem] text-center md:text-left">
                            {address && (
                                <Button
                                    as={address?.href ? 'anchor' : undefined}
                                    href={address?.href ?? '#'}
                                    target={address?.target}
                                    className="flex items-center justify-center md:justify-start gap-1 md:hover:text-light/80 md:transition-colors">
                                    <CiIcon.CiLocationOn
                                        size={16}
                                        className="min-w-[1.6rem]"
                                    />
                                    {address?.children}
                                </Button>
                            )}

                            {businessHour && <p className={address ? 'mt-0.5' : ''}>{businessHour}</p>}
                        </Columns.Column>
                        <Columns.Column
                            md={6}
                            className="*:mb-0! uppercase tracking-0.2 font-semibold text-[1.2rem] text-center lg:text-right">
                            <FooterSocial items={socialMedia} />
                        </Columns.Column>
                    </Columns>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;

export type { FooterSocialProps };
