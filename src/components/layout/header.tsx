'use client';

import { useTheme } from 'next-themes';

import { mergeClasses } from '@/lib/utils';
import useScroll from '@/hooks/use-scroll';
import Link from '@/components/navigation/link';
import Button from '@/components/general/button';
import ThemeSwitcher from '@/components/general/theme-switcher';

const Header = () => {
  const scrolled = useScroll(40);
  const { theme } = useTheme();

  return (
    <header
      className={mergeClasses(
        'sticky top-0 z-30 flex h-[72px] w-full items-center justify-center border-b border-transparent bg-gray-0 transition-all ease-in',
        scrolled ? 'border-gray-100 bg-gray-0/50 backdrop-blur-xl' : ''
      )}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-between px-4">
          <Link href="/" noCustomization>
            <div className="flex items-center justify-center rounded-xl bg-gray-950 p-2">
              <p className="text-2xl font-semibold leading-none text-gray-50">
                SS
              </p>
            </div>
          </Link>
          <ul className="flex list-none items-center gap-6">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <Button>Download CV</Button>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
