import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { ShoppingBasket } from 'lucide-react';

import Button, { BaseButtonProps } from '@/components/common/Button';
import Animation from '@/components/Animation';

export type NavigationCartProps = {
    button?: Pick<BaseButtonProps, 'className' | 'onClick'>;
    count?: number;
};

const NavigationCart = ({ button, count }: NavigationCartProps): React.ReactElement => {
    let buttonClass: ArrayStringProps = ['relative'];
    if (button?.className) buttonClass.push(button.className);
    buttonClass = joinArrayString(buttonClass);

    let countClass: ArrayStringProps = ['bg-sooka-secondary'];
    countClass.push('absolute -right-0.75 -top-0.75');
    countClass.push('text-[0.8rem] leading-0');
    countClass.push('p-[0.4rem] aspect-square');
    countClass.push('flex justify-center items-center');
    countClass = joinArrayString(countClass);

    return (
        <Button
            as="button"
            {...button}
            className={buttonClass}>
            <ShoppingBasket size={18} />

            {count && count > 0 ? (
                <Animation type="fade">
                    <div className={countClass}>{count}</div>
                </Animation>
            ) : null}
        </Button>
    );
};

export default NavigationCart;
