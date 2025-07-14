export const PAGES_LIMIT_DEFAULT = -1;

export const PAGES_LIMIT_HANDLES = {
    limitPages: process.env.NEXT_PUBLIC_PRERENDER_LIMIT_PAGES
        ? parseInt(process.env.NEXT_PUBLIC_PRERENDER_LIMIT_PAGES)
        : PAGES_LIMIT_DEFAULT,
    limitProducts: process.env.NEXT_PUBLIC_PRERENDER_LIMIT_PRODUCTS
        ? parseInt(process.env.NEXT_PUBLIC_PRERENDER_LIMIT_PRODUCTS)
        : PAGES_LIMIT_DEFAULT,
    limitCategories: process.env.NEXT_PUBLIC_PRERENDER_LIMIT_CATEGORIES
        ? parseInt(process.env.NEXT_PUBLIC_PRERENDER_LIMIT_CATEGORIES)
        : PAGES_LIMIT_DEFAULT,
};
