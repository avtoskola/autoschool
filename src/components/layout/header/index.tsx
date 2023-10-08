import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-[76px] lg:h-[150px] bg-white fixed top-0 w-full z-10 ">
      <div className=" max-w-container m-auto h-full">
        <nav className="mx-auto h-full flex max-w-7xl items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1 pl-4 lg:pl-0">
            <Link href="#home-hero" className="text-3xlarge font-semibold max-lg:text-xlarge">
              САЛТІВСЬКИЙ УСТЦ ТСОУ
            </Link>
          </div>
          <div className="hidden lg:flex h-full">
            <Link href="#categories"
              className="self-center navLink text-md font-medium leading-6 text-gray-900 py-6 px-2.5">
              Категорії
            </Link>
            <Link href="#about"
              className="self-center navLink text-md font-medium leading-6 text-gray-900 py-6 px-2.5">
              Організація
            </Link>
            <Link href="#steps"
              className="self-center navLink text-md font-medium leading-6 text-gray-900 py-6 px-2.5">
              Навчання
            </Link>
            <Link href="#documents"
              className="self-center navLink text-md font-medium leading-6 text-gray-900 py-6 px-2.5">
              Документи
            </Link>
          </div>
          {/* <div className="hidden lg:flex lg:justify-end py-6 pl-10 pr-4 mr-4"> */}
          {/*  <Link href="/demo"> */}
          {/*    <PrimaryButton size="10-39"> */}
          {/*      Book a demo */}
          {/*    </PrimaryButton> */}
          {/*  </Link> */}
          {/* </div> */}
        </nav>
      </div>
    </header>
  );
}
