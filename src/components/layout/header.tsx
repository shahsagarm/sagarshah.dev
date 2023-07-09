'use client';

import { useTheme } from 'next-themes';
import { Menu, X } from 'lucide-react';

import { mergeClasses } from '@/lib/utils';
import useScroll from '@/hooks/use-scroll';
import Link from '@/components/navigation/link';
import Button from '@/components/general/button';
import ThemeSwitcher from '@/components/general/theme-switcher';
import IconButton from '@/components/general/icon-button';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from '@/components/navigation/drawer';
import { NAV_LINKS } from '@/lib/data';

const Logo = () => (
  <div className="flex items-center justify-center rounded-xl bg-gray-950 p-2">
    <p className="text-2xl font-semibold leading-none text-gray-50">SS</p>
  </div>
);

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
            <Logo />
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <ul className="flex list-none items-center gap-6">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="h-6 w-0.5 bg-gray-100"></div>
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <Button>Download CV</Button>
            </div>
          </div>

          <div className="flex md:hidden">
            <Drawer>
              <DrawerTrigger>
                <IconButton>
                  <Menu />
                </IconButton>
              </DrawerTrigger>
              <DrawerContent>
                <div className="flex items-center justify-between border-b border-gray-100 p-4">
                  <Logo />
                  <DrawerClose>
                    <IconButton>
                      <X />
                    </IconButton>
                    <span className="sr-only">Close</span>
                  </DrawerClose>
                </div>
                <div className="border-b border-gray-100 p-4">
                  <ul className="flex list-none flex-col gap-4">
                    {NAV_LINKS.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-4 p-4">
                  <div className="flex items-center justify-between">
                    <p>Switch Theme</p>
                    <ThemeSwitcher />
                  </div>
                  <Button>Download CV</Button>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
