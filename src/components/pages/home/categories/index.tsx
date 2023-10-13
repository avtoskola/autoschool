import Link from 'next/link';
import React from 'react';

import CategoryCard from './category-card';
import translations from '../../../../../public/locales/ua.json';
import { CATEGORIES_CARDS } from '@/components/pages/home/categories/constants';

export default function Categories() {
  return (
    <section id="categories" className="scroll-mt-[150px] max-lg:scroll-mt-[76px] ">
      <div className="flex flex-col gap-y-[40px] max-w-container mx-auto px-6 xl:px-0 max-sm:gap-y-[30px]">
        <div className="max-lg:max-w-lg max-lg:self-center">
          <h2 className="text-3xl mb-7 font-semibold text-center md:text-4xlarge lg:text-start max-sm:text-mob-3xl max-sm:mb-1.5">
            {translations['КАТЕГОРІЇ заголовок']}
          </h2>
          <div className="sm:max-lg:text-center">
            <p className="text-medium max-md:text-md max-sm:text-mob-ml">
              {translations['КАТЕГОРІЇ підзаголовок']}<br/>
            </p>
            <p className="text-small max-md:text-md max-sm:text-mob-m mt-2">
              <Link
                href="https://chk.hsc.gov.ua/2020/08/20/shho-oznachayut-kategoriyi-u-posvidchenni-vodiya/"
                target="_blank"
                className="underline font-semibold"
              >
                {translations['КАТЕГОРІЇ про всі категорії']}
              </Link>
            </p>
          </div>

        </div>
        <div
          className="flex flex-col items-center justify-center flex-wrap gap-x-8 gap-y-16 lg:gap-x-[50px] lg:flex-row lg:items-stretch max-lg:max-w-[400px] max-lg:mx-auto max-sm:gap-y-12">
          {CATEGORIES_CARDS.map((card, index) => <CategoryCard {...card} key={index}/>)}
        </div>
      </div>
    </section>
  );
}
