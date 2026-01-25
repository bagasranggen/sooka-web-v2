'use server';

import { addCurrentTime, joinArrayString } from '@/libs/utils';

import { ConfirmationFormFields } from '@/components/common/Form';

const GOOGLE_APP_URL = process.env.GAS_URL as string;

export const submitOrderForm = async (data: ConfirmationFormFields) => {
    const orderSelectionAddon = data?.orderSelectionAddon ? joinArrayString(data.orderSelectionAddon, ', ') : '';
    const orderRecipientName = data?.orderRecipientName || data?.orderName;
    const orderContactRecipient = data?.orderContactRecipient || data?.orderContact;

    let submitData = {
        orderDate: data?.orderDate,
        orderName: data?.orderName,
        orderContact: data?.orderContact,
        orderSelectionTitle: data?.orderSelectionTitle,
        orderSelectionAddon,
        orderRecipientName,
        orderContactRecipient,
        orderCollection: data?.orderCollection,
        orderPinPoint: data?.orderPinPoint,
        orderCollectionTime: data?.orderCollectionTime,
        orderNotes: data?.orderNotes,
        orderSelectionTotalPrice: data?.orderSelectionTotalPrice,
    };

    /* Create Order Calendar Event */
    if (data?.orderDate && data?.orderCollectionTime) {
        let title = 'Sooka Order';
        if (data?.orderSelection) title += ` | ${data.orderSelection}`;

        let options = {};
        if (data?.orderPinPoint) Object.assign(options, { location: data?.orderPinPoint });

        let description = '';
        if (data?.orderName && data?.orderContact) description += `Name: ${data?.orderName} (${data?.orderContact})\n`;
        if (data?.orderRecipientName || data?.orderContactRecipient)
            description += `Recipient: ${orderRecipientName} (${orderContactRecipient})\n`;
        if (data?.orderSelection) description += `Order: ${data?.orderSelection}\n`;
        if (data?.orderSelectionVariant) description += `Variant: ${data?.orderSelectionVariant}\n`;
        if (orderSelectionAddon) description += `Addon(s): ${orderSelectionAddon}\n\n`;
        if (data?.orderNotes) description += `Notes:\n${data?.orderNotes}\n`;
        Object.assign(options, { description });

        Object.assign(submitData, {
            orderCalendar: {
                title,
                startTime: new Date(`${data?.orderDate} ${data?.orderCollectionTime}`).toISOString(),
                endTime: new Date(
                    `${data?.orderDate} ${addCurrentTime({ current: data?.orderCollectionTime, addition: 60 })}`
                ).toISOString(),
                options,
            },
        });
    }

    try {
        const res = await fetch(GOOGLE_APP_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(submitData),
        });

        if (!res?.ok) {
            throw new Error('Failed to submit order form');
        }

        return {
            status: 'success',
        };
    } catch (e) {
        console.log(e);

        return {
            status: 'error',
            errorMessage: 'An error occurred',
        };
    }
};
