import { RefComponent } from '@/libs/@types';

import Base, { BaseProps, BaseInputRef, BaseError } from '@/components/common/Input/Base';
import Block, { BlockProps } from '@/components/common/Input/Block';
import Label, { LabelProps, LabelText } from '@/components/common/Input/Label';

export type * from '@/components/common/Input/Base';
export type * from '@/components/common/Input/Block';
export type * from '@/components/common/Input/Label';

type InputComposition = {
    Block: RefComponent<BlockProps, BaseInputRef>;
    Label: RefComponent<LabelProps, BaseInputRef>;
};

export default Object.assign<RefComponent<BaseProps, BaseInputRef>, InputComposition>(Base, { Block, Label });

export { LabelText, BaseError };
