import React from 'react';

import { useCheckSamePath } from '@/libs/hooks';

import Button from '@/components/common/Button';
import List from '@/components/common/List';
import { NavigationItemProps } from '@/components/layout/Navigation';
import NavigationCollapsible from '@/components/layout/Navigation/NavigationCollapsible';

export type NavigationMenuMobileProps = {
    items?: NavigationItemProps[];
    onSamePath?: () => void;
};

const NavigationMenuMobile = ({ items, onSamePath }: NavigationMenuMobileProps): React.ReactElement | null => {
    const { isSamePath } = useCheckSamePath();

    if (!items || items.length === 0) return null;

    const btnClass = 'uppercase font-semibold tracking-0.2 text-light';

    return (
        <List
            className="mt-10 text-center space-y-2"
            items={items.map((item: NavigationItemProps) => {
                const isNested = item?.child && item.child.length > 0;

                let children = (
                    <Button
                        as="anchor"
                        href={item.href}
                        className={btnClass}
                        onClick={(e) => {
                            e.stopPropagation();

                            if (isSamePath({ href: item?.href }) && onSamePath) onSamePath();
                        }}>
                        {item.children}
                    </Button>
                );

                if (isNested) {
                    children = (
                        <NavigationCollapsible
                            className={btnClass}
                            items={item.child}
                            button={{
                                onClick: (e, href) => {
                                    if (isSamePath({ href }) && onSamePath) onSamePath();
                                },
                            }}>
                            {item.children}
                        </NavigationCollapsible>
                    );
                }

                return { children };
            })}
        />
    );
};

export default NavigationMenuMobile;
