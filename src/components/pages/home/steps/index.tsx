import Image from 'next/image';
import { useEffect, useMemo, useRef } from 'react';

import cls from './steps.module.css';
import RoadStep from '@/components/pages/home/steps/road-step';
import throttle from '@/utils/throttle';

const ROAD_STEPS = [
  <>Записатись на навчання принести документи і підписати договір</>,
  <>Теоретична підготовка в автошколі</>,
  <>Іспит з теорії в сервісному центрі МВС</>,
  <>Практична підготовка в автошколі</>,
  <>Практичний іспит в сервісному центрі МВС</>,
  <>Отримати водійське посвідчення</>,
];

const CAR_IMAGE = {
  width: 502,
  height: 1254,
  src: '/images/home/purple-car-1.png',
};

export default function Steps() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollIntoView = useMemo(() => throttle(() => {
    document.documentElement.style.scrollBehavior = 'unset';
    document.body.style.overflowY = 'hidden';
    containerRef.current?.scrollIntoView({ block: 'start', inline: 'center', behavior: 'instant' });
    document.documentElement.style.scrollBehavior = 'smooth';
    setTimeout(() => {
      document.body.style.overflowY = 'unset';
    }, 1000);
  }, 3000), []);

  useEffect(() => {
    const listener = (e: Event) => {
      if (!containerRef.current) return;
      const sectionRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (
        sectionRect.top >= 0 &&
            sectionRect.bottom <= windowHeight * 0.5
      ) {
        e.stopImmediatePropagation();
        e.preventDefault();
        scrollIntoView();
      }
    };
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <>
      <div ref={containerRef} id="steps" className="scroll-mt-[150px] max-lg:scroll-mt-[76px]"/>
      <section
        onScroll={scrollIntoView}
        className={`relative max-h-[calc(100vh_-_150px)] max-lg:max-h-[calc(100vh_-_76px)] overflow-auto ${cls.container}`}
      >
        <Image
          id="steps"
          {...CAR_IMAGE}
          alt='car'
          className="max-w-[180px] sticky left-1/2 top-20  rotate-180 -translate-x-1/2 z-[3] max-md:max-w-[90px]"
        />
        <div className="mt-[-375px] max-md:mt-[-187px] max-w-container mx-auto relative grid grid-cols-[1fr_200px_1fr] max-md:grid-cols-[1fr_100px_1fr] ">
          {ROAD_STEPS.map((text, index) => (
            <RoadStep step={index + 1} text={text} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
