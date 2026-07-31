import { PAGES_HANDLES } from '@/components/pages/handles';

import { StaticPageData } from '@/components/pages/StaticPageIndex/data';
import { HomepageData } from '@/components/pages/HomepageIndex/data';
import { ProductDetailData } from '@/components/pages/ProductDetailIndex/data';
import { ProductListingData } from '@/components/pages/ProductListingIndex/data';

export const PAGES_DATA_HANDLES = {
    [PAGES_HANDLES.HOMEPAGE]: HomepageData,
    [PAGES_HANDLES.PRODUCT_DETAIL]: ProductDetailData,
    [PAGES_HANDLES.PRODUCT_LISTING]: ProductListingData,
    [PAGES_HANDLES.STATIC_PAGE]: StaticPageData,
} as const;
