export type CreateWhatsappMessageProps = {
    number: string;
    message?: string | null;
};

export const createWhatsappMessage = ({ number, message }: CreateWhatsappMessageProps) => {
    let messageUrl = '#';

    if (number) messageUrl = `https://wa.me/${number}`;

    if (number && message) messageUrl += `?text=${message}`;

    return messageUrl;
};
