export const sendWhatsappMessage = (message: string) => {
    const number = process.env.NEXT_PUBLIC_CONTACT_PERSON;

    if (typeof window === 'undefined') return;
    if (!number) return;

    window.open(`https://wa.me/${number}?text=${message}`);
};
