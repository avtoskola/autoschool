import Categories from '../components/pages/home/categories';
import About from '@/components/pages/home/about';
import HeroSection from '@/components/pages/home/hero-section';
import Steps from '@/components/pages/home/steps';
import TryYourSkills from '@/components/pages/home/try-your-skills';
import { BulletsCard } from '@/components/sections/bullets-card';

const POINTS_TITLE = <>Документи Для Навчання</>;
const POINTS = [
  <>Копія паспорта (Місце прописки неважливе, наявність обов′язкова)</>,
  <>Копія ІПН (Ідентифікаційний податковий номер);</>,
  <>Медична довідка (форма Ф-083);</>,
  <>Фотографії (2шт. розміром 3.5x4.5);</>,
  <>Для відкриття з вищої категорії на будь яку нижчу посвідчення водія</>,
  <>Гарний настрій</>,
];

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Categories/>
      <About/>
      <Steps/>
      <div className="mt-24"/>
      <BulletsCard id="documents" title={POINTS_TITLE} points={POINTS}/>
      <TryYourSkills/>
    </>
  );
}
