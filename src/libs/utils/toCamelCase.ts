export const toCamelCase = (str?: string) => {
    let data = '';

    if (str) {
        data = str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
    }

    return data;
};
