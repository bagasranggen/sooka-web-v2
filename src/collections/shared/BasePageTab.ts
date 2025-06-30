import { Tab } from 'payload';
import { BaseTitle } from '@/collections/shared/BaseTitle';
import { BaseUrl, BaseUrlProps } from '@/collections/shared/BaseUrl';

export type BasePageTabProps = {
    typeHandle: string;
} & Pick<BaseUrlProps, 'updateUrl'>;

export const BasePageTab = (props?: BasePageTabProps): Tab => {
    return {
        label: 'Page',
        fields: [
            {
                type: 'text',
                name: 'typeHandle',
                label: 'Type',
                defaultValue: props?.typeHandle ?? '',
                access: {
                    update: () => false,
                    create: () => false,
                },
                hooks: {
                    beforeChange: [() => props?.typeHandle ?? ''],
                },
            },
            {
                type: 'row',
                fields: [...BaseTitle],
            },
            BaseUrl({
                updateUrl: async (p) => {
                    if (props?.updateUrl) await props.updateUrl(p);
                },
            }),
        ],
    };
};
