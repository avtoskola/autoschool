import Link from 'next/link';

import translations from '../../../../../public/locales/ua.json';
import PrimaryButton from '@/components/common/buttons/primary-button';

interface Props {
  className?: string;
}

export default function TryYourSkills(props: Props) {
  return (
    <section
      id="try-your-skills"
      className={`bg-bright-blue-green-grid bg-no-repeat bg-cover bg-center m-auto py-16 md:py-18 text-white max-lg:px-4 max-sm:py-8 ${props.className ?? ''}`}
    >
      <h2 className="text-3xlarge font-semibold mb-2 text-center max-lg:text-3xl max-sm:text-mob-4xl">{translations['ПЕРЕВІРИТИ ЗНАННЯ заголовок']}</h2>
      <Link href="https://green-way.com.ua/uk/test-pdd" target="_blank">
        <PrimaryButton
          className="block mx-auto mt-7 max-sm:mt-3"
          size="10-39"
        >
          {translations['ПЕРЕВІРИТИ ЗНАННЯ кнопка']}
        </PrimaryButton>
      </Link>
    </section>
  );
}
