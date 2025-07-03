export const createLinkItem = (item: any) => {
    let status = true;
    if (!item) status = false;

    let link = undefined;

    switch (item?.source) {
        case 'products':
            const product = item?.product;

            link = Object.assign({
                href: product?.url,
                label: product?.title,
            });
            break;

        case 'categories':
            const category = item?.category;

            link = Object.assign({
                href: category?.url,
                label: category?.title,
            });
            break;

        default:
            link = Object.assign({
                href: item?.custom,
                label: item?.title,
            });
            break;
    }

    if (link && item?.target) {
        link = Object.assign({ ...link, target: '_blank' });
    }

    if (!link || !link?.href) status = false;

    return { linkIsValid: status, link };
};
