export type ConvertIntToMillisecondsProps = {
    type?: 'day' | 'hour' | 'minute';
    number: number;
};

export const convertIntToMilliseconds = ({ type = 'day', number }: ConvertIntToMillisecondsProps) => {
    let data = 0;

    if (type === 'day') data = 24 * 60 * 60 * 1000;
    if (type === 'hour') data = 60 * 60 * 1000;
    if (type === 'minute') data = 60 * 1000;

    data = data * number;

    return data;
};
