import React from 'react';

import { PageProps } from '@/libs/@types';

import HomepageIndex from '@/pages/HomepageIndex';
import { HomepageData } from '@/pages/HomepageIndex/data';

const Page = ({}: PageProps): React.ReactElement => {
    const { entries } = HomepageData();

    return <HomepageIndex entries={entries} />;
};

export default Page;
