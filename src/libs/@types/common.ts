import React, { JSX } from 'react';

export type ObjectProps<Props> = { [key: string]: Props };

export type PageProps = {
    params: Promise<ObjectProps<string | string[]>>;
    searchParams?: Promise<ObjectProps<string | string[] | undefined>>;
};

export type Component<Props> = { (props: Props): React.ReactElement | null };

export type RefComponent<Props, Element> = React.ForwardRefExoticComponent<Props & React.RefAttributes<Element>>;

export type PropsClassname = { className?: string };

export type ArrayString = string[] | string;

export type ElementTagsProps = keyof JSX.IntrinsicElements;

export type ResponsiveProps = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
