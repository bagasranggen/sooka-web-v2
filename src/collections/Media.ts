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
