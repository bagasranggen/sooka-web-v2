import { gql } from '@apollo/client';

export const FRAGMENT_MEDIA = (props?: { name?: string; sizesHandles?: string[] }) => {
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

    return gql`
        ${`
            fragment ${fragmentName} on Media {
                ${base}
                filename
                alt
                
                ${sizes ? `sizes {${sizes}}` : ''}
            }
        `}
    `;
};
