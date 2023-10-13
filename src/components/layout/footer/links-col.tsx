'use client';

import Link from 'next/link';

import { TextLinksColType } from '@/components/layout/footer/types';

interface Props {
    textLinksCol: TextLinksColType;
}

export default function FooterLinksCol(props: Props) {
  return (
    <div className="py-2.5 px-5 flex flex-wrap flex-col w-fit">
      <p className="text-1.8xl font-bold mb-3 max-sm:mb-1 max-sm:text-mob-l">{props.textLinksCol.header}</p>
      <ul>
        {props.textLinksCol.links.map((link) => (
          <li key={link.href} className="mb-[10px] max-sm:mb-0">
            <Link className="hover:underline text-[16px] max-sm:text-mob-m" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
