export type CreateFormInputHandleProps = {
    key: any;
    label: string;
    name: any;
};

export const createFormInputHandle = ({ key, label, name }: CreateFormInputHandleProps): any => {
    return {
        [key]: { NAME: name, LABEL: label },
    };
};
