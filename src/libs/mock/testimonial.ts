import { createArrayFromNumber } from '@/libs/factory/createArrayFromNumber';
import { TestimonialProps } from '@/components/common/Carousel';

export const TESTIMONIALS: TestimonialProps['items'] = createArrayFromNumber(4).map(() => ({
    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse fugit molestias officiis optio perspiciatis quaerat quidem quis reprehenderit soluta.',
    author: 'lorem ipsum dolor sit',
}));
