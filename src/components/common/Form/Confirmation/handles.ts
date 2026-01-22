import { createFormInputHandle } from '@/libs/factory';
import { getObjectKeyByValue } from '@/libs/utils';

import type { ConfirmationFormFields } from '@/components/common/Form/Confirmation';
import { BaseInputSelectProps } from '@/components/common/Input/shared/InputSelect';

export const CONFIRMATION_FORM_KEYS = [
    'ORDER_DATE',
    'ORDER_NAME',
    'ORDER_CONTACT',
    'ORDER_CONTACT_RECIPIENT',
    'ORDER_COLLECTION',
    'ORDER_COLLECTION_TIME',
    'ORDER_PIN_POINT',
    'ORDER_SELECTION',
    'ORDER_SELECTION_TITLE',
    'ORDER_SELECTION_VARIANT',
    'ORDER_SELECTION_PRICE',
    'ORDER_SELECTION_ADDON',
    'ORDER_SELECTION_ADDON_PRICE',
    'ORDER_SELECTION_TOTAL_PRICE',
    'ORDER_NOTES',
] as const;

export const CONFIRMATION_FORM_HANDLE: Record<string, keyof ConfirmationFormFields> = {
    ORDER_DATE: 'orderDate',
    ORDER_NAME: 'orderName',
    ORDER_CONTACT: 'orderContact',
    ORDER_CONTACT_RECIPIENT: 'orderContactRecipient',
    ORDER_COLLECTION: 'orderCollection',
    ORDER_COLLECTION_TIME: 'orderCollectionTime',
    ORDER_PIN_POINT: 'orderPinPoint',
    ORDER_SELECTION: 'orderSelection',
    ORDER_SELECTION_TITLE: 'orderSelectionTitle',
    ORDER_SELECTION_VARIANT: 'orderSelectionVariant',
    ORDER_SELECTION_PRICE: 'orderSelectionPrice',
    ORDER_SELECTION_ADDON: 'orderSelectionAddon',
    ORDER_SELECTION_ADDON_PRICE: 'orderSelectionAddonPrice',
    ORDER_SELECTION_TOTAL_PRICE: 'orderSelectionTotalPrice',
    ORDER_NOTES: 'orderNotes',
} as const;

export const CONFIRMATION_FORM_INPUT: Record<
    (typeof CONFIRMATION_FORM_KEYS)[number],
    { NAME: keyof ConfirmationFormFields; LABEL: string }
> = {
    ...createFormInputHandle({
        key: getObjectKeyByValue({ obj: CONFIRMATION_FORM_HANDLE, value: CONFIRMATION_FORM_HANDLE.ORDER_NAME }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_NAME,
        label: 'Name',
    }),
    ...createFormInputHandle({
        key: getObjectKeyByValue({ obj: CONFIRMATION_FORM_HANDLE, value: CONFIRMATION_FORM_HANDLE.ORDER_CONTACT }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_CONTACT,
        label: 'Contact',
    }),
    ...createFormInputHandle({
        key: getObjectKeyByValue({
            obj: CONFIRMATION_FORM_HANDLE,
            value: CONFIRMATION_FORM_HANDLE.ORDER_CONTACT_RECIPIENT,
        }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_CONTACT_RECIPIENT,
        label: 'Recipient Contact',
    }),
    ...createFormInputHandle({
        key: getObjectKeyByValue({ obj: CONFIRMATION_FORM_HANDLE, value: CONFIRMATION_FORM_HANDLE.ORDER_DATE }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_DATE,
        label: 'Order Date',
    }),
    ...createFormInputHandle({
        key: getObjectKeyByValue({ obj: CONFIRMATION_FORM_HANDLE, value: CONFIRMATION_FORM_HANDLE.ORDER_COLLECTION }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_COLLECTION,
        label: 'Collection Method',
    }),
    ...createFormInputHandle({
        key: getObjectKeyByValue({ obj: CONFIRMATION_FORM_HANDLE, value: CONFIRMATION_FORM_HANDLE.ORDER_SELECTION }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_SELECTION,
        label: 'Select Order',
    }),
    ...createFormInputHandle({
        key: getObjectKeyByValue({
            obj: CONFIRMATION_FORM_HANDLE,
            value: CONFIRMATION_FORM_HANDLE.ORDER_SELECTION_TITLE,
        }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_SELECTION_TITLE,
        label: 'Order',
    }),
    ...createFormInputHandle({
        key: getObjectKeyByValue({
            obj: CONFIRMATION_FORM_HANDLE,
            value: CONFIRMATION_FORM_HANDLE.ORDER_SELECTION_VARIANT,
        }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_SELECTION_VARIANT,
        label: 'Select Order Variant',
    }),
    ...createFormInputHandle({
        key: getObjectKeyByValue({
            obj: CONFIRMATION_FORM_HANDLE,
            value: CONFIRMATION_FORM_HANDLE.ORDER_SELECTION_PRICE,
        }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_SELECTION_PRICE,
        label: 'Order Price',
    }),
    ...createFormInputHandle({
        key: getObjectKeyByValue({
            obj: CONFIRMATION_FORM_HANDLE,
            value: CONFIRMATION_FORM_HANDLE.ORDER_SELECTION_ADDON,
        }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_SELECTION_ADDON,
        label: 'Addon(s)',
    }),
    ...createFormInputHandle({
        key: getObjectKeyByValue({
            obj: CONFIRMATION_FORM_HANDLE,
            value: CONFIRMATION_FORM_HANDLE.ORDER_SELECTION_ADDON_PRICE,
        }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_SELECTION_ADDON_PRICE,
        label: 'Addon(s) Price',
    }),
    ...createFormInputHandle({
        key: getObjectKeyByValue({
            obj: CONFIRMATION_FORM_HANDLE,
            value: CONFIRMATION_FORM_HANDLE.ORDER_SELECTION_TOTAL_PRICE,
        }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_SELECTION_TOTAL_PRICE,
        label: 'Total Price',
    }),
    ...createFormInputHandle({
        key: getObjectKeyByValue({
            obj: CONFIRMATION_FORM_HANDLE,
            value: CONFIRMATION_FORM_HANDLE.ORDER_COLLECTION_TIME,
        }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_COLLECTION_TIME,
        label: 'Order Time',
    }),
    ...createFormInputHandle({
        key: getObjectKeyByValue({
            obj: CONFIRMATION_FORM_HANDLE,
            value: CONFIRMATION_FORM_HANDLE.ORDER_PIN_POINT,
        }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_PIN_POINT,
        label: 'Pin Point Location',
    }),
    ...createFormInputHandle({
        key: getObjectKeyByValue({
            obj: CONFIRMATION_FORM_HANDLE,
            value: CONFIRMATION_FORM_HANDLE.ORDER_NOTES,
        }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_NOTES,
        label: 'Additional Notes',
    }),
} as const;

export const ORDER_COLLECTIONS_OPTIONS: BaseInputSelectProps['items'] = [
    { value: 'pickUp', children: 'Pick Up' },
    { value: 'delivery', children: 'Delivery' },
];
