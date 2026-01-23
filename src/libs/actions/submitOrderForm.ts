'use server';

import { ConfirmationFormFields } from '@/components/common/Form';

const GOOGLE_APP_URL = process.env.GAS_URL as string;

export const submitOrderForm = async (data: ConfirmationFormFields) => {
    console.log(data);

    try {
        const res = await fetch(GOOGLE_APP_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

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
