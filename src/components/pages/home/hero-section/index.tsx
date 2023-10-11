import Image from 'next/image';
import React from 'react';

import image from '../../../../../public/images/home/auto-1.png';
import translations from '../../../../../public/locales/ua.json';
import TextImage from '@/components/sections/text-image';

export default function HeroSection() {
  return (
    <section
      id="home-hero"
      className="bg-gradient-green-blue-tiles bg-center bg-no-repeat bg-cover text-white py-20 px-6 scroll-mt-[150px] max-lg:scroll-mt-[76px]">
      <TextImage
        title={translations['ПЕРША СЕКЦІЯ заголовок']}
        text={translations['ПЕРША СЕКЦІЯ текст']}
        image={
          <>
            <Image
              className="w-[95%] md:w-[85%] lg:w-full"
              src={image}
              alt="auto"
              priority
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
