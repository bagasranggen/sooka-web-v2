import { Field, BlocksField } from 'payload';
import { ContentBlockGallery, ContentBlockHeading, ContentBlockRelatedProducts } from '@/collections/blocks';

export const BaseContentBlocks = (props?: Pick<BlocksField, 'name'>): Field => ({
    type: 'blocks',
    name: props?.name ?? 'contentBlocks',
    blocks: [ContentBlockGallery, ContentBlockHeading, ContentBlockRelatedProducts],
});
