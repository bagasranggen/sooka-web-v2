'use client';

import React from 'react';

import { ClassnameProps, FormOnSubmitProps } from '@/libs/@types';

import { useForm } from 'react-hook-form';

import Input, { BaseInputSelectProps } from '@/components/common/Input';
import Button from '@/components/common/Button';
import Columns from '@/components/common/Columns';
import { CONFIRMATION_FORM_INPUT, ORDER_COLLECTIONS_OPTIONS } from '@/components/common/Form/Confirmation/handles';

export type ConfirmationFormFields = {
    orderDate: string;
    orderName: string;
    orderContact: string;
    orderContactRecipient: string;
    orderSelection: string;
    orderSelectionVariant: string;
    orderCollection: string;
    orderCollectionTime: string;
    orderPinPoint: string;
};

export type ConfirmationProps = {
    onSubmit?: FormOnSubmitProps<ConfirmationFormFields>;
    products?: BaseInputSelectProps['items'];
    productsVariant?: BaseInputSelectProps['items'];
} & ClassnameProps;

const Confirmation = ({ className, products, productsVariant, onSubmit }: ConfirmationProps): React.ReactElement => {
    const {
        register,
        getValues,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ConfirmationFormFields>({ mode: 'onChange' });

    const submitHandler = (data: ConfirmationFormFields) => {
        console.log(data);

        // if (onSubmit) onSubmit(data);
    };

    watch(CONFIRMATION_FORM_INPUT.ORDER_COLLECTION.NAME);

    return (
        <form
            className={className}
            onSubmit={handleSubmit(submitHandler)}>
            <Columns.Row
                className="mb-3"
                spacing={{ x: 3, y: 3 }}>
                <Columns.Column
                    width={{
                        xs: 4,
                        xl: 5,
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

                <Columns.Column
                    className="!basis-auto"
                    width={{ lg: 'auto' }}>
                    <Input.Label
                        type="tel"
                        id={CONFIRMATION_FORM_INPUT.ORDER_CONTACT.NAME}
                        label={CONFIRMATION_FORM_INPUT.ORDER_CONTACT.LABEL}
                        hook={{
                            register,
                            name: CONFIRMATION_FORM_INPUT.ORDER_CONTACT.NAME,
                            required: true,
                        }}
                        error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_CONTACT.NAME]?.message}
                    />
                </Columns.Column>

                <Columns.Column
                    className="!basis-auto"
                    width={{ lg: 'auto' }}>
                    <Input.Label
                        type="tel"
                        id={CONFIRMATION_FORM_INPUT.ORDER_CONTACT_RECIPIENT.NAME}
                        label={CONFIRMATION_FORM_INPUT.ORDER_CONTACT_RECIPIENT.LABEL}
                        hook={{
                            register,
                            name: CONFIRMATION_FORM_INPUT.ORDER_CONTACT_RECIPIENT.NAME,
                            // required: true,
                        }}
                        error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_CONTACT_RECIPIENT.NAME]?.message}
                    />
                </Columns.Column>
            </Columns.Row>

            {((products && products.length > 0) || (productsVariant && productsVariant.length > 0)) && (
                <Columns.Row
                    className="mb-3"
                    spacing={{ x: 3, y: 3 }}>
                    {products && products.length > 0 && (
                        <Columns.Column
                            width={{
                                xs: 8,
                                lg: 8,
                            }}>
                            <Input.Label
                                type="select"
                                id={CONFIRMATION_FORM_INPUT.ORDER_SELECTION.NAME}
                                label={CONFIRMATION_FORM_INPUT.ORDER_SELECTION.LABEL}
                                items={products}
                                hook={{
                                    register,
                                    name: CONFIRMATION_FORM_INPUT.ORDER_SELECTION.NAME,
                                    required: true,
                                }}
                                error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_SELECTION.NAME]?.message}
                            />
                        </Columns.Column>
                    )}

                    {productsVariant && productsVariant.length > 0 && (
                        <Columns.Column
                            width={{
                                xs: 4,
                                lg: 4,
                            }}>
                            <Input.Label
                                type="select"
                                id={CONFIRMATION_FORM_INPUT.ORDER_SELECTION_VARIANT.NAME}
                                label={CONFIRMATION_FORM_INPUT.ORDER_SELECTION_VARIANT.LABEL}
                                items={productsVariant}
                                hook={{
                                    register,
                                    name: CONFIRMATION_FORM_INPUT.ORDER_SELECTION_VARIANT.NAME,
                                    required: true,
                                }}
                                error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_SELECTION_VARIANT.NAME]?.message}
                            />
                        </Columns.Column>
                    )}
                </Columns.Row>
            )}

            <Columns.Row
                className="mb-3"
                spacing={{ x: 3, y: 3 }}>
                <Columns.Column
                    width={{
                        xs: 6,
                        lg: 6,
                    }}>
                    <Input.Label
                        type="select"
                        id={CONFIRMATION_FORM_INPUT.ORDER_COLLECTION.NAME}
                        label={CONFIRMATION_FORM_INPUT.ORDER_COLLECTION.LABEL}
                        items={ORDER_COLLECTIONS_OPTIONS}
                        hook={{
                            register,
                            name: CONFIRMATION_FORM_INPUT.ORDER_COLLECTION.NAME,
                            required: true,
                        }}
                        error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_COLLECTION.NAME]?.message}
                    />
                </Columns.Column>

                <Columns.Column
                    width={{
                        xs: 3,
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
                        xs: 3,
                        lg: 3,
                    }}>
                    <Input.Label
                        type="time"
                        id={CONFIRMATION_FORM_INPUT.ORDER_COLLECTION_TIME.NAME}
                        label={CONFIRMATION_FORM_INPUT.ORDER_COLLECTION_TIME.LABEL}
                        hook={{
                            register,
                            name: CONFIRMATION_FORM_INPUT.ORDER_COLLECTION_TIME.NAME,
                            required: true,
                        }}
                        error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_COLLECTION_TIME.NAME]?.message}
                    />
                </Columns.Column>
            </Columns.Row>

            {getValues(CONFIRMATION_FORM_INPUT.ORDER_COLLECTION.NAME) === 'delivery' && (
                <Columns.Row className="mb-3">
                    <Columns.Column>
                        <Input.Label
                            type="text"
                            id={CONFIRMATION_FORM_INPUT.ORDER_PIN_POINT.NAME}
                            label={CONFIRMATION_FORM_INPUT.ORDER_PIN_POINT.LABEL}
                            hook={{
                                register,
                                name: CONFIRMATION_FORM_INPUT.ORDER_PIN_POINT.NAME,
                                required: true,
                            }}
                            error={errors?.[CONFIRMATION_FORM_INPUT.ORDER_PIN_POINT.NAME]?.message}
                        />
                    </Columns.Column>
                </Columns.Row>
            )}

            <Button.Container
                className="mt-5 justify-end"
                items={[
                    {
                        children: (
                            <Button.Arrow
                                as="button"
                                type="submit"
                                size="lg">
                                Submit
                            </Button.Arrow>
                        ),
                    },
                ]}
            />
        </form>
    );
};

export default Confirmation;
