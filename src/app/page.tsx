import React from 'react';

import { PageProps } from '@/libs/@types';

import HomepageIndex from '@/components/pages/HomepageIndex';
import { HomepageData } from '@/components/pages/HomepageIndex/data';

const Page = async ({}: PageProps): Promise<React.ReactElement> => {
    // const { entries } = await HomepageData();

    // return <HomepageIndex entries={entries} />;
    return <>HOME</>;
};

export default Page;

export const dynamic = 'force-dynamic';
