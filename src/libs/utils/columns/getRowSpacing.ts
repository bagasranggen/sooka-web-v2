import { ObjectProps, ResponsiveProps } from '@/libs/@types';

type RowSpacingProps = {
    obj: ObjectProps<number> | ObjectProps<ObjectProps<number>>;
};

export const getRowSpacing = ({ obj }: RowSpacingProps) => {
    const tmp: string[] = [];

    const getSpacingValue = ({
        direction,
        value,
        responsive,
    }: {
        direction: string;
        value: number;
        responsive?: ResponsiveProps;
    }) => {
        const tmp: string[] = [];

        const division = direction === 'x' ? 2 : 1;
        const dir = direction === 'x' ? direction : 't';
        const bp = responsive ? `${responsive}:` : '';

        if (value > 0) {
            tmp.push(`${bp}-m${dir}-${value / division}`);
            tmp.push(`*:${bp}p${dir}-${value / division}`);
        }

        return tmp;
    };

    Object.entries(obj).forEach(([key, value]) => {
        switch (key) {
            case 'xs':
            case 'sm':
            case 'md':
            case 'lg':
            case 'xl':
            case '2xl':
                Object.entries(value).forEach(([keyValue, value]) => {
                    tmp.push(...getSpacingValue({ value: value as number, direction: keyValue, responsive: key }));
                });

                break;

            //  Default case is x-axis and y-axis spacing
            default:
                tmp.push(...getSpacingValue({ value, direction: key }));
                break;
        }
    });

    return tmp;
};
