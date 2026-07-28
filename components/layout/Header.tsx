'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Container from './Container';
import MobileMenu from './MobileMenu';

import { NAVIGATION } from "@/constants/navigation";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 0) return;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/10 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="leading-none text-white"
          >
            <span className="block text-2xl font-bold">
              MS Windows
            </span>

            <span className="block text-xs uppercase tracking-[0.2em] text-zinc-400">
              & Doors
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAVIGATION.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative
                    text-sm
                    font-medium
                    transition-colors
                    ${
                      isActive
                        ? "text-white"
                        : "text-zinc-300 hover:text-primary"
                    }
                  `}
                >
                  {item.label}

                  {isActive && (
                    <span
                      className="
                        absolute
                        -bottom-2
                        left-0
                        h-[2px]
                        w-full
                        rounded-full
                        bg-primary
                      "
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}

