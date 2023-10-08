import React, { ReactNode } from 'react';

interface Props {
    title?: ReactNode;
    text?: ReactNode;
    button?: ReactNode;
    image?: ReactNode;
    className?: string;
    contentClassName?: string;
    titleClassName?: string;
    imageContainerClassName?: string;
}

export default function TextImage(props: Props) {
  return (
    <div
      className={`flex justify-between gap-x-8 max-w-container mx-auto flex-col lg:flex-row ${props.className || ''}`}>
      <div
        className={`flex flex-col justify-center items-center lg:items-start pl-2 ${props.contentClassName || ''}`}>
        <h1 className={`text-6xlarge font-semibold mb-12 text-center lg:mb-10 lg:text-start ${props.titleClassName || ''}`}>
          {props.title}
        </h1>
        <p className="text-large max-lg:text-center max-lg:max-w-[80%]">
          {props.text}
        </p>
        {props.button}
      </div>

      <div className={`w-full flex justify-center items-center ${props.imageContainerClassName || ''}`}>
        {props.image}
      </div>
    </div>
  );
}
