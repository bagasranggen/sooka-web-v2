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
    active?: boolean;
    trigger?: DropdownMenuTriggerProps;
} & (Pick<BaseProps, 'children'> & Pick<DropdownMenuTriggerProps, 'onMouseEnter'> & ClassnameProps);

const NavigationDropdown = ({
    className,
    items,
    children,
    trigger,
}: NavigationDropdownProps): React.ReactElement | null => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    if (!items || items.length === 0) return null;

    let triggerBtnClass: ArrayStringProps = [];
    if (className) triggerBtnClass.push(className);
    triggerBtnClass.push('flex items-center');
    triggerBtnClass = joinArrayString(triggerBtnClass);

    let linkBtnClass: ArrayStringProps = [];
    if (className) linkBtnClass.push(className);
    linkBtnClass.push('text-white');
    linkBtnClass = joinArrayString(linkBtnClass);

    return (
        <DropdownMenu
            modal={false}
            // open={isOpen}
        >
            <DropdownMenuTrigger
                asChild
                className="group"
                // onClick={() => setIsOpen(true)}
                {...trigger}>
                <Button
                    as="button"
                    className={triggerBtnClass}>
                    {children}
                    <ChevronDown className="ms-[.75rem] transition-transform group-aria-expanded:rotate-180" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="bg-sooka-secondary">
                {items.map((item, i) => {
                    return (
                        <Button
                            key={i}
                            as="anchor"
                            className={linkBtnClass}
                            // onClick={() => setIsOpen(false)}
                            {...item}
                        />
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default NavigationDropdown;
