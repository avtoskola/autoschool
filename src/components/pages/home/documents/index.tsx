import translations from '../../../../../public/locales/ua.json';
import { BulletsCard } from '@/components/sections/bullets-card';

const POINTS = [
  translations['ДОКУМЕНТИ 1'],
  translations['ДОКУМЕНТИ 2'],
  translations['ДОКУМЕНТИ 3'],
  translations['ДОКУМЕНТИ 4'],
  translations['ДОКУМЕНТИ 5'],
  translations['ДОКУМЕНТИ 6'],
];

export default function Documents() {
  return <BulletsCard id="documents" title={translations['ДОКУМЕНТИ заголовок']} points={POINTS}/>;
}
