import React from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Button from '@/components/common/Button';
import List from '@/components/common/List';
import { NavigationItemProps } from '@/components/layout/Navigation';
import NavigationDropdown, { NavigationDropdownProps } from '@/components/layout/Navigation/NavigationDropdown';

export type NavigationMenuProps = {
    items?: NavigationItemProps[];
    dropdown?: Pick<NavigationDropdownProps, 'trigger' | 'active'>;
} & ClassnameProps;

const NavigationMenu = ({ items, className, dropdown }: NavigationMenuProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    let listClass: ArrayStringProps = ['space-x-3'];
    if (className) listClass.push(className);
    listClass = joinArrayString(listClass);

    const btnClass = 'uppercase text-[1.4rem] tracking-0.2 transition-colors hover:text-black';

    return (
        <List
            className={listClass}
            items={items.map((item: NavigationItemProps) => {
                const isNested = item?.child && item.child.length > 0;

                let children = (
                    <Button
                        as="anchor"
                        {...item}
                        className={btnClass}
                    />
                );

                if (isNested) {
                    children = (
                        <NavigationDropdown
                            className={btnClass}
                            items={item.child}
                            active={dropdown?.active}
                            trigger={dropdown?.trigger}>
                            {item.children}
                        </NavigationDropdown>
                    );
                }

                return { children };
            })}
        />
    );
};

export default NavigationMenu;
