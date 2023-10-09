import Link from 'next/link';

import PrimaryButton from '@/components/common/buttons/primary-button';

const HEADER = <>Перевір свої знання з правил дорожнього руху</>;
const DESCRIPTION = <></>;
const BUTTON_LABEL = <>Перевірити</>;

interface Props {
  className?: string;
}

export default function TryYourSkills(props: Props) {
  return (
    <section
      id="try-your-skills"
      className={`bg-bright-blue-green-grid bg-no-repeat bg-cover bg-center m-auto py-16 md:pb-[80px] md:pt-[74px] text-white max-lg:px-4 ${props.className ?? ''}`}
    >
      <h5 className="text-3xlarge font-semibold mb-2 text-center max-lg:text-3xl">{HEADER}</h5>
      <p className="text-medium-l text-center mx-auto max-w-2xl max-lg:text-base">{DESCRIPTION}</p>
      <Link href="https://green-way.com.ua/uk/test-pdd" target="_blank">
        <PrimaryButton
          className="block mx-auto mt-7"
          size="10-39"
        >
          {BUTTON_LABEL}
        </PrimaryButton>
      </Link>
    </section>
  );
}
