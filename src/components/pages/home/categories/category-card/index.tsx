import Image from 'next/image';
import { ReactNode } from 'react';

import CardWhitePrimary from '@/components/common/cards/card-white-primary';

interface Props {
    title: ReactNode;
    list: {
        title: ReactNode;
        text: ReactNode;
    }[];
    image: string;
    imageWidth: number;
    imageHeight: number;
    price: ReactNode;
    priceText?: ReactNode;
}

export default function CategoryCard(props: Props) {
  return (
    <CardWhitePrimary
      className="flex-1 flex flex-col min-w-[250] max-w-[350px] rounded-xl sm:min-w-[330px]">
      <div className="flex justify-between items-center px-4 py-3 border-b-2 border-b-gray-500 h-20 max-sm:h-[50px]">
        <p className="text-xlarge font-semibold max-sm:text-mob-4xl">{props.title}</p>
        <Image
          className="max-w-[80px] max-h-[65px] max-sm:max-w-[40px] max-sm:max-h-[32.5px]"
          src={props.image}
          alt="transport"
          width={props.imageWidth}
          height={props.imageHeight}
        />
      </div>
      <div className="p-4 max-sm:p-3">
        <div className="mb-6">
          <p className="font-semibold text-3xlarge mb-1 max-sm:text-mob-3xl">{props.price}</p>
          {props.priceText
            ? <p className="text-small whitespace-pre-line max-sm:text-mob-sm">
              {props.priceText}
            </p>
            : null
          }
        </div>
        <ul className="flex flex-col gap-y-6">
          {props.list.map((item, index) => (
            <li key={index} className="grid gap-x-3 grid-cols-[auto_1fr] max-sm:gap-x-2">
              <Image
                className="w-5 h-5 max-sm:w-3 max-sm:h-3 self-center"
                src="/images/icons/check.svg"
                alt="checkmark"
                width={20}
                height={20}
              />
              <p className="text-small self-center font-semibold leading-[1.2em] max-sm:text-mob-m">
                {item.title}
              </p>
              <p className="text-small col-start-2 col-end-3 whitespace-pre-line max-sm:text-mob-m">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </CardWhitePrimary>
  );
}
