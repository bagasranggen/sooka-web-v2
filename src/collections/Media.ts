import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
    ],
    // upload: true,
    upload: {
        // staticDir: 'media',
        imageSizes: [
            {
                name: 'productDetailBanner',
                width: 1200,
                height: 900,
            },
            {
                name: 'productDetailSticky',
                width: 800,
                height: 1067,
            },
            {
                name: 'productDetailMobile',
                width: 600,
                height: 449,
            },
            {
                name: 'productListingThumbnail',
                width: 400,
                height: 619,
            },
            {
                name: 'productListingThumbnailMobile',
                width: 400,
                height: 400,
            },
        ],
    },
};
