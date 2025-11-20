export const PAGES_TYPES_HANDLES = {
    PRODUCT_LISTING: 'Categories',
    PRODUCT_DETAIL: 'Products',
    CUSTOM_PAGE: 'Pages',
};

export const PAGES_TYPES = Object.values(PAGES_TYPES_HANDLES);

export const PAGES_HANDLES = {
    CUSTOM_PAGE: 'typeSectionPagesIndex',
    HOMEPAGE: 'typeSectionHomepageIndex',
    PRODUCT_DETAIL: 'typeSectionProductsIndex',
    PRODUCT_LISTING: 'typeSectionCategoriesIndex',
} as const;
