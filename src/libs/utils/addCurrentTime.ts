export type AddCurrentTimeProps = { current: string; addition: number };

export const addCurrentTime = ({ current, addition }: AddCurrentTimeProps) => {
    let data: string = '';

    if (!current) return data;
    if (!addition) return data;

    const [hours, minutes] = current.split(':').map(Number);

    const dateObj = new Date();
    dateObj.setHours(hours, minutes, 0, 0);
    dateObj.setMinutes(dateObj.getMinutes() + addition);

    const newHours = dateObj.getHours().toString().padStart(2, '0');
    const newMinutes = dateObj.getMinutes().toString().padStart(2, '0');

    data = `${newHours}:${newMinutes}`;

    return data;
};
