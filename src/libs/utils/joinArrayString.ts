import { cleanArrayString } from '@/libs/utils/cleanArrayString';

export const joinArrayString = (arr: string[]) => cleanArrayString(arr).join(' ');
