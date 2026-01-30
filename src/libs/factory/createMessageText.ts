import { ArrayStringProps, TypesProps } from '@/libs/@types';
import { joinArrayString } from '../../libs/utils/joinArrayString';

export type RegularCakeMessageProps = {
    dimension: string;
    flavour: string;
    addon?: string[] | string;
};

export const regularCakeMessage = ({ dimension, flavour, addon }: RegularCakeMessageProps) => {
    let addons: ArrayStringProps = [];
    if (addon && Array.isArray(addon) && addon.length > 0) addons.push(...addon);
    if (addon && !Array.isArray(addon)) addons.push(addon);
    addons = joinArrayString(addons, ', ');

    let message = `Halo Sooka!
Saya ingin order *${flavour}*, size *${dimension}*`;
    if (addons) message += ` dengan tambahan *${addons}*`;

    return message;
};

export type CreateMessageTextProps = {
    isEncoded?: boolean;
} & (TypesProps<'regular-cake', RegularCakeMessageProps> | TypesProps<'custom', { message: string }>);

export const createMessageText = ({ isEncoded, type, ...props }: CreateMessageTextProps) => {
    let message = '';

    switch (type) {
        case 'regular-cake':
            message = regularCakeMessage(props as RegularCakeMessageProps);
            break;

        default:
            if ('message' in props && props?.message) message = props?.message;
            break;
    }

    if (isEncoded) message = encodeURIComponent(message);

    return message;
};
