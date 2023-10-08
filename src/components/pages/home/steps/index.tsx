import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import cls from './steps.module.css';
import RoadStep from '@/components/pages/home/steps/road-step';
import debounce from '@/utils/debounce';

const ROAD_STEPS = [
  <>Записатись на навчання принести документи і підписати договір</>,
  <>Теоретична підготовка в автошколі</>,
  <>Іспит з теорії в сервісному центрі МВС</>,
  <>Практична підготовка в автошколі</>,
  <>Практичний іспит в сервісному центрі МВС</>,
  <>Отримати водійське посвідчення</>,
];

export default function Steps() {
  const [scrollY, setScrollY] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const handleScroll = debounce(() => {
      if (!ref.current) return;
      ref.current?.scrollIntoView({ behavior: 'instant', block: 'end' });
      const newScrollY = (ref.current?.scrollTop ?? 0) + 200;
      setScrollY(newScrollY);
    }, 5);

    ref.current.addEventListener('scroll', handleScroll);
    return () => {
      if (!ref.current) return;
      ref.current.removeEventListener('scroll', handleScroll);
    };
  }, [ref.current]);

  return (
    <section
      className={`bg-secondary max-h-[calc(100vh_-_150px)] max-lg:max-h-[calc(100vh_-_76px)] overflow-auto ${cls.container}`}
      ref={ref}

    >
      <div className="max-w-container mx-auto relative grid grid-cols-[1fr_200px_1fr] max-md:grid-cols-[1fr_100px_1fr] ">
        <Image
          style={{ transform: `rotate(180deg) translate(50%, -${scrollY}px)` }}
          className="max-w-[180px] absolute left-1/2 top-0 [will-change:transorm] [transition:transform_0.3s] z-[3] max-md:max-w-[90px]"
          src="/images/home/purple-car-1.png"
          alt="car"
          width={502}
          height={1254}
        />

        {ROAD_STEPS.map((text, index) => (
          <RoadStep id={index === 0 ? 'steps' : ''} step={index + 1} text={text} key={index} />
        ))}
      </div>
    </section>
  );
}
