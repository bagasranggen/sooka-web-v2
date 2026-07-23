import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { ShoppingBasket } from 'lucide-react';

import Button, { BaseButtonProps } from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import Animation from '@/components/Animation';

export type MainCartButtonProps = {
    count?: number;
    price?: React.ReactNode;
} & Pick<BaseButtonProps, 'className' | 'onClick'>;

const MainCartButton = ({ price, count, className, onClick }: MainCartButtonProps): React.ReactElement | null => {
    let btnClass: ArrayStringProps = ['flex items-center px-1 py-0.75'];
    btnClass.push('md:transition-colors');
    btnClass.push('bg-sooka-secondary md:hover:bg-sooka-secondary/80');
    btnClass.push('text-dark/80');
    if (className) btnClass.push(className);
    btnClass = joinArrayString(btnClass);

    if (!count || count === 0) return null;

    return (
        <Animation type="fade">
            <Button
                as="button"
                className={btnClass}
                onClick={onClick}>
                <div className="flex">
                    {count && count > 0 ? (
                        <div className="bg-light font-black flex justify-center items-center px-1 max-md:text-[1.4rem]">
                            {count}
                        </div>
                    ) : null}

                    <div className="text-start leading-none ms-1">
                        <Heading
                            as="h2"
                            family="default"
                            className="uppercase text-[1.4rem] md:text-[1.6rem] font-black tracking-0.2 md:tracking-0.3">
                            Cart
                        </Heading>
                        {price && (
                            <p className="uppercase text-[1.2rem] md:text-[1.4rem] font-black tracking-0.1">{price}</p>
                        )}
                    </div>
                </div>

                <div className="ms-3 me-0.5">
                    <ShoppingBasket
                        // size={22}
                        className="size-2 md:size-[2.2rem]"
                    />
                </div>
            </Button>
        </Animation>
    );
};

export default MainCartButton;
