import Image from 'next/image';
import { ReactNode } from 'react';

import FadeInSection from '@/components/common/fade-in-section';

interface Props {
    title: ReactNode;
    points: ReactNode[];
    className?: string;
    id?: string;
}

export function BulletsCard(props: Props) {
  return (
    <FadeInSection>
      <section
        id={props.id}
        className={`max-w-container shadow-section bg-white rounded-xl mx-auto pt-12 px-16 pb-16 md:max-xl:mx-6 max-sm:mx-6 max-md:p-6 max-md:max-w-lg scroll-mt-[150px] max-lg:scroll-mt-[76px] ${props.className || ''}`}>
        <h2 className="text-3xlarge font-semibold text-center mb-16 max-md:text-xlarge max-md:mb-8 max-sm:text-mob-4xl">
          {props.title}
        </h2>
        <div className="grid gap-x-20 gap-y-3.5 grid-cols-1 md:grid-cols-2">
          {props.points.map((point, index) => (
            <div key={index} className="flex items-center gap-8 max-sm:gap-x-3">
              <Image src="/images/icons/check.svg" className="max-sm:w-4 max-sm:h-4" alt="check icon" width={30} height={30}/>
              <span className="text-medium max-md:text-small max-sm:text-mob-m">
                {point}
              </span>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
