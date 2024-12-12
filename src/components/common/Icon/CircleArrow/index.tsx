import React from 'react';
import { ArrayString, PropsClassname } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

export type CircleArrowProps = {
    direction?: 'left' | 'right';
} & PropsClassname;

const CircleArrow = ({ direction = 'right', className }: CircleArrowProps): React.ReactElement => {
    let iconClass: ArrayString = [];
    if (className) iconClass.push(className);
    iconClass = joinArrayString(iconClass);

    if (direction === 'left') {
        return (
            <svg
                {...(iconClass ? { className: iconClass } : {})}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="90"
                height="90"
                viewBox="0 0 90 90">
                <path
                    transform="matrix(-0.707107 -0.707107 0.707107 -0.707107 44.8579 59)"
                    d="M16.2876 -0.190748Q14.7945 -0.191862 12.6442 -0.495101L12.5046 0.495101Q14.7239 0.808085 16.2868 0.809251Q17.3204 0.810022 18.617 0.675857L-0.353553 19.6464L0.353553 20.3536L19.3467 1.36039Q19.2259 2.67553 19.2283 3.7334Q19.2319 5.26461 19.5037 7.4863L20.4963 7.36486Q20.2317 5.20249 20.2283 3.73107Q20.2247 2.19275 20.496 0.0631776L20.579 -0.588107L19.929 -0.49494Q17.7992 -0.189621 16.2876 -0.190748Z"
                    fillRule="evenodd"
                    fill="rgb(0, 0, 0)"
                />
                <path
                    transform="matrix(-1 0 0 -1 90 90)"
                    d="M90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90C69.8528 90 90 69.8528 90 45ZM36.1314 1.89394Q40.5 0.999997 45 0.999996Q49.5 1 53.8686 1.89394Q58.1254 2.765 62.1265 4.45733Q66.0553 6.11908 69.6001 8.51392Q73.1117 10.8863 76.1127 13.8873Q79.1137 16.8883 81.4861 20.3999Q83.881 23.9447 85.5427 27.8735Q87.235 31.8747 88.1061 36.1314Q89 40.4999 89 45Q89 49.5001 88.1061 53.8686Q87.235 58.1253 85.5427 62.1265Q83.881 66.0553 81.4861 69.6001Q79.1137 73.1117 76.1127 76.1127Q73.1117 79.1137 69.6001 81.4861Q66.0553 83.881 62.1265 85.5427Q58.1253 87.235 53.8686 88.1061Q49.5001 89 45 89Q40.4999 89 36.1314 88.1061Q31.8747 87.235 27.8735 85.5427Q23.9447 83.881 20.3999 81.4861Q16.8883 79.1137 13.8873 76.1127Q10.8863 73.1117 8.51391 69.6001Q6.11909 66.0553 4.45733 62.1265Q2.765 58.1253 1.89394 53.8686Q0.999997 49.5 0.999996 45Q1 40.5 1.89394 36.1314Q2.765 31.8746 4.45733 27.8735Q6.11907 23.9447 8.51392 20.3999Q10.8863 16.8883 13.8873 13.8873Q16.8883 10.8863 20.3999 8.51391Q23.9447 6.11908 27.8735 4.45733Q31.8746 2.765 36.1314 1.89394Z"
                    fillRule="evenodd"
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
            width="90"
            height="90"
            viewBox="0 0 90 90">
            <path
                transform="matrix(0.707107 0.707107 -0.707107 0.707107 45.1421 31)"
                d="M16.2876 -0.190748Q14.7945 -0.191862 12.6442 -0.495101L12.5046 0.495101Q14.7239 0.808085 16.2868 0.809251Q17.3204 0.810022 18.617 0.675857L-0.353553 19.6464L0.353553 20.3536L19.3467 1.36039Q19.2259 2.67553 19.2283 3.7334Q19.2319 5.26461 19.5037 7.4863L20.4963 7.36486Q20.2317 5.20249 20.2283 3.73107Q20.2247 2.19275 20.496 0.0631776L20.579 -0.588107L19.929 -0.49494Q17.7992 -0.189621 16.2876 -0.190748Z"
                fillRule="evenodd"
                fill="rgb(0, 0, 0)"
            />
            <path
                transform="matrix(1 0 0 1 0 0)"
                d="M90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90C69.8528 90 90 69.8528 90 45ZM36.1314 1.89394Q40.5 0.999997 45 0.999996Q49.5 1 53.8686 1.89394Q58.1254 2.765 62.1265 4.45733Q66.0553 6.11908 69.6001 8.51392Q73.1117 10.8863 76.1127 13.8873Q79.1137 16.8883 81.4861 20.3999Q83.881 23.9447 85.5427 27.8735Q87.235 31.8747 88.1061 36.1314Q89 40.4999 89 45Q89 49.5001 88.1061 53.8686Q87.235 58.1253 85.5427 62.1265Q83.881 66.0553 81.4861 69.6001Q79.1137 73.1117 76.1127 76.1127Q73.1117 79.1137 69.6001 81.4861Q66.0553 83.881 62.1265 85.5427Q58.1253 87.235 53.8686 88.1061Q49.5001 89 45 89Q40.4999 89 36.1314 88.1061Q31.8747 87.235 27.8735 85.5427Q23.9447 83.881 20.3999 81.4861Q16.8883 79.1137 13.8873 76.1127Q10.8863 73.1117 8.51391 69.6001Q6.11909 66.0553 4.45733 62.1265Q2.765 58.1253 1.89394 53.8686Q0.999997 49.5 0.999996 45Q1 40.5 1.89394 36.1314Q2.765 31.8746 4.45733 27.8735Q6.11907 23.9447 8.51392 20.3999Q10.8863 16.8883 13.8873 13.8873Q16.8883 10.8863 20.3999 8.51391Q23.9447 6.11908 27.8735 4.45733Q31.8746 2.765 36.1314 1.89394Z"
                fillRule="evenodd"
                fill="rgb(0, 0, 0)"
            />
        </svg>
    );
};

export default CircleArrow;