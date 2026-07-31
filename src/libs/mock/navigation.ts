import { NavigationProps } from '@/components/layout/Navigation';

export const NAVIGATION_LINKS: NavigationProps['items'] = [
    {
        href: '/cakes',
        children: 'cakes',
    },
    {
        href: '/products',
        children: 'cupcakes & tartlets',
        child: [
            {
                href: '/cakes',
                children: 'cakes',
            },
        ],
    },
    {
        href: '/custom-cakes',
        children: 'custom cakes',
    },
];
