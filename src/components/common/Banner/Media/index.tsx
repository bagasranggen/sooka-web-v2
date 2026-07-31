import React, { Fragment } from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Container from '@/components/common/Container';
import Columns from '@/components/common/Columns';
import Heading, { BaseProps as BaseHeadingProps } from '@/components/common/Heading';
import { BaseItemProps } from '@/components/common/Picture';
import Animation from '@/components/Animation';
import RichText, { RichTextProps } from '@/components/common/RichText';
import DynamicWrapper from '@/components/common/DynamicWrapper';
import Overlay, { OverlayProps } from '@/components/common/Overlay';
import DynamicElement from '@/components/common/DynamicElement';

export type MediaProps = {
    overlay?: OverlayProps['opacity'];
    media?: [BaseItemProps['src'], BaseItemProps['src']] | [];
    description?: RichTextProps['children'];
} & (Pick<BaseHeadingProps, 'children'> & ClassnameProps);

const Media = ({ media, description, className, overlay = 3, children }: MediaProps): React.ReactElement => {
    const hasBg = !!(media && media.length === 2);

    let bgStyle = {};
    if (hasBg) {
        bgStyle = Object.assign(bgStyle, {
            '--bg-image-desktop': media[0],
            '--bg-image-mobile': media[1],
        });
    }

    let overlayProps: OverlayProps | undefined = undefined;
    if (hasBg) {
        overlayProps = Object.assign(overlayProps ?? {}, {
            variant: 'gradient-bottom' as OverlayProps['variant'],
            opacity: overlay,
            children: <></>,
        });
    }

    let bannerClass: ArrayStringProps = ['banner banner--media'];
    if (hasBg) bannerClass.push('banner--media-bg');
    if (className) bannerClass.push(className);
    bannerClass = joinArrayString(bannerClass);

    return (
        <DynamicElement
            component={hasBg ? Overlay : Fragment}
            props={overlayProps}>
            <DynamicWrapper
                as={hasBg ? 'section' : undefined}
                style={bgStyle}
                className={bannerClass}>
                <Container
                    as={hasBg ? 'div' : 'section'}
                    className={hasBg ? 'banner__container' : bannerClass}>
                    <Columns>
                        <Columns.Column
                            offset={{ md: 1 }}
                            md={7}>
                            {children && (
                                <Animation type="fade-in">
                                    <Heading
                                        as="h1"
                                        size="section"
                                        className="banner__title">
                                        {children}
                                    </Heading>
                                </Animation>
                            )}

                            {description && (
                                <Animation
                                    type="fade-in"
                                    config={{ delay: 0.15 }}>
                                    <RichText className="mt-1.5 text-md banner__description">{description}</RichText>
                                    {/*<div className="mt-1.5 text-md banner__description">*/}
                                    {/*    deleniti enim est excepturi illum, inventore ipsum, officia pariatur quaerat*/}
                                    {/*    quas quia quis quisquam repellat sunt, veritatis voluptate. Lorem ipsum dolor*/}
                                    {/*    sit amet, consectetur adipisicing elit. Ab aliquam assumenda commodi*/}
                                    {/*</div>*/}
                                </Animation>
                            )}
                        </Columns.Column>
                    </Columns>
                </Container>
            </DynamicWrapper>
        </DynamicElement>
    );
};

export default Media;
