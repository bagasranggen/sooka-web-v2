import React, { PropsWithChildren } from 'react';

import Columns from '@/components/common/Columns';
import Heading, { BaseProps } from '@/components/common/Heading';
import Button, { BaseButtonProps } from '@/components/common/Button';

export type HalfMediaVariantItemProps = {
    title: BaseProps['children'];
    price: React.ReactNode;
};

export type HalfMediaVariantsProps = {
    items: HalfMediaVariantItemProps[];
    disabled?: boolean;
    notes?: string;
    button?: Pick<BaseButtonProps, 'onClick'>;
} & PropsWithChildren;

const HalfMediaVariants = ({
    items,
    disabled,
    notes,
    button,
    children,
}: HalfMediaVariantsProps): React.ReactElement => {
    return (
        <div className="mt-3">
            <Columns className="lg:justify-end">
                <Columns.Column lg={8}>
                    {children && (
                        <Heading
                            as="h4"
                            className="md:mb-1 text-md md:text-[2.4rem] lg:text-[3.7rem] text-center">
                            {children}
                        </Heading>
                    )}

                    {items && items.length > 0 && (
                        <Columns
                            gutterX={4}
                            gutterY={2}
                            className="justify-center">
                            {items.map((item: HalfMediaVariantItemProps, i: number) => {
                                if (!item?.title || !item?.price) return null;

                                return (
                                    <Columns.Column
                                        key={i}
                                        xs={'auto'}
                                        className="text-center">
                                        <Heading
                                            as="h5"
                                            family="default"
                                            className="uppercase font-bold text-[1.4rem] tracking-0.2">
                                            {item.title}
                                        </Heading>

                                        <p className="uppercase font-semibold text-[1.6rem] tracking-0.1">
                                            {item.price}
                                        </p>
                                    </Columns.Column>
                                );
                            })}
                        </Columns>
                    )}

                    {!disabled && (
                        <Button.Container
                            className="mt-3 justify-center"
                            items={[
                                {
                                    children: (
                                        <Button.Arrow
                                            as="button"
                                            {...button}>
                                            Order Now
                                        </Button.Arrow>
                                    ),
                                },
                            ]}
                        />
                    )}

                    {disabled && notes && (
                        <p className="mt-3 lg:mt-4 uppercase text-[2.5rem] text-center tracking-0.4 font-semibold">
                            {notes}
                        </p>
                    )}
                </Columns.Column>
            </Columns>
        </div>
    );
};

export default HalfMediaVariants;
