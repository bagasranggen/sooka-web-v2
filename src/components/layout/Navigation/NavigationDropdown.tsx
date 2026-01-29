'use client';

import React, { useState } from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { ChevronDown } from 'lucide-react';

import Button, { BaseProps } from '@/components/common/Button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuTriggerProps,
} from '@/components/shadcn/DropdownMenu';
import { NavigationItemNestedProps } from '@/components/layout/Navigation';

export type NavigationDropdownItemProps = NavigationItemNestedProps;

export type NavigationDropdownProps = {
    items?: NavigationDropdownItemProps[];
    active?: BaseProps['children'];
    trigger?: {
        onClick?: (e: React.MouseEvent<HTMLButtonElement, React.MouseEvent>, children: BaseProps['children']) => void;
    } & Omit<DropdownMenuTriggerProps, 'onClick'>;
} & (Pick<BaseProps, 'children'> & ClassnameProps);

const NavigationDropdown = ({
    className,
    items,
    children,
    trigger,
    active,
}: NavigationDropdownProps): React.ReactElement | null => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    if (!items || items.length === 0) return null;

    let triggerBtnClass: ArrayStringProps = [];
    if (className) triggerBtnClass.push(className);
    triggerBtnClass.push('flex items-center');
    triggerBtnClass.push('data-[state=open]:text-dark');
    triggerBtnClass = joinArrayString(triggerBtnClass);

    let linkBtnClass: ArrayStringProps = ['block not-first:mt-1'];
    if (className) linkBtnClass.push(className);
    linkBtnClass.push('text-light');
    linkBtnClass = joinArrayString(linkBtnClass);

    return (
        <DropdownMenu
            modal={false}
            open={isOpen && active === children}>
            <DropdownMenuTrigger
                asChild
                className="group"
                onClick={(e: any) => {
                    setIsOpen((prevState) => !prevState);

                    if (trigger?.onClick) trigger.onClick(e, children);
                }}>
                <Button
                    as="button"
                    className={triggerBtnClass}>
                    {children}
                    <ChevronDown className="ms-[.75rem] transition-transform group-aria-expanded:rotate-180" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="bg-sooka-secondary"
                onInteractOutside={() => {
                    setTimeout(() => {
                        if (isOpen) setIsOpen(false);
                    }, 150);
                }}>
                {items.map((item, i) => {
                    return (
                        <Button
                            key={i}
                            as="anchor"
                            className={linkBtnClass}
                            onClick={() => setIsOpen(false)}
                            {...item}
                        />
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default NavigationDropdown;
