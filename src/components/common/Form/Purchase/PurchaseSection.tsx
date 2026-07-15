import React, { PropsWithChildren } from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { UseFormGetValues } from 'react-hook-form';

import Heading, { BaseProps } from '@/components/common/Heading';
import List from '@/components/common/List';
import Input, { BaseProps as BaseInputProps, BaseError, BlockProps } from '@/components/common/Input';
import Columns from '@/components/common/Columns';
import Picture, { BaseProps as BasePictureProps } from '@/components/common/Picture';
import DynamicWrapper from '@/components/common/DynamicWrapper';
import Animation from '@/components/Animation';

export type PurchaseSectionItemProps = {
    label?: string;
    description?: string;
    price?: string;
    media?: BasePictureProps['items'];
    hasExtraNote?: boolean;
    input?: Pick<BaseInputProps, 'placeholder'>;
} & Pick<BlockProps, 'id' | 'required' | 'type' | 'value' | 'checked'>;

export type PurchaseSectionProps = {
    label?: BaseProps['children'];
    getValues?: UseFormGetValues<any>;
    items?: PurchaseSectionItemProps[];
} & (PropsWithChildren &
    ClassnameProps &
    Pick<BlockProps, 'name'> &
    Pick<BlockProps, 'error'> &
    Partial<Pick<NonNullable<BlockProps['hook']>, 'register'>>);

const PurchaseSection = ({
    getValues,
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

    const active = getValues && name ? getValues(name) : undefined;

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
                        const hasMedia = !!(item?.media && item.media.length > 0);

                        let columnContentClass: ArrayStringProps = [];
                        if (hasMedia) columnContentClass.push('flex gap-1.5');
                        columnContentClass = joinArrayString(columnContentClass);

                        let titleClass: ArrayStringProps = [];
                        if (item?.description || item?.input) titleClass.push('mb-0');
                        titleClass = joinArrayString(titleClass);

                        let isActive = false;
                        if (active && Array.isArray(active)) {
                            active.forEach((itm) => {
                                if (itm === item.value) isActive = true;
                            });
                        }

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
                                        <Columns
                                            gutterY={1}
                                            className="justify-between items-center">
                                            <Columns.Column className={columnContentClass}>
                                                {item?.media && (
                                                    <Picture
                                                        items={item.media}
                                                        className="mt-0.5 md:mt-0 w-8 min-w-8"
                                                    />
                                                )}

                                                <DynamicWrapper
                                                    as={hasMedia ? 'div' : undefined}
                                                    className="grow mt-0.5 md:mt-0">
                                                    {item?.label && <p className={titleClass}>{item.label}</p>}

                                                    {item?.description && (
                                                        <p className="text-[1.4rem] leading-1.5 mb-0">
                                                            {item.description}
                                                        </p>
                                                    )}

                                                    {isActive && item?.input && (
                                                        <Animation type="fade">
                                                            <div>
                                                                <small className="block mt-1 -mb-0.5 text-sm">
                                                                    Note:
                                                                </small>
                                                                <Input
                                                                    type="text"
                                                                    className="w-full text-[1.4rem] focus-visible:outline-none border-b"
                                                                    placeholder={item.input.placeholder}
                                                                    hook={{
                                                                        name: `${name}_${item.id}_note`,
                                                                        register,
                                                                    }}
                                                                />
                                                            </div>
                                                        </Animation>
                                                    )}
                                                </DynamicWrapper>
                                            </Columns.Column>

                                            <Columns.Column sm="auto">
                                                {item?.price && (
                                                    <p className="uppercase tracking-0.1 font-bold md:text-[1.4rem] leading-1.5">
                                                        {item.price}
                                                    </p>
                                                )}
                                            </Columns.Column>
                                        </Columns>
                                    </Input.Block>
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
