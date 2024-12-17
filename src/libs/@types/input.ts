import { Path, UseFormRegister } from 'react-hook-form';

export type InputHookValueProps = { [key: string]: string | number };

export type BaseInputHookProps = {
    name: Path<InputHookValueProps>;
    register: UseFormRegister<any>;
};

export type BaseHookOptionProps = {
    required?: boolean | string;
    valueAsNumber?: boolean;
    pattern?: any;
};
