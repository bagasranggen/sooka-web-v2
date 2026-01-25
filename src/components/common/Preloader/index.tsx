import React, { PropsWithChildren } from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Icon from '@/components/common/Icon';
import Animation from '@/components/Animation';

export type PreloaderProps = PropsWithChildren<{}>;

const Preloader = ({ children }: PreloaderProps): React.ReactElement => {
    let preloaderClass: ArrayString = ['bg-sooka-primary'];
    preloaderClass.push('fixed top-0 left-0 w-full h-full z-1040');
    preloaderClass.push('flex items-center justify-center');
    preloaderClass.push('transition-transform duration-500');
    preloaderClass = joinArrayString(preloaderClass);

    return (
        <Animation type="preloader">
            <div className={preloaderClass}>
                <Animation
                    as="icon"
                    type="preloader">
                    <div className="max-w-[10vw] [&:not([style])]:invisible">
                        <Icon.Cake color="light" />
                    </div>
                </Animation>

                {children ? <div className="mt-2">{children}</div> : null}
            </div>
        </Animation>
    );
};

export default Preloader;
