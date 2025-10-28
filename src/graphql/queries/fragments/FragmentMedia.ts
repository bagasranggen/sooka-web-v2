import { gql } from '@apollo/client';

export type FragmentMediaProps = {
    on: 'MediaGlobal' | 'MediaProduct' | 'MediaAddon' | 'MediaGallery';
    name?: string;
    sizesHandles?: string[];
};

export const FRAGMENT_MEDIA = (props?: FragmentMediaProps) => {
    const base = `
        src: url
        width
        height
    `;

    let sizes = '';
    if (props?.sizesHandles && props.sizesHandles.length > 0) {
        props.sizesHandles.forEach((handle) => {
            sizes += ' ';
            sizes += `
                ${handle} {
                    ${base}
                }
            `;
        });
    }

    let fragmentName = 'media';
    if (props?.name) fragmentName = `${props?.name}Media`;

    let assetVolume = 'Media';
    if (props?.on) assetVolume = props.on;

    return gql`
        ${`
            fragment ${fragmentName} on ${assetVolume} {
                ${base}
                filename
                alt
                
                ${sizes ? `sizes {${sizes}}` : ''}
            }
        `}
    `;
};
