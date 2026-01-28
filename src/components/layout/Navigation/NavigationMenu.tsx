import React from 'react';

import Button from '@/components/common/Button';
import List from '@/components/common/List';
import { NavigationItemProps } from '@/components/layout/Navigation';
import NavigationDropdown from '@/components/layout/Navigation/NavigationDropdown';

export type NavigationMenuProps = { items?: NavigationItemProps[] };

const NavigationMenu = ({ items }: NavigationMenuProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    return (
        <List
            className="hidden md:flex space-x-3"
            items={items.map((item: NavigationItemProps) => {
                const isNested = item?.child && item.child.length > 0;

                let children = (
                    <Button
                        as="anchor"
                        {...item}
                        className="uppercase text-[1.4rem] tracking-0.2 transition-colors hover:text-black"
                    />
                );

                if (isNested) {
                    children = (
                        <NavigationDropdown
                            className="uppercase text-[1.4rem] tracking-0.2 transition-colors hover:text-black"
                            items={item.child}>
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
