import React, { ReactNode } from 'react';

interface Props {
    className?: string
    mainText?: ReactNode;
    subText?: ReactNode;
    bottomContent?: ReactNode;
    additionalContent?: ReactNode;
    contentClassName?: string;
}

export default function GradientBorderCard(props: Props) {
  const rootClassList = [
    'relative w-fit h-fit',
    props.className,
  ].join(' ');

  const wrapperClassList = [
    'relative border-[4.5px] w-fit h-fit',
    '[border-image:linear-gradient(to_bottom,#70AC46_0%,#4091A0_50%,#0E74FD_100%)_1]',
  ].join(' ');

  const contentClassList = [
    'flex flex-col items-center justify-center gap-y-10 w-full h-full bg-transparent p-[11%] max-sm:gap-y-5',
    props.contentClassName,
  ].join(' ');

  return (
    <div className={rootClassList}>
      <div className={wrapperClassList}>
        <div className={contentClassList}>
          <p className="font-extralight text-[33px] whitespace-pre-line text-center leading-[1.2em] max-sm:text-[22px] max-sm:leading-[1.4em]">
            {props.mainText}
          </p>
          <p className="font-light text-[17px] leading-6 text-center max-sm:text-[10px]">
            {props.subText}
          </p>
          {props.bottomContent}
        </div>
      </div>
      {props.additionalContent}
    </div>
  );
}
