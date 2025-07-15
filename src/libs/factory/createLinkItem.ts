import { Link } from '@/libs/@types';

export const createLinkItem = (item?: Link) => {
    let status = true;
    if (!item) status = false;

    let link = undefined;

    switch (item?.source) {
        case 'products':
            const product = item?.product && typeof item.product !== 'number' ? item.product : undefined;

            link = Object.assign({
                href: product?.url,
                label: item?.label || product?.title,
            });
            break;

        case 'categories':
            const category = item?.category && typeof item.category !== 'number' ? item.category : undefined;

            link = Object.assign({
                href: category?.url,
                label: item?.label || category?.title,
            });
            break;

        case 'pages':
            const page = item?.page && typeof item.page !== 'number' ? item.page : undefined;

            link = Object.assign({
                href: page?.url,
                label: item?.label || page?.title,
            });
            break;

        case 'mail':
            link = Object.assign({
                href: item?.mail ? `mailto:${item?.mail}` : undefined,
                label: item?.mail || item?.label,
            });
            break;

        default:
            link = Object.assign({
                href: item?.custom,
                label: item?.label,
            });
            break;
    }

    if (link && item?.target) {
        link = Object.assign({ ...link, target: '_blank' });
    }

    if (!link || !link?.href || !item?.source) status = false;

    return { linkIsValid: status, link };
};
