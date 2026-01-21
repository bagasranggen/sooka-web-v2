'use client';

import React from 'react';

import { FormOnSubmitProps } from '@/libs/@types';

import { useForm } from 'react-hook-form';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Columns from '@/components/common/Columns';
import { CONFIRMATION_FORM_HANDLE, CONFIRMATION_FORM_INPUT } from '@/components/common/Form/Confirmation/handles';

export type ConfirmationFormFields = {
    orderDate: string;
    orderName: string;
};

export type ConfirmationProps = {
    onSubmit?: FormOnSubmitProps<ConfirmationFormFields>;
};

const Confirmation = ({ onSubmit }: ConfirmationProps): React.ReactElement => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ConfirmationFormFields>();

    const submitHandler = (data: ConfirmationFormFields) => {
        console.log(data);

        // if (onSubmit) onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <Columns.Row>
                <Columns.Column
                    width={{
                        xs: 2,
                        lg: 3,
                    }}>
                    <Input.Label
                        type="date"
                        id={CONFIRMATION_FORM_INPUT.ORDER_DATE.NAME}
                        label={CONFIRMATION_FORM_INPUT.ORDER_DATE.LABEL}
                        hook={{
                            register,
                            name: CONFIRMATION_FORM_INPUT.ORDER_DATE.NAME,
                            required: true,
                        }}
                        error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_DATE.NAME]?.message}
                    />
                </Columns.Column>

                <Columns.Column
                    width={{
                        xs: 4,
                        lg: 4,
                    }}>
                    <Input.Label
                        type="text"
                        id={CONFIRMATION_FORM_INPUT.ORDER_NAME.NAME}
                        label={CONFIRMATION_FORM_INPUT.ORDER_NAME.LABEL}
                        hook={{
                            register,
                            name: CONFIRMATION_FORM_INPUT.ORDER_NAME.NAME,
                            required: true,
                        }}
                        error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_NAME.NAME]?.message}
                    />
                </Columns.Column>

                {/*<Columns.Column*/}
                {/*    width={{*/}
                {/*        xs: 4,*/}
                {/*        lg: 4,*/}
                {/*    }}>*/}
                {/*    <Input.Label*/}
                {/*        type="text"*/}
                {/*        id="orderDate"*/}
                {/*        label="Order Date"*/}
                {/*        hook={{*/}
                {/*            register,*/}
                {/*            name: 'orderDate',*/}
                {/*            required: true,*/}
                {/*        }}*/}
                {/*        error={errors?.orderDate?.message}*/}
                {/*    />*/}
                {/*</Columns.Column>*/}
            </Columns.Row>

            <Button
                as="button"
                type="submit"
                className="mt-2">
                Submit
            </Button>
        </form>
    );
};

export default Confirmation;
