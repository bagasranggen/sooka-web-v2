'use client';

import React, { useState } from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { ChevronDown } from 'lucide-react';

import Button, { BaseAnchorProps, BaseProps } from '@/components/common/Button';
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
} & (Pick<BaseProps, 'children'> & Pick<BaseAnchorProps, 'href' | 'target'> & ClassnameProps);

const NavigationDropdown = ({
    className,
    items,
    children,
    trigger,
    active,
    href,
    target,
}: NavigationDropdownProps): React.ReactElement | null => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    if (!items || items.length === 0) return null;

    let triggerBtnClass: ArrayStringProps = [];
    if (className) triggerBtnClass.push(className);
    triggerBtnClass.push('flex items-center');
    triggerBtnClass.push('data-[state=open]:text-dark');
    triggerBtnClass = joinArrayString(triggerBtnClass);

    let parentLinkBtnClass: ArrayStringProps = [];
    if (className) parentLinkBtnClass.push(className);
    // parentLinkBtnClass.push('text-light');
    parentLinkBtnClass = joinArrayString(parentLinkBtnClass);

    let linkBtnClass: ArrayStringProps = ['block not-first:mt-1'];
    if (className) linkBtnClass.push(className);
    linkBtnClass.push('text-light');
    linkBtnClass = joinArrayString(linkBtnClass);

    return (
        <DropdownMenu
            modal={false}
            open={isOpen && active === children}>
            <div className="flex gap-0.75">
                <Button
                    as="anchor"
                    className={parentLinkBtnClass}
                    href={href}
                    target={target}>
                    {children}
                </Button>
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
                        {/*{children}*/}
                        <ChevronDown className=" transition-transform group-aria-expanded:rotate-180" />
                    </Button>
                </DropdownMenuTrigger>
            </div>

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
