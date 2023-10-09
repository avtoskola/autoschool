import Link from 'next/link';

import Map from '@/components/common/map';
import { ADDRESS, EMAIL, HEADER, OFFICE_TITLE, PHONE_1, PHONE_2 } from '@/components/pages/home/contact-info/constants';

export default function ContactInfo() {
  return (
    <section id="contacts" className="max-w-container m-auto max-lg:px-4 scroll-mt-[150px] max-lg:scroll-mt-[74px]">
      <h1 className="text-6xlarge font-semibold text-center mb-8 md:mb-[75px] max-md:text-3xlarge">
        {HEADER}
      </h1>
      <div
        className="flex justify-between md:justify-between flex-wrap md:flex-nowrap relative max-lg:flex-col gap-y-10 max-md:gap-y-5">
        <div className="mx-auto flex flex-col justify-center max-lg:mx-0">
          <h3 className="text-lg font-semibold mb-4">{OFFICE_TITLE}</h3>
          <div className="text-medium flex flex-col gap-y-1">
            <p>Адреса: {ADDRESS}</p>
            <p>
              <Link className="hover:underline" href="tel:+38 (050) 185-43-72">
                {PHONE_1}
              </Link>
            </p>
            <p>
              <Link className="hover:underline" href="tel:+38 (096) 827-31-96">
                {PHONE_2}
              </Link>
            </p>
            <p>
              <Link className="hover:underline" href="mailto:auto@autoschool.org.ua">
                {EMAIL}
              </Link>
            </p>
          </div>
        </div>
        <Map id="contact-map" className="min-w-[48%] max-lg:min-w-full scroll-mt-[200px] max-lg:scroll-mt-[100px] max-lg:max-w-full" />
      </div>
    </section>
  );
}
