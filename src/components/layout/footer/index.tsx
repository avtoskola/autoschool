import Link from 'next/link';

import translations from '../../../../public/locales/ua.json';
import { FOOTER_TEXT_LINKS_LIST } from '@/components/layout/footer/constants';
import FooterLinksCol from '@/components/layout/footer/links-col';

export default function Footer() {
  return (
    <footer className='bg-gray-light py-5 lg:pt-[5.2rem] lg:pb-14 pl-4 pr-4 max-sm:py-3'>
      <div className='max-w-container m-auto'>
        <div className='flex max-lg:flex-col'>
          <div className="flex w-fit py-5 lg:py-0 max-sm:py-3">
            <Link href="/#home-hero" className="text-3xlarge font-semibold max-sm:text-mob-3xl">
              {translations['ЛОГО']}
            </Link>
          </div>
          <div className="flex gap-5 justify-end flex-grow max-sm:justify-center">
            {FOOTER_TEXT_LINKS_LIST.map((textLinksCol, index) =>
              <FooterLinksCol key={index} textLinksCol={textLinksCol}/>,
            )}
          </div>
        </div>
        <div className="flex justify-around lg:justify-between items-end flex-wrap gap-4 lg:gap-0 mt-12 max-sm:mt-5">
          <div className='flex gap-6 mb-[10px] md:mb-[0] lg:gap-[43px]'>
            {/* {SOCIAL_MEDIA_LINKS.map((link) => ( */}
            {/*  <Link */}
            {/*    className="w-[30px] h-[30px] inline-flex justify-center items-center rounded bg-transparent hover:opacity-90" */}
            {/*    key={link.href} */}
            {/*    href={link.href} */}
            {/*  > */}
            {/*    {link.icon} */}
            {/*  </Link> */}
            {/* ))} */}
          </div>
          <span className='text-[13px] mb-[10px] md:mb-[0] max-sm:text-mob-xs'>{translations['КОЛОНТИТУЛ права захищені']}</span>
        </div>
      </div>
    </footer>
  );
}
