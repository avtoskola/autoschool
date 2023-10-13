import translations from '../../../../public/locales/ua.json';
import { TextLinksColType } from '@/components/layout/footer/types';

export const HOME_LINKS: TextLinksColType = {
  header: translations['КОЛОНТИТУЛ стовпець 1 заголовок'],
  links: [
    { label: translations['НАВІГАЦІЯ посилання 1'], href: '/#categories' },
    { label: translations['НАВІГАЦІЯ посилання 2'], href: '/#about' },
    { label: translations['НАВІГАЦІЯ посилання 3'], href: '/#steps' },
    { label: translations['НАВІГАЦІЯ посилання 4'], href: '/#documents' },
  ],
};

export const CONTACTS: TextLinksColType = {
  header: translations['КОЛОНТИТУЛ стовпець 2 заголовок'],
  links: [
    { label: translations['КОЛОНТИТУЛ стовпець 2 посилання 1'], href: '/#contact-map' },
    { label: translations['КОЛОНТИТУЛ стовпець 2 посилання 2'], href: 'tel:+380501854372' },
    { label: translations['КОЛОНТИТУЛ стовпець 2 посилання 3'], href: 'tel:+380968361607' },
    { label: translations['КОЛОНТИТУЛ стовпець 2 посилання 4'], href: 'tel:+380961681588' },
    { label: translations['КОЛОНТИТУЛ стовпець 2 посилання 5'], href: 'mailto:mustcavtochkola@ukr.net' },
  ],
};

export const FOOTER_TEXT_LINKS_LIST: TextLinksColType[] = [
  HOME_LINKS,
  CONTACTS,
];
