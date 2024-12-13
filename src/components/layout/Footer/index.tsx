import React from 'react';

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
                    className="mx-auto w-[30rem]"
                />
                <div className="mt-5">
                    <Columns.Row>
                        <Columns.Column
                            width={{ md: 6 }}
                            className="*:!mb-0 uppercase tracking-0.2 font-semibold text-[1.2rem]">
                            <p>Sleman, Daerah Istimewa Yogyakarta</p>
                            <p>Open Daily, 9 AM - 4 PM</p>
                        </Columns.Column>
                    </Columns.Row>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
