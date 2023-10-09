import Head from 'next/head';

import Categories from '../components/pages/home/categories';
import About from '@/components/pages/home/about';
import ContactInfo from '@/components/pages/home/contact-info';
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
      <Head>
        <title>САЛТІВСЬКИЙ УСТЦ ТСОУ м.Харкова (ДОСААФ)</title>
        <meta
          name="description"
          content="САЛТІВСЬКИЙ УЧБОВИЙ СПОРТИВНО-ТЕХНІЧНИЙ ЦЕНТР ТОВАРИСТВА СПРИЯННЯ ОБОРОНІ УКРАЇНИ М. ХАРКОВА - це автошкола у місті Харків, що дає змогу легко навчатись водінню та легко його здавати"
        />
      </Head>
      <HeroSection/>
      <div className="pt-20"/>
      <Categories/>
      <div className="pt-32"/>
      <About/>
      <div className="pt-32"/>
      <Steps/>
      <div className="bg-secondary">
        <div className="pt-28"/>
        <BulletsCard id="documents" title={POINTS_TITLE} points={POINTS}/>
        <div className="pt-28" />
        <ContactInfo/>
        <div className="pt-28" />
      </div>
      <TryYourSkills/>
    </>
  );
}
