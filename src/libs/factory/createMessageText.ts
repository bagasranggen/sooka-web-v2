import { ArrayString, TypesProps } from '@/libs/@types';
import { joinArrayString } from '../../libs/utils/joinArrayString';

export type RegularCakeMessageProps = {
    dimension: string;
    flavour: string;
    addon?: string[];
};

export const regularCakeMessage = ({ dimension, flavour, addon }: RegularCakeMessageProps) => {
    let addons: ArrayString = [];
    if (addon && addon.length > 0) addons.push(...addon);
    addons = joinArrayString(addons, ', ');

    return `*ORDER FORM*

Name :
WhatsApp No. : 

*Order Regular Cake*
Size : ${dimension}
Cake Flavor : ${flavour}
Addon(s) : ${addons}
Date :
Pick-up or Delivery : 
Delivery / Pick-up Time : 
Location :

Note : (tulisan / ucapan diatas cake)`;
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
