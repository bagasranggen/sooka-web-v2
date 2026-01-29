import React, { PropsWithChildren } from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { ChevronDown } from 'lucide-react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/shadcn/Collapsible';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import { NavigationItemNestedProps } from '@/components/layout/Navigation';

export type NavigationCollapsibleProps = {
    items?: NavigationItemNestedProps[];
    button?: {
        onClick?: (e: React.MouseEvent<HTMLAnchorElement, React.MouseEvent>, href: BaseAnchorProps['href']) => void;
    };
    onSamePath?: () => void;
} & PropsWithChildren<ClassnameProps>;

const NavigationCollapsible = ({
    items,
    className,
    children,
    button,
}: NavigationCollapsibleProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    let triggerBtnClass: ArrayStringProps = ['group flex items-center justify-center'];
    if (className) triggerBtnClass.push(className);
    triggerBtnClass = joinArrayString(triggerBtnClass);

    let linkBtnClass: ArrayStringProps = ['block mt-2'];
    if (className) linkBtnClass.push(className);
    linkBtnClass = joinArrayString(linkBtnClass);

    return (
        <Collapsible className="flex flex-col">
            <CollapsibleTrigger
                className={triggerBtnClass}
                onClick={(e) => {
                    e.stopPropagation();
                }}>
                {children}
                <ChevronDown className="ms-[.75rem] transition-transform group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>

            <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                {items.map((item: NavigationItemNestedProps, i: number) => {
                    return (
                        <Button
                            key={i}
                            as="anchor"
                            className={linkBtnClass}
                            onClick={(e: any) => {
                                if (button?.onClick) button.onClick(e, item.href);
                            }}
                            {...item}
                        />
                    );
                })}
            </CollapsibleContent>
        </Collapsible>
    );
};

export default NavigationCollapsible;
