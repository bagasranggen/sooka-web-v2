import React from 'react';

import { PageProps } from '@/libs/@types';

import CustomPageIndex from '@/components/pages/CustomPageIndex';
import { CustomPageData } from '@/components/pages/CustomPageIndex/data';

const Page = async ({}: PageProps): Promise<React.ReactElement> => {
    const { entries } = await CustomPageData();

    return <CustomPageIndex entries={entries} />;
};

export default Page;
