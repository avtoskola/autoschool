import React from 'react';

import CategoryCard from './category-card';
import translations from '../../../../../public/locales/ua.json';
import { CATEGORIES_CARDS } from '@/components/pages/home/categories/constants';

export default function Categories() {
  return (
    <section id="categories" className="scroll-mt-[150px] max-lg:scroll-mt-[76px] ">
      <div className="flex flex-col gap-y-[71px] max-w-container mx-auto px-6 lg:px-0 max-sm:gap-y-[30px]">
        <div className="flex flex-col gap-y-7 max-sm:gap-y-1.5">
          <h2 className="text-3xl font-semibold text-center md:text-4xlarge lg:text-start max-sm:text-mob-3xl">
            {translations['КАТЕГОРІЇ заголовок']}
          </h2>
          <p className="text-start text-medium max-md:text-md max-sm:text-mob-ml">
            {translations['КАТЕГОРІЇ підзаголовок']}
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center flex-wrap gap-x-8 gap-y-16 lg:gap-x-[50px] lg:flex-row lg:items-stretch max-lg:max-w-[400px] max-lg:mx-auto max-sm:gap-y-12">
          {CATEGORIES_CARDS.map((card, index) => <CategoryCard {...card} key={index}/>)}
        </div>
      </div>
    </section>
  );
}
