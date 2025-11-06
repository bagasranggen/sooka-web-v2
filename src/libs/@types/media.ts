import { MediaGlobal } from './payload-types';
import { BaseItemProps } from '@/components/common/Picture';

export type BareMediaProps = {
    src: Extract<MediaGlobal['url'], 'string'> | Extract<BaseItemProps['src'], 'StaticImport'>;
} & Pick<MediaGlobal, 'width' | 'height' | 'alt' | 'filename' | 'mimeType'>;
