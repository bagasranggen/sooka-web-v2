import { gql } from '@apollo/client';
import { FRAGMENT_MEDIA } from '@/graphql/queries/fragments/FragmentMedia';

export const FRAGMENT_HOMEPAGE_STORY = gql`
    fragment homepageStory on Homepage {
        storyDescription

        storyMediaMain {
            ...storyMedia
        }

        storyMediaSecondary {
            ...storyMedia
        }
    }

    ${FRAGMENT_MEDIA({
        name: 'story',
        on: 'MediaGlobal',
        sizesHandles: ['storyMediaDesktop', 'storyMediaMobile'],
    })}
`;
