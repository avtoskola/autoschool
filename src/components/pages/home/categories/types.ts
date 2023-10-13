import { ReactNode } from 'react';

export type CardInfoType = {
    title: ReactNode,
    price: ReactNode,
    priceText?: ReactNode,
    categoryDescription: {
        title: ReactNode,
        text: ReactNode,
    },
    list: {title: ReactNode; text: ReactNode}[],
    image: string,
    imageWidth: number,
    imageHeight: number,
    additionalDocuments?: {
        title: ReactNode,
        text: ReactNode[],
    },
}
