import React from 'react';

import { Minus, Plus } from 'lucide-react';

import Button, { BaseButtonProps } from '@/components/common/Button';
import Input, { BaseInputProps } from '@/components/common/Input';

export type QuantityButtonProps = Pick<BaseButtonProps, 'onClick' | 'disabled' | 'type'>;

export type QuantityProps = {
    input?: BaseInputProps;
} & Partial<Record<'decrement' | 'increment', QuantityButtonProps>>;

const Quantity = ({ decrement, increment, input }: QuantityProps): React.ReactElement => {
    return (
        <div className="quantity">
            <Button
                as="button"
                className="quantity__btn"
                {...decrement}>
                <Minus size={15} />
            </Button>

            <div className="quantity__text">{input && <Input {...input} />}</div>

            <Button
                as="button"
                className="quantity__btn"
                {...increment}>
                <Plus size={15} />
            </Button>
        </div>
    );
};

export default Quantity;
