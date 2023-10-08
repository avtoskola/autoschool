import { ReactNode } from 'react';

export type TextLinkType = {
    label: ReactNode;
    href: string;
}

export type TextLinksColType = {
    header: string;
    links: TextLinkType[];
}
