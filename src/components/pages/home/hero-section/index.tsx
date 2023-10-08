'use client';

import Image from 'next/image';
import React from 'react';

import TextImage from '@/components/sections/text-image';

const TITLE = <>Водійські курси</>;
const TEXT = (
  <>
    Хороші водійські курси - мабуть, основна складова безаварійної, надійної їзди. Навчання в автошколі є тією основою,
    в якій закладені початкові навички та вміння, що дозволяють новому водієві відчувати себе на дорозі впевнено,
    удосконалювати стиль водіння.
  </>
);

export default function HeroSection() {
  return (
    <section
      id="home-hero"
      className="bg-gradient-green-blue-tiles bg-center bg-no-repeat bg-cover text-white py-20 px-6 scroll-mt-[150px] max-lg:scroll-mt-[76px]">
      <TextImage
        title={TITLE}
        text={TEXT}
        image={
          <>
            <Image
              className="w-[95%] md:w-[85%] lg:w-full"
              src="/images/home/auto-1.png"
              width="550"
              height="254"
              alt="auto"
            />
          </>
        }
        className="max-lg:gap-y-7"
        contentClassName="flex-1"
        imageContainerClassName="flex-1 relative"
      />
    </section>
  );
}
