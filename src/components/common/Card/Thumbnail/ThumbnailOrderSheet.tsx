import React from 'react';

import { Sheet, SheetContent } from '@/components/shadcn/Sheet';
import Heading from '@/components/common/Heading';
import Picture from '@/components/common/Picture';
import { createPicsumImage } from '@/libs/factory';

export type ThumbnailOrderSheetProps = {} & Pick<React.ComponentPropsWithoutRef<typeof Sheet>, 'open'>;

const ThumbnailOrderSheet = ({ open }: ThumbnailOrderSheetProps): React.ReactElement => {
    return (
        <Sheet open={open}>
            <SheetContent
                side="bottom"
                showCloseButton={false}
                className="p-0 border-t-0">
                <Picture
                    items={[
                        createPicsumImage({
                            width: 1000,
                            height: 800,
                            media: 992,
                            className: 'sticky top-0 object-cover lg:h-[calc(100vh-10rem)]',
                        }),
                        createPicsumImage({
                            width: 800,
                            height: 400,
                            media: 992,
                            className: 'sticky top-0 object-cover lg:h-[calc(100vh-10rem)]',
                        }),
                    ]}
                />

                <div className="p-2">
                    <Heading
                        as="h2"
                        size="callout">
                        Lorem ipsum dolor sit amet.
                    </Heading>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta illum iusto natus quia
                        recusandae soluta tempore voluptatem. Deserunt dolores exercitationem impedit iusto laboriosam
                        libero quas quis quos, rem voluptatem!
                    </p>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default ThumbnailOrderSheet;
