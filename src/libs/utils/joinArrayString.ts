import { cleanArrayString } from '@/libs/utils/cleanArrayString';

export const joinArrayString = (arr: string[], join: string = ' ') => cleanArrayString(arr).join(join);
