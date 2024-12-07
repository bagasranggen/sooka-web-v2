import React from 'react';

import { PageProps } from '@/libs/@types';

const Page = ({}: PageProps): React.ReactElement => {
    return (
        <>
            <section className="container">
                <h1 className="mt-1 text-md/[5rem] font-anglecia">HELLO WORLD</h1>
            </section>
        </>
    );
};

export default Page;
