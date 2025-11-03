import { RangeProps } from '@/components/common/Range';

export const FLAVOURS: Record<string, Pick<RangeProps, 'start' | 'end'>> = {
    custardySpongy: { start: 'Custardy', end: 'Spongy' },
    freshCreamy: { start: 'Fresh', end: 'Creamy' },
    tangySweet: { start: 'Tangy', end: 'Sweet' },
};
