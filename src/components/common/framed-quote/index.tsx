import Image from 'next/image';
import React, { ReactNode } from 'react';

interface Props {
    className?: string
    mainText?: ReactNode;
    subText?: ReactNode;
    bottomContent?: ReactNode;
    contentClassName?: string;
}

export default function FramedQuote(props: Props) {
  const rootClassList = [
    'relative w-fit h-fit',
    props.className,
  ].join(' ');

  const wrapperClassList = [
    'relative border-[4.5px] w-fit h-fit',
    '[clip-path:polygon(0_100%,0_0,42%_0,42%_3%,58%_3%,58%_0,100%_0,100%_100%,58%_100%,58%_97%,42%_97%,42%_100%)]',
    '[border-image:linear-gradient(to_bottom,#70AC46_0%,#4091A0_50%,#0E74FD_100%)_1]',
  ].join(' ');

  const contentClassList = [
    'flex flex-col items-center justify-center gap-y-10 w-full h-full bg-transparent p-[11%]',
    props.contentClassName,
  ].join(' ');

  return (
    <div className={rootClassList}>
      <QuoteBlock className="top-[-42.5px]"/>
      <QuoteBlock className="bottom-[-42.5px] transform -rotate-180"/>
      <div className={wrapperClassList}>
        <div className={contentClassList}>
          <p className="font-extralight text-2xl text-center sm:text-[33px] leading-[1.2em]">
            {props.mainText}
          </p>
          <p className="font-light text-md sm:text-[17px] leading-6 text-center">
            {props.subText}
          </p>
          {props.bottomContent}
        </div>
      </div>
    </div>
  );
}

interface QuoteBlockProps {
    className?: string
}

function QuoteBlock(props: QuoteBlockProps) {
  return (
    <div
      className={['flex justify-center items-center bg-transparent absolute left-1/2 transform -translate-x-1/2 aspect-square overflow-hidden w-[16%] h-[85px]', props.className].join(' ')}>
      <Image src="images/icons/quote.svg" alt="quote" width={28} height={21}/>
    </div>
  );
}
