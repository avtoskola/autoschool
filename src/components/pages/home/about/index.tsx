import GradientBorderCard from '@/components/common/cards/gradient-border-card';

const TEXT = <>
  Однією з найстаріших автошкіл Харкова є Салтівський навчальний спортивно-технічний
  центр ТСО України (раніше ДОСААФ).<br/><br/>
  Заснований в далекому 1965 році, за більш ніж
  58 років наша автошкола пройшла довгий шлях: удосконалюючи і відточуючи методики
  підготовки водіїв транспортних засобів різних категорій. <br/><br/>
  Автошкола є професійно-технічним
  навчальним закладом, який проводить професійну підготовку водіїв транспортних засобів
  категорії «А1», «А», «В» і перепідготовку водіїв транспортних засобів з категорії «В»
  на категорію «С», «С1», «СЕ»
</>;

export default function About() {
  return (
    <section id="about" className="max-w-container mx-auto py-24 max-lg:px-4 scroll-mt-[150px] max-lg:scroll-mt-[76px] " >
      <GradientBorderCard
        contentClassName="!p-[5%] !gap-y-0 max-lg:!py-10"
        additionalContent={
          <h3 className="absolute bg-white whitespace-nowrap -top-6 left-1/2 -translate-x-1/2 px-8 text-3xlarge font-semibold mb-10 max-md:text-xlarge max-md:px-3 max-md:-top-4">
            Про Організацію
          </h3>
        }
        mainText={TEXT}
      />
    </section>
  );
}
