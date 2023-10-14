import Head from 'next/head';

import translations from '../../public/locales/ua.json';
import Categories from '../components/pages/home/categories';
import About from '@/components/pages/home/about';
import ContactInfo from '@/components/pages/home/contact-info';
import Documents from '@/components/pages/home/documents';
import HeroSection from '@/components/pages/home/hero-section';
import Steps from '@/components/pages/home/steps';
import TryYourSkills from '@/components/pages/home/try-your-skills';

export default function Home() {
  return (
    <>
      <Head>
        <title>{translations['НАЗВА СТОРІНКИ']}</title>
        <meta name="description" content={translations['ОПИС СТОРІНКИ']} />
      </Head>
      <HeroSection/>
      <div className="pt-20 max-sm:pt-10"/>
      <Categories/>
      <div className="pt-32 max-sm:pt-16"/>
      <About/>
      <div className="pt-32 max-sm:pt-16"/>
      <Steps/>
      <div className="pt-28 max-sm:pt-14"/>
      <Documents/>
      <div className="pt-28 max-sm:pt-14" />
      <ContactInfo/>
      <div className="pt-28 max-sm:pt-14" />
      <TryYourSkills/>
    </>
  );
}
