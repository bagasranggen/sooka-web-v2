'use client';

import React, { Ref, Suspense, useEffect, useState } from 'react';

import { ArrayString } from '@/libs/@types';
import { NavigationEvents, useCheckSamePath, usePortal } from '@/libs/hooks';
import { joinArrayString } from '@/libs/utils';

import { useMeasure, useWindowScroll } from 'react-use';

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
    const { isSamePath } = useCheckSamePath();
    const [navRef, { height }] = useMeasure();
    const { y: scrollY } = useWindowScroll();
    const [prevScrollY, setPrevScrollY] = useState<number>(0);
    const [scrollYDirection, setScrollYDirection] = useState<'down' | 'up' | null>(null);

    let navClass: ArrayString = ['bg-sooka-primary h-[7rem] flex items-center text-white'];
    navClass.push('sticky top-0 z-[1040] transition-transform');
    if (scrollY > height && scrollYDirection === 'down') navClass.push('-translate-y-full');
    navClass = joinArrayString(navClass);

    useEffect(() => {
        setPrevScrollY((prevState) => {
            setScrollYDirection(prevState > scrollY ? 'up' : 'down');
            return scrollY;
        });
    }, [scrollY]);

    return (
        <>
            <Suspense fallback={null}>
                <NavigationEvents
                    endHandler={() => {
                        triggerClose();
                    }}
                />
            </Suspense>

            <nav
                ref={navRef as Ref<HTMLElement>}
                className={navClass}>
                <Container>
                    <div className="flex items-center justify-between">
                        <Button
                            as="anchor"
                            href="/"
                            onClick={() => {
                                if (show) triggerClose();
                            }}>
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
                        className="mt-10 text-center space-y-2"
                        items={items.map((item: NavigationItemProps) => ({
                            children: (
                                <Button
                                    as="anchor"
                                    href={item.href}
                                    className="uppercase font-semibold tracking-0.2 transition-colors text-white"
                                    onClick={(e) => {
                                        e.stopPropagation();

                                        if (isSamePath({ href: item?.href })) triggerClose();
                                    }}>
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
