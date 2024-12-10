import React from 'react';

import { NAVIGATION_LINKS } from '@/libs/mock';

import Icon from '@/components/common/Icon';
import List from '@/components/common/List';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';

export type NavigationProps = {};

const Navigation = ({}: NavigationProps): React.ReactElement => {
    return (
        <nav className="bg-sooka-primary h-[7rem] flex items-center text-white">
            <Container>
                <div className="flex items-center justify-between">
                    <Button
                        as="anchor"
                        href="/">
                        <Icon.Sooka
                            id="logoHeade"
                            color="light"
                            className="h-[4.5rem]"
                        />
                    </Button>

                    <List
                        className="flex space-x-3"
                        items={NAVIGATION_LINKS.map((item) => ({
                            children: (
                                <Button
                                    as="anchor"
                                    href={item.href}
                                    className="uppercase tracking-[.2rem] transition-colors hover:text-black">
                                    {item.children}
                                </Button>
                            ),
                        }))}
                    />
                </div>
            </Container>
        </nav>
    );
};

export default Navigation;
