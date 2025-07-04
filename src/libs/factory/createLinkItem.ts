export const createLinkItem = (item: any) => {
    let status = true;
    if (!item) status = false;

    let link = undefined;

    switch (item?.source) {
        case 'products':
            const product = item?.product;

            link = Object.assign({
                href: product?.url,
                label: item?.label ?? product?.title,
            });
            break;

        case 'categories':
            const category = item?.category;

            link = Object.assign({
                href: category?.url,
                label: item?.label ?? category?.title,
            });
            break;

        case 'pages':
            const page = item?.page;

            link = Object.assign({
                href: page?.url,
                label: item?.label ?? page?.title,
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

    if (!link || !link?.href) status = false;

    return { linkIsValid: status, link };
};
