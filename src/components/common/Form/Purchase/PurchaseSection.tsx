import React, { PropsWithChildren } from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Heading, { BaseProps } from '@/components/common/Heading';
import List from '@/components/common/List';
import Input, { BaseError, BlockProps } from '@/components/common/Input';
import Columns from '@/components/common/Columns';
import Picture from '@/components/common/Picture';
import { createPicsumImage } from '@/libs/factory';

export type PurchaseSectionItemProps = {
    label?: string;
    description?: string;
    price?: string;
} & Pick<BlockProps, 'id' | 'required' | 'type' | 'value' | 'checked'>;

export type PurchaseSectionProps = {
    label?: BaseProps['children'];
    items?: PurchaseSectionItemProps[];
} & (PropsWithChildren &
    ClassnameProps &
    Pick<BlockProps, 'name'> &
    Pick<BlockProps, 'error'> &
    Partial<Pick<NonNullable<BlockProps['hook']>, 'register'>>);

const PurchaseSection = ({
    className,
    items,
    name,
    register,
    error,
    label,
    children,
}: PurchaseSectionProps): React.ReactElement | null => {
    let headingClass: ArrayStringProps = ['uppercase tracking-0.2 font-black text-[1.2rem]'];
    if (className) headingClass.push(className);
    headingClass = joinArrayString(headingClass);

    return (
        <>
            <Heading
                as="h3"
                family="default"
                className={headingClass}>
                {label}:
            </Heading>

            {items && items.length > 0 && name && register && (
                <List
                    className="mt-1"
                    items={items.map((item, i) => {
                        return {
                            className: i !== 0 ? 'mt-1' : undefined,
                            children: (
                                <>
                                    <Input.Block
                                        id={item.id}
                                        type={item.type}
                                        value={item.value}
                                        checked={item.checked}
                                        labelClassName="peer-not-checked:[&_p:nth-child(2)]:text-dark/30 peer-checked:[&_p:nth-child(2)]:text-light/70"
                                        hook={{
                                            register,
                                            name: name,
                                            required: item?.required,
                                        }}>
                                        <Columns className="justify-between items-center">
                                            <Columns.Column md="auto">
                                                <div className="flex gap-2 ">
                                                    {/*<div>*/}
                                                    <Picture
                                                        items={[
                                                            createPicsumImage({
                                                                width: 80,
                                                                height: 80,
                                                                // media: 992,
                                                                // className:
                                                                //     'sticky top-0 object-cover lg:h-[calc(100vh-10rem)]',
                                                            }),
                                                        ]}
                                                    />
                                                    {/*</div>*/}
                                                    <div>
                                                        {item?.label && (
                                                            <p className={item?.description ? 'mb-0' : undefined}>
                                                                {item.label}
                                                            </p>
                                                        )}
                                                        {item?.description && (
                                                            <p className="input__description">{item.description}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </Columns.Column>

                                            <Columns.Column md="auto">
                                                {item?.price && <p>{item.price}</p>}
                                            </Columns.Column>
                                        </Columns>
                                    </Input.Block>

                                    <Input type="text" placeholder="Enter your message" />
                                </>
                            ),
                        };
                    })}
                />
            )}

            {children}

            <BaseError className="mt-0.5">{error}</BaseError>
        </>
    );
};

export default PurchaseSection;
