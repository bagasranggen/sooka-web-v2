import React from 'react';

type CreateDynamicElementProps = {
    handles: { [key: string]: string | React.FunctionComponent<any> | React.ComponentClass<any, any> };
    selector: string;
    props: any;
    children?: React.ReactNode;
};

export const createDynamicElement = ({ handles, selector, props }: CreateDynamicElementProps) => {
    if (!handles?.[selector]) {
        if (process.env.NODE_ENV === 'development') {
            return `cannot render component with handle: ${selector}`;
        }

        return null;
    }

    return React.createElement(handles[selector], props, props?.children ?? null);
};
