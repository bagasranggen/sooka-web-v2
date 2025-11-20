export const createPicsumImage = ({
    id = 237,
    width = 400,
    height = 619,
    alt,
}: { alt?: string } & Partial<Record<'id' | 'width' | 'height', number>>) => {
    return {
        src: `https://picsum.photos/id/${id}/${width}/${height}`,
        width,
        height,
        alt: alt ?? `image ${id}`,
    };
};
