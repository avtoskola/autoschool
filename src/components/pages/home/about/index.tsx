import translations from '../../../../../public/locales/ua.json';
import GradientBorderCard from '@/components/common/cards/gradient-border-card';

export default function About() {
  return (
    <section id="about" className="max-w-container mx-auto pt-4 max-lg:px-4 scroll-mt-[150px] max-lg:scroll-mt-[76px] " >
      <GradientBorderCard
        contentClassName="!p-[5%] !gap-y-0 max-lg:!py-10"
        additionalContent={
          <h2 className="absolute bg-white whitespace-nowrap -top-6 left-1/2 -translate-x-1/2 px-8 text-3xlarge font-semibold mb-10 max-md:text-xlarge max-md:px-3 max-md:-top-4">
            {translations['ОРГАНІЗАЦІЯ заголовок']}
          </h2>
        }
        mainText={translations['ОРГАНІЗАЦІЯ текст']}
      />
    </section>
  );
}
