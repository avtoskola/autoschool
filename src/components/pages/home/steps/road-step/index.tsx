import Image from 'next/image';
import { ReactNode } from 'react';

import RoadImage from '../../../../../../public/images/home/road.webp';
import FadeInSection from '@/components/common/fade-in-section';
import RoadSign from '@/components/pages/home/steps/road-sign';

interface Props {
    step: number;
    text: ReactNode;
}

export default function RoadStep(props: Props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[calc(80vh_-_150px)] max-lg:h-[calc(80vh_-_76px)] max-sm:[calc(50vh_-_76px)]">
        <FadeInSection>
          <RoadSign step={props.step}/>
        </FadeInSection>
      </div>

      <Image
        className="w-full min-h-full"
        src={RoadImage}
        alt="road"
      />

      <FadeInSection>
        <div className="flex flex-col justify-center items-center h-[calc(80vh_-_150px)] max-lg:h-[calc(80vh_-_76px)] max-sm:[calc(50vh_-_76px)]">
          <p className="max-w-[80%] text-xlarge text-center max-md:text-large max-sm:text-mob-sm">
            {props.text}
          </p>
        </div>
      </FadeInSection>
    </>
  );
}
