import { Media } from '@/payload-types';
import { BaseItemProps } from '@/components/common/Picture';

export type BareMediaProps = {
    src: Extract<Media['url'], 'string'> | Extract<BaseItemProps['src'], 'StaticImport'>;
} & Pick<Media, 'width' | 'height' | 'alt' | 'filename' | 'mimeType'>;
