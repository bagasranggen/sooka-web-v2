'use client';

import React, { Suspense } from 'react';

import { NavigationEvents, usePortal } from '@/libs/hooks';

import Icon from '@/components/common/Icon';
import List from '@/components/common/List';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import Offcanvas from '@/components/common/Offcanvas';
import Container from '@/components/common/Container';

export type NavigationItemProps = Pick<BaseAnchorProps, 'href' | 'children' | 'target'>;

export type NavigationProps = {
    items: NavigationItemProps[];
};

const Navigation = ({ items }: NavigationProps): React.ReactElement => {
    const { show, triggerOpen, triggerClose } = usePortal({});

    return (
        <>
            <Suspense fallback={null}>
                <NavigationEvents
                    endHandler={() => {
                        triggerClose();
                    }}
                />
            </Suspense>

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

                        <Button
                            as="button"
                            type="button"
                            className="block md:hidden"
                            onClick={() => {
                                if (!show) {
                                    triggerOpen();
                                }

                                if (show) {
                                    triggerClose();
                                }
                            }}>
                            <Icon.Toggle active={show} />
                        </Button>

                        <List
                            className="hidden md:flex space-x-3"
                            items={items.map((item: NavigationItemProps) => ({
                                children: (
                                    <Button
                                        as="anchor"
                                        {...item}
                                        className="uppercase text-[1.4rem] tracking-0.2 transition-colors hover:text-black"
                                    />
                                ),
                            }))}
                        />
                    </div>
                </Container>

                <Offcanvas
                    show={show}
                    hide={triggerClose}
                    backdrop={false}
                    from="bottom"
                    className="h-full max-h-[calc(100vh-7rem)] bg-sooka-primary">
                    <List
                        className="mt-3 text-center space-y-2"
                        items={items.map((item: NavigationItemProps) => ({
                            children: (
                                <Button
                                    as="anchor"
                                    href={item.href}
                                    className="uppercase font-semibold tracking-0.2 transition-colors text-white">
                                    {item.children}
                                </Button>
                            ),
                        }))}
                    />
                </Offcanvas>
            </nav>
        </>
    );
};

export default Navigation;
