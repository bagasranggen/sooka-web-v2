export const getObjectKeyByValue = ({ obj, value }: { obj: Record<any, any>; value: string }) => {
    return Object.keys(obj).find((key) => obj[key] === value);
};
