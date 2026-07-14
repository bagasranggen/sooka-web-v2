import React from 'react';

import { Sheet, SheetContent } from '@/components/shadcn/Sheet';

import Heading from '@/components/common/Heading';
import Picture, { BaseProps } from '@/components/common/Picture';
import Carousel from '@/components/common/Carousel';
import Form, { PurchaseProps } from '@/components/common/Form';

export type ThumbnailOrderSheetProps = {
    media?: BaseProps['items'][];
    form?: PurchaseProps;
} & Pick<React.ComponentPropsWithoutRef<typeof Sheet>, 'open'>;

const ThumbnailOrderSheet = ({ open, form, media }: ThumbnailOrderSheetProps): React.ReactElement => {
    return (
        <Sheet open={open}>
            <SheetContent
                side="bottom"
                showCloseButton={false}
                className="p-0 border-t-0 max-h-[80dvh] overflow-y-auto">
                {media && media.length > 0 && (
                    // <div className="sticky top-0">
                    <Carousel.Fade
                        // className="lg:h-[calc(100vh-10rem)]"
                        // options={{
                        //     loop: true,
                        //     breakpoints: {
                        //         768: {
                        //             slidesPerView: 1,
                        //             spaceBetween: 0,
                        //         },
                        //     },
                        // }}
                        items={media.map((item) => {
                            return {
                                children: <Picture items={item} />,
                            };
                        })}
                    />
                    // </div>
                )}
                {/*<Picture*/}
                {/*    items={[*/}
                {/*        createPicsumImage({*/}
                {/*            width: 1000,*/}
                {/*            height: 800,*/}
                {/*            media: 992,*/}
                {/*            // className: 'sticky top-0 object-cover lg:h-[calc(100vh-10rem)]',*/}
                {/*        }),*/}
                {/*        createPicsumImage({*/}
                {/*            width: 800,*/}
                {/*            height: 400,*/}
                {/*            media: 992,*/}
                {/*            // className: 'sticky top-0 object-cover lg:h-[calc(100vh-10rem)]',*/}
                {/*        }),*/}
                {/*    ]}*/}
                {/*/>*/}

                <div className="py-2 px-1">
                    {/*<Heading*/}
                    {/*    as="h2"*/}
                    {/*    size="callout">*/}
                    {/*    Lorem ipsum dolor sit amet.*/}
                    {/*</Heading>*/}

                    <Heading
                        as="h2"
                        className="text-[2.5rem] leading-2.5 font-medium">
                        Lorem ipsum dolor sit amet.
                    </Heading>

                    <div className="mt-2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta illum iusto natus quia
                            recusandae soluta tempore voluptatem. Deserunt dolores exercitationem impedit iusto
                            laboriosam libero quas quis quos, rem voluptatem!
                        </p>

                        <Form.Purchase
                            className="mt-3"
                            {...form}
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default ThumbnailOrderSheet;
