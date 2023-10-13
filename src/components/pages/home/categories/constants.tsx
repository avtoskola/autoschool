import translations from '../../../../../public/locales/ua.json';
import { CardInfoType } from '@/components/pages/home/categories/types';

export const CATEGORIES_CARDS: CardInfoType[] = [
  {
    title: translations['КАТЕГОРІЇ категорія А'],
    price: translations['КАТЕГОРІЇ категорія А ціна'],
    priceText: translations['КАТЕГОРІЇ категорія А ціна пояснення'],
    categoryDescription: {
      title: translations['КАТЕГОРІЇ категорія А'],
      text: translations['КАТЕГОРІЇ категорія А пояснення'],
    },
    list: [
      {
        title: <>Теоретичний курс: </>,
        text: translations['КАТЕГОРІЇ категорія А теоретичний курс'],
      },
      {
        title: <>Практичний курс: </>,
        text: translations['КАТЕГОРІЇ категорія А практичний курс'],
      },
      {
        title: <>Навчання з: </>,
        text: translations['КАТЕГОРІЇ категорія А навчання з'],
      },
    ],
    image: '/images/home/motocycle.svg',
    imageWidth: 2084,
    imageHeight: 1389,
  },
  {
    title: translations['КАТЕГОРІЇ категорія В'],
    price: translations['КАТЕГОРІЇ категорія В ціна'],
    priceText: translations['КАТЕГОРІЇ категорія В ціна пояснення'],
    categoryDescription: {
      title: translations['КАТЕГОРІЇ категорія В'],
      text: translations['КАТЕГОРІЇ категорія В пояснення'],
    },
    list: [
      {
        title: <>Теоретичний курс: </>,
        text: translations['КАТЕГОРІЇ категорія В теоретичний курс'],
      },
      {
        title: <>Практичний курс: </>,
        text: translations['КАТЕГОРІЇ категорія В практичний курс'],
      },
      {
        title: <>Навчання з: </>,
        text: translations['КАТЕГОРІЇ категорія В навчання з'],
      },
    ],
    image: '/images/home/auto-2.svg',
    imageWidth: 2084,
    imageHeight: 1389,
  },
  {
    title: translations['КАТЕГОРІЇ категорія з В на С'],
    price: translations['КАТЕГОРІЇ категорія з В на С ціна'],
    priceText: translations['КАТЕГОРІЇ категорія з В на С ціна пояснення'],
    categoryDescription: {
      title: translations['КАТЕГОРІЇ категорія з В на С'],
      text: translations['КАТЕГОРІЇ категорія з В на С пояснення'],
    },
    additionalDocuments: {
      title: translations['КАТЕГОРІЇ категорія з В на С додаткові документи заголовок'],
      text: [
        translations['КАТЕГОРІЇ категорія з В на С додаткові документи текст 1'],
        translations['КАТЕГОРІЇ категорія з В на С додаткові документи текст 2'],
      ],
    },
    list: [
      {
        title: <>Теоретичний курс: </>,
        text: translations['КАТЕГОРІЇ категорія з В на С теоретичний курс'],
      },
      {
        title: <>Практичний курс: </>,
        text: translations['КАТЕГОРІЇ категорія з В на С практичний курс'],
      },
      {
        title: <> Практика: </>,
        text: translations['КАТЕГОРІЇ категорія з В на С практика'],
      },
    ],
    image: '/images/home/lorry.svg',
    imageWidth: 512,
    imageHeight: 512,
  },
  {
    title: translations['КАТЕГОРІЇ категорія з С на СЕ'],
    price: translations['КАТЕГОРІЇ категорія з С на СЕ ціна'],
    priceText: translations['КАТЕГОРІЇ категорія з С на СЕ ціна пояснення'],
    categoryDescription: {
      title: translations['КАТЕГОРІЇ категорія з С на СЕ'],
      text: translations['КАТЕГОРІЇ категорія з С на СЕ пояснення'],
    },
    additionalDocuments: {
      title: translations['КАТЕГОРІЇ категорія з С на СЕ  додаткові документи заголовок'],
      text: [
        translations['КАТЕГОРІЇ категорія з С на СЕ  додаткові документи текст 1'],
        translations['КАТЕГОРІЇ категорія з С на СЕ  додаткові документи текст 2'],
      ],
    },
    list: [
      {
        title: <>Теоретичний курс: </>,
        text: translations['КАТЕГОРІЇ категорія з С на СЕ теоретичний курс'],
      },
      {
        title: <>Практичний курс: </>,
        text: translations['КАТЕГОРІЇ категорія з С на СЕ практичний курс'],
      },
    ],
    image: '/images/home/truck.svg',
    imageWidth: 2084,
    imageHeight: 1389,
  },
  {
    title: translations['КАТЕГОРІЇ допідготовка'],
    price: translations['КАТЕГОРІЇ допідготовка ціна'],
    categoryDescription: {
      title: translations['КАТЕГОРІЇ допідготовка'],
      text: <>
        {translations['КАТЕГОРІЇ категорія А пояснення']}
        <br/><br/>
        {translations['КАТЕГОРІЇ категорія В пояснення']}
        <br/><br/>
        {translations['КАТЕГОРІЇ категорія з В на С пояснення']}
        <br/><br/>
        {translations['КАТЕГОРІЇ категорія з С на СЕ пояснення']}
      </>,
    },
    list: [
      {
        title: <>Категорії: </>,
        text: translations['КАТЕГОРІЇ допідготовка категорії'],
      },
      {
        title: <>Практичний курс: </>,
        text: translations['КАТЕГОРІЇ допідготовка практичний курс'],
      },
      {
        title: <>Теоретичний курс: </>,
        text: translations['КАТЕГОРІЇ допідготовка теоретичний курс'],
      },
    ],
    image: '/images/home/wheel.svg',
    imageWidth: 200,
    imageHeight: 200,
  },
];
