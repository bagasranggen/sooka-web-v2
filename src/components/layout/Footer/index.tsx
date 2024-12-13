import React from 'react';

import Icon from '@/components/common/Icon';
import Container from '@/components/common/Container';

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
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias asperiores eos fugit minima
                        necessitatibus nobis odit, omnis quasi ratione repellat repellendus vero? Doloremque est ex
                        facere perferendis sunt voluptas!
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
