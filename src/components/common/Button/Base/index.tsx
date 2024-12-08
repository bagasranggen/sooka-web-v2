import React from 'react';
import Link, { LinkProps } from '@/components/common/Link';

export type BaseAnchorProps = {
    as?: 'anchor';
    linkAs?: LinkProps['as'];
} & Omit<LinkProps, 'as'>;

export type BaseButtonProps = {
    as?: 'button';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type BaseProps = BaseAnchorProps | BaseButtonProps;

const Base = (props: BaseProps): React.ReactElement => {
    switch (props?.as) {
        case 'anchor':
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { as, linkAs, ...restAnchor } = props;

            return (
                <Link
                    as={linkAs}
                    {...restAnchor}
                />
            );

        default:
            const { className, children } = props;
            return <div className={className}>{children}</div>;
    }
};

export default Base;