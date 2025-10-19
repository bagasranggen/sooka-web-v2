import React from 'react';

import * as CiIcon from 'react-icons/ci';

import Icon from '@/components/common/Icon';
import Columns from '@/components/common/Columns';
import Container from '@/components/common/Container';
import FooterSocial, { FooterSocialProps } from '@/components/layout/Footer/FooterSocial';

export type FooterProps = {
    address?: string;
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
                    className="mx-auto w-[20rem] lg:w-[30rem]"
                />
                <div className="mt-5">
                    <Columns.Row
                        className="justify-center md:justify-between"
                        spacing={{ x: 3, y: 2 }}>
                        <Columns.Column
                            width={{ md: 6 }}
                            className="*:!mb-0 uppercase tracking-0.2 font-semibold text-[1.2rem] text-center lg:text-left">
                            {address && (
                                <p className="flex items-center justify-center md:justify-start gap-1">
                                    <CiIcon.CiLocationOn size={14} /> {address}
                                </p>
                            )}

                            {businessHour && <p>{businessHour}</p>}
                        </Columns.Column>
                        <Columns.Column
                            width={{ md: 6 }}
                            className="*:!mb-0 uppercase tracking-0.2 font-semibold text-[1.2rem] text-center lg:text-right">
                            <FooterSocial items={socialMedia} />
                        </Columns.Column>
                    </Columns.Row>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;

export type { FooterSocialProps };
