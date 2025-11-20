import React from 'react';

import Base, { BaseProps } from '@/components/common/List';
import Picture, { BaseProps as PictureBaseProps } from '@/components/common/Picture';
import Heading, { BaseProps as HeadingBaseProps } from '@/components/common/Heading';

export type ThumbnailItemProps = {
    media: PictureBaseProps['items'];
    title: HeadingBaseProps['children'];
    description?: React.ReactNode;
};

export type ThumbnailProps = {
    items: ThumbnailItemProps[];
} & Pick<BaseProps, 'className'>;

const Thumbnail = ({ items, ...props }: ThumbnailProps): React.ReactElement => {
    return (
        <Base
            {...props}
            items={items.map((item: ThumbnailItemProps) => {
                return {
                    className: 'border-black last:border-b border-t py-2',
                    children: (
                        <div className="flex">
                            <div className="w-[13rem] min-w-[13rem]">
                                {item?.media && <Picture items={item.media} />}
                            </div>

                            <div className="ms-2">
                                <Heading
                                    as="h4"
                                    family="default"
                                    className="text-base lg:text-[1.8rem] font-bold tracking-0.4 leading-none uppercase">
                                    {item.title}
                                </Heading>

                                {item?.description && <div className="mt-1">{item.description}</div>}
                            </div>
                        </div>
                    ),
                };
            })}
        />
    );
};

export default Thumbnail;
