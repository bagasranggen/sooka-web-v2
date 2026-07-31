export type SetLocalStorageProps = {
    key: string;
    value: string;
    expiryInMs: number;
};

export const setLocalStorage = ({ key, value, expiryInMs }: SetLocalStorageProps) => {
    if (!key) return;
    if (!value) return;
    if (!expiryInMs) return;

    const now = new Date();

    const item = { value, expiry: now.getTime() + expiryInMs };

    localStorage.setItem(key, JSON.stringify(item));
};
