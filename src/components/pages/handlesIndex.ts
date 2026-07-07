import { PAGES_HANDLES } from '@/components/pages/handles';

import StaticPageIndex from '@/components/pages/StaticPageIndex';
import HomepageIndex from '@/components/pages/HomepageIndex';
import ProductDetailIndex from '@/components/pages/ProductDetailIndex';
import ProductListingIndex from '@/components/pages/ProductListingIndex';

export const PAGES_INDEX_HANDLES = {
    [PAGES_HANDLES.HOMEPAGE]: HomepageIndex,
    [PAGES_HANDLES.PRODUCT_DETAIL]: ProductDetailIndex,
    [PAGES_HANDLES.PRODUCT_LISTING]: ProductListingIndex,
    [PAGES_HANDLES.STATIC_PAGE]: StaticPageIndex,
} as const;
