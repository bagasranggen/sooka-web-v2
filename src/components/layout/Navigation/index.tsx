'use client';

import React from 'react';

import { NAVIGATION_LINKS } from '@/libs/mock';
import { useModal } from '@/libs/hooks';

import Icon from '@/components/common/Icon';
import List from '@/components/common/List';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import Container from '@/components/common/Container';

export type NavigationProps = {};

const Navigation = ({}: NavigationProps): React.ReactElement => {
    const { show, handleModalOpen, handleModalClose } = useModal();

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

                    <button
                        className="btn"
                        onClick={() => {
                            handleModalOpen();
                        }}>
                        btn
                    </button>

                    <List
                        className="hidden md:flex space-x-3"
                        items={NAVIGATION_LINKS.map((item) => ({
                            children: (
                                <Button
                                    as="anchor"
                                    href={item.href}
                                    className="uppercase text-[1.4rem] tracking-0.2 transition-colors hover:text-black">
                                    {item.children}
                                </Button>
                            ),
                        }))}
                    />
                </div>
            </Container>

            <Modal
                show={show}
                onHide={handleModalClose}
                className="max-w-[50rem] mx-auto bg-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum dolores doloribus, earum,
                facilis fuga illo magnam modi nesciunt officiis rem repellat repudiandae rerum sapiente tenetur, totam
                veniam! Consequatur, soluta?
            </Modal>
        </nav>
    );
};

export default Navigation;
