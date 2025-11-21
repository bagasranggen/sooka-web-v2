export const getRandomNumber = ({ min, max }: { min: number; max: number }) =>
    Math.floor(Math.random() * (max - min) + min);
