import { createArrayFromNumber } from '@/libs/factory/createArrayFromNumber';

import { BaseInputSelectProps } from '@/components/common/Input';

export const INPUT_SELECT_OPTIONS: BaseInputSelectProps['items'] = createArrayFromNumber(5).map((_, i) => ({
    value: i,
    label: `Option ${i + 1}`,
}));
