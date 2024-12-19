import React from 'react';

import * as CiIcon from 'react-icons/ci';

import Icon from '@/components/common/Icon';
import Container from '@/components/common/Container';
import Columns from '@/components/common/Columns';

export type FooterProps = {};

const Footer = ({}: FooterProps): React.ReactElement => {
    return (
        <footer className="bg-sooka-primary text-white py-5">
            <Container>
                <Icon.Sooka
                    id="footerLogo"
                    color="light"
                    className="mx-auto w-[20rem] lg:w-[30rem]"
                />
                <div className="mt-5">
                    <Columns.Row>
                        <Columns.Column
                            width={{ md: 6 }}
                            className="*:!mb-0 uppercase tracking-0.2 font-semibold text-[1.2rem] text-center lg:text-left">
                            <p className="flex items-center gap-1">
                                <CiIcon.CiLocationOn size={14} /> Sleman, Daerah Istimewa Yogyakarta
                            </p>
                            <p>Open Daily, 9 AM - 4 PM</p>
                        </Columns.Column>
                        <Columns.Column
                            width={{ md: 6 }}
                            className="*:!mb-0 uppercase tracking-0.2 font-semibold text-[1.2rem] text-center lg:text-right">
                            <div className=" flex items-center justify-end">
                                <CiIcon.CiInstagram size={30} />
                                <CiIcon.CiMail size={30} />
                            </div>
                        </Columns.Column>
                    </Columns.Row>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
