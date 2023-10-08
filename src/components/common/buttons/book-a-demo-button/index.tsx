import Link from 'next/link';

export default function BookADemoButton() {
  return (
    <Link
      href="/demo"
      className="font-semibold leading-[1.3em] text-sm py-3 px-6 m-auto text-white bg-purple hover:bg-yellow hover:text-white rounded-xl"
    >
      Book a demo
    </Link>
  );
}
