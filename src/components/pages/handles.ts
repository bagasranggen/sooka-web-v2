export const PAGES_TYPES_HANDLES = {
    PRODUCT_LISTING: 'Categories',
    PRODUCT_DETAIL: 'Products',
    CUSTOM_PAGE: 'Pages',
};

export const PAGES_TYPES = Object.values(PAGES_TYPES_HANDLES);

export const PAGES_HANDLES = {
    HOMEPAGE: 'sectionHomepage',
    PRODUCT_DETAIL: 'sectionProductIndex',
    PRODUCT_LISTING: 'sectionProductListingIndex',
    STATIC_PAGE: 'sectionStaticPage',
} as const;
