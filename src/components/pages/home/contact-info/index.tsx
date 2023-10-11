import Link from 'next/link';

import translations from '../../../../../public/locales/ua.json';
import Map from '@/components/common/map';

export default function ContactInfo() {
  return (
    <section id="contacts" className="max-w-container m-auto max-lg:px-4 scroll-mt-[150px] max-lg:scroll-mt-[74px]">
      <h2 className="text-6xlarge font-semibold text-center mb-8 md:mb-[75px] max-md:text-3xlarge">
        {translations["ЗВ'ЯЗАТИСЬ заголовок"]}
      </h2>
      <div
        className="flex justify-between md:justify-between flex-wrap md:flex-nowrap relative max-lg:flex-col gap-y-10 max-md:gap-y-5">
        <div className="mx-auto flex flex-col justify-center max-lg:mx-0">
          <p className="text-lg font-semibold mb-4">{translations["ЗВ'ЯЗАТИСЬ школа"]}</p>
          <div className="text-medium flex flex-col gap-y-1">
            <p>{translations["ЗВ'ЯЗАТИСЬ адреса"]}</p>
            <p>
              <Link className="hover:underline" href="tel:+38 (050) 185-43-72">
                {translations["ЗВ'ЯЗАТИСЬ водафон"]}
              </Link>
            </p>
            <p>
              <Link className="hover:underline" href="tel:+38 (096) 827-31-96">
                {translations["ЗВ'ЯЗАТИСЬ київстар"]}
              </Link>
            </p>
            <p>
              <Link className="hover:underline" href="mailto:auto@autoschool.org.ua">
                {translations["ЗВ'ЯЗАТИСЬ пошта"]}
              </Link>
            </p>
          </div>
        </div>
        <Map id="contact-map" className="min-w-[48%] max-lg:min-w-full scroll-mt-[200px] max-lg:scroll-mt-[100px] max-lg:max-w-full" />
      </div>
    </section>
  );
}
