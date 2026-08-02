import { gql } from '@apollo/client';

export type FragmentMediaProps = {
    on: 'MediaGlobal' | 'MediaProduct' | 'MediaAddon' | 'MediaGallery' | 'MediaMarquee' | 'MediaDualPanel';
    name?: string;
    sizesHandles?: string[];
    hasPortrait?: boolean;
};

export const FRAGMENT_MEDIA = (props?: FragmentMediaProps) => {
    const baseQuery = `
        src: url
        filename
        width
        height
    `;

    let sizes = '';
    if (props?.sizesHandles && props.sizesHandles.length > 0) {
        props.sizesHandles.forEach((handle) => {
            sizes += ' ';
            sizes += `
                ${handle} {
                    ${baseQuery}
                }
            `;
        });
    }

    let fragmentName = 'media';
    if (props?.name) fragmentName = `${props?.name}Media`;

    let assetVolume = 'Media';
    if (props?.on) assetVolume = props.on;

    let sizesQuery = '';
    if (sizes) sizesQuery = `sizes {${sizes}}`;

    let portraitQuery = '';
    if (props?.hasPortrait) {
        portraitQuery = `
            portraitAssets {
                ${baseQuery}
                
                ${sizesQuery}
            }
        `;
    }

    return gql`
        ${`
            fragment ${fragmentName} on ${assetVolume} {
                ${baseQuery}
                alt
                
                ${sizesQuery}
               
                ${portraitQuery}
            }
        `}
    `;
};
