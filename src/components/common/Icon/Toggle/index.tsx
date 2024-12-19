import React from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type ToggleProps = {
    active?: boolean;
};

const Toggle = ({ active }: ToggleProps): React.ReactElement => {
    let toggleClass: ArrayString = ['h-[.2rem] bg-white transition-width duration-300'];
    toggleClass.push('w-full');
    toggleClass.push('[&:nth-child(2).active]:w-8/12');
    toggleClass.push('[&.active]:last:w-4/12');
    if (active) toggleClass.push('active');
    toggleClass = joinArrayString(toggleClass);

    return (
        <div className="flex flex-col items-end w-3 gap-0.5">
            <span className={toggleClass} />
            <span className={toggleClass} />
            <span className={toggleClass} />
        </div>
    );
};

export default Toggle;
