import { Tab } from 'payload';
import { BaseTitle } from '@/collections/shared/BaseTitle';

export const BasePageTab: Tab = {
    label: 'Page',
    fields: [
        {
            type: 'row',
            fields: [...BaseTitle],
        },
    ],
};
