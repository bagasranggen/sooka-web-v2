import { Icon } from '@/libs/@types';

export const createIconItem = (icon?: Icon) => {
    let handle = undefined;

    switch (icon?.source) {
        case 'reactIcon':
            handle = icon.reactIcon;
            break;
    }

    return { icon: handle };
};
