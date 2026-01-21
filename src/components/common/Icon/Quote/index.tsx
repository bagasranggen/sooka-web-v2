import React from 'react';
import { ArrayString, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type QuoteProps = {
    size?: 'md' | 'lg';
} & ClassnameProps;

const Quote = ({ size, className }: QuoteProps): React.ReactElement => {
    let iconClass: ArrayString = [];
    if (className) iconClass.push(className);
    iconClass = joinArrayString(iconClass);

    if (size === 'lg') {
        return (
            <svg
                {...(iconClass ? { className: iconClass } : {})}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="229"
                height="180"
                viewBox="0 0 229 180">
                <path
                    transform="matrix(1 0 0 1 0 0)"
                    d="M99.5 0L0 0L0 100L40 100C37.6431 139.252 24.2092 146.235 0.5 159C0.5 159 5.96909 173.636 10.5 180C75.3229 166.271 98.0709 119.7 99.5 83.5L99.5 0Z"
                    fillRule="nonzero"
                    fill="rgb(0, 0, 0)"
                />
                <path
                    transform="matrix(1 0 0 1 129.5 0)"
                    d="M99.5 0L0 0L0 100L40 100C37.6431 139.252 24.2092 146.235 0.5 159C0.5 159 5.96909 173.636 10.5 180C75.3229 166.271 98.0709 119.7 99.5 83.5L99.5 0Z"
                    fillRule="nonzero"
                    fill="rgb(0, 0, 0)"
                />
            </svg>
        );
    }

    return (
        <svg
            {...(iconClass ? { className: iconClass } : {})}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="125"
            height="100"
            viewBox="0 0 125 100">
            <path
                transform="matrix(1 0 0 1 0 0)"
                d="M55 0L0 0L0 55.5556L22.1106 55.5556C20.8078 77.3625 13.382 81.2414 0.276382 88.3333C0.276382 88.3333 3.29949 96.4643 5.80402 100C41.6358 92.3725 54.21 66.5002 55 46.3889L55 0Z"
                fillRule="nonzero"
                fill="rgb(0, 0, 0)"
            />
            <path
                transform="matrix(1 0 0 1 70 0)"
                d="M55 0L0 0L0 55.5556L22.1106 55.5556C20.8078 77.3625 13.382 81.2414 0.276382 88.3333C0.276382 88.3333 3.29949 96.4643 5.80402 100C41.6358 92.3725 54.21 66.5002 55 46.3889L55 0Z"
                fillRule="nonzero"
                fill="rgb(0, 0, 0)"
            />
        </svg>
    );
};

export default Quote;
