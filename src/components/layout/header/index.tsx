import Link from 'next/link';

import cls from './header.module.css';
import { NAV_LINKS } from '@/components/layout/header/constants';
import MobileMenu from '@/components/layout/header/mobile-menu';

export default function Header() {
  return (
    <header className="h-[76px] lg:h-[150px] bg-white fixed top-0 w-full z-10">
      <div className=" max-w-container m-auto h-full">
        <nav className="mx-auto h-full flex max-w-7xl items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1 pl-4 lg:pl-0">
            <Link href="/#home-hero" className="text-3xlarge font-semibold max-lg:text-xlarge max-sm:text-large">
              САЛТІВСЬКИЙ УСТЦ ТСОУ
            </Link>
          </div>
          <div className="hidden lg:flex h-full">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`self-center ${cls.navLink} text-md font-medium leading-6 text-gray-900 py-6 px-2.5`}>
                {link.name}
              </Link>
            ))}
          </div>
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
}
