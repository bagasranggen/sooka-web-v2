import { createFormInputHandle } from '@/libs/factory';
import { getObjectKeyByValue } from '@/libs/utils';

import type { ConfirmationFormFields } from '@/components/common/Form/Confirmation';

export const CONFIRMATION_FORM_KEYS = ['ORDER_DATE', 'ORDER_NAME'] as const;

export const CONFIRMATION_FORM_HANDLE: Record<string, keyof ConfirmationFormFields> = {
    ORDER_DATE: 'orderDate',
    ORDER_NAME: 'orderName',
} as const;

export const CONFIRMATION_FORM_INPUT: Record<
    (typeof CONFIRMATION_FORM_KEYS)[number],
    { NAME: keyof ConfirmationFormFields; LABEL: string }
> = {
    ...createFormInputHandle({
        key: getObjectKeyByValue({ obj: CONFIRMATION_FORM_HANDLE, value: CONFIRMATION_FORM_HANDLE.ORDER_DATE }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_DATE,
        label: 'Order Date',
    }),
    ...createFormInputHandle({
        key: getObjectKeyByValue({ obj: CONFIRMATION_FORM_HANDLE, value: CONFIRMATION_FORM_HANDLE.ORDER_NAME }),
        name: CONFIRMATION_FORM_HANDLE.ORDER_NAME,
        label: 'Name',
    }),
} as const;
