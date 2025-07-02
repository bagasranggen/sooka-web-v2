export const createLinkItem = (item: any) => {
    let status = true;
    if (!item) status = false;

    let link = undefined;

    const isProduct = item?.source === 'products';
    const product = item?.product;

    if (isProduct && product) {
        link = Object.assign({
            href: product?.url,
            label: product?.title,
        });
    }

    if (!isProduct) {
        link = Object.assign({
            href: item?.custom,
            label: item?.title,
        });
    }

    if (link && item?.target) {
        link = Object.assign({ ...link, target: '_blank' });
    }

    if (!link || !link?.href) status = false;

    return { linkIsValid: status, link };
};
