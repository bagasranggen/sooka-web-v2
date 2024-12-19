export type PortalEventsProps = Partial<Record<'onOpen' | 'onOpened' | 'onClose' | 'onClosed', () => void>>;

export type PortalBaseProps = {
    show: boolean;
    hide: () => void;
};

export type PortalTransitionProps = {
    isShow: boolean;
    isTransitioning: boolean;
};
