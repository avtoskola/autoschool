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
        className={`max-w-container md:mx-auto shadow-section bg-white rounded-xl mx-6 p-4 md:pt-12 md:px-16 md:pb-16 max-md:p-6 scroll-mt-[150px] max-lg:scroll-mt-[76px] ${props.className || ''}`}>
        <h2 className="text-3xlarge font-semibold text-center mb-16 max-md:text-xlarge max-md:mb-8">
          {props.title}
        </h2>
        <div className="grid gap-x-20 gap-y-3.5 grid-cols-1 md:grid-cols-2">
          {props.points.map((point, index) => (
            <div key={index} className="flex items-center gap-8">
              <Image src="/images/icons/check.svg" alt="check icon" width={30} height={30}/>
              <span className="text-medium max-md:text-small">
                {point}
              </span>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
