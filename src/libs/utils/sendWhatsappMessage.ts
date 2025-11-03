export const sendWhatsappMessage = (message: string) => {
    if (typeof window === 'undefined') return;

    window.open(`https://wa.me/6285740030907?text=${message}`);
};
