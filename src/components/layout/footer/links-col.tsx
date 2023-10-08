'use client';

import Link from 'next/link';

import { TextLinksColType } from '@/components/layout/footer/types';

interface Props {
    textLinksCol: TextLinksColType;
}

export default function FooterLinksCol(props: Props) {
  return (
    <div className="p-2.5 flex flex-wrap flex-col basis-full md:basis-1/3">
      <h5 className="text-1.8xl font-bold mb-3">{props.textLinksCol.header}</h5>
      <ul>
        {props.textLinksCol.links.map((link) => (
          <li key={link.href} className="mb-[10px]">
            <Link className="hover:underline text-[16px]" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
