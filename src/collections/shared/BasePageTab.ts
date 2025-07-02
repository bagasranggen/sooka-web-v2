import { Tab } from 'payload';
import { BaseTitle } from '@/collections/shared/BaseTitle';
import { BaseUrl, BaseUrlProps } from '@/collections/shared/BaseUrl';

export type BasePageTabProps = {
    typeHandle: string;
    withStatus?: boolean;
} & Pick<BaseUrlProps, 'updateUrl' | 'withUrl'>;

export const BasePageTab = (props?: BasePageTabProps): Tab => {
    return {
        label: 'Page',
        fields: [
            {
                type: 'row',
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
                        admin: {
                            width: props?.withStatus ? '90%' : '100%',
                        },
                    },
                    {
                        type: 'select',
                        name: 'entryStatus',
                        label: 'Status',
                        defaultValue: 'live',
                        options: [
                            {
                                value: 'disabled',
                                label: 'Disabled',
                            },
                            {
                                value: 'live',
                                label: 'Live',
                            },
                        ],
                        admin: {
                            hidden: !props?.withStatus,
                            width: '10%',
                        },
                    },
                ],
            },
            {
                type: 'row',
                fields: [...BaseTitle],
            },
            BaseUrl({
                withUrl: props?.withUrl,
                updateUrl: async (p) => {
                    if (props?.updateUrl) await props.updateUrl(p);
                },
            }),
        ],
    };
};
