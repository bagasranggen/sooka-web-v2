import { CbCalloutProps } from '@/components/common/ContentBlocks/CbCallout';
import { createLinkItem } from '../../../../libs/factory/createLinkItem';

export const CbCalloutData = (props: any) => {
    const { linkIsValid, link } = createLinkItem(props?.link);

    let cta: CbCalloutProps['cta'] = undefined;
    if (linkIsValid) cta = { ...link, children: link.label };

    return { cta };
};
