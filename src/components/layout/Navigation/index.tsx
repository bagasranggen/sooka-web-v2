'use client';

import React, { Ref, Suspense, useEffect, useState } from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { NavigationEvents, ScreenResizeEvents, usePortal } from '@/libs/hooks';
import { joinArrayString } from '@/libs/utils';

import { useMeasure, useWindowScroll } from 'react-use';

import Icon from '@/components/common/Icon';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import Offcanvas from '@/components/common/Offcanvas';
import Container from '@/components/common/Container';
import NavigationMenu from '@/components/layout/Navigation/NavigationMenu';
import NavigationMenuMobile from '@/components/layout/Navigation/NavigationMenuMobile';

export type NavigationItemNestedProps = Pick<NavigationItemProps, 'href' | 'children' | 'target'>;

export type NavigationItemProps = {
    child?: NavigationItemNestedProps[];
} & Pick<BaseAnchorProps, 'href' | 'children' | 'target'>;

export type NavigationProps = {
    items: NavigationItemProps[];
};

const Navigation = ({ items }: NavigationProps): React.ReactElement => {
    const { show, triggerOpen, triggerClose } = usePortal({});
    const [navRef, { height }] = useMeasure();
    const { y: scrollY } = useWindowScroll();
    const [prevScrollY, setPrevScrollY] = useState<number>(0);
    const [scrollYDirection, setScrollYDirection] = useState<'down' | 'up' | null>(null);
    const [activeDropdown, setActiveDropdown] = useState<BaseAnchorProps['children']>();

    let navClass: ArrayStringProps = ['bg-sooka-primary h-[7rem] flex items-center text-light'];
    navClass.push('sticky top-0 z-1040 transition-transform');
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

                <ScreenResizeEvents
                    endHandler={(size) => {
                        if (activeDropdown) setActiveDropdown(undefined);
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
                            className="block lg:hidden"
                            onClick={() => {
                                if (!show) triggerOpen();

                                if (show) triggerClose();
                            }}>
                            <Icon.Toggle active={show} />
                        </Button>

                        <NavigationMenu
                            className="hidden lg:flex"
                            items={items}
                            dropdown={{
                                active: activeDropdown,
                                trigger: {
                                    onClick: (e, children) => {
                                        setActiveDropdown(children);
                                    },
                                },
                            }}
                        />
                    </div>
                </Container>

                {items && items.length > 0 && (
                    <Offcanvas
                        show={show}
                        hide={triggerClose}
                        backdrop={false}
                        from="bottom"
                        className="h-full max-h-[calc(100vh-7rem)] bg-sooka-primary">
                        <NavigationMenuMobile
                            items={items}
                            onSamePath={triggerClose}
                        />
                    </Offcanvas>
                )}
            </nav>
        </>
    );
};

export default Navigation;
