export const getLocalStorage = (key: string) => {
    const itemString = localStorage.getItem(key);
    if (!itemString) return;

    const item = JSON.parse(itemString);
    const now = new Date();

    // Compare current time with expiry; delete if outdated
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return;
    }

    return item.value;
};
