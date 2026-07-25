"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { NAVIGATION } from "@/constants/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // Close when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative z-50">
      {/* MENU BUTTON */}

      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/5
          text-white
          backdrop-blur
          transition-all
          hover:bg-white/10
        "
        aria-label="Toggle menu"
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      {/* DROPDOWN */}

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              absolute
              right-0
              top-14
              z-50
              w-[85vw]
              max-w-[320px]
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-zinc-950/95
              backdrop-blur-xl
              shadow-2xl
            "
          >
            {/* HEADER */}

            <div className="border-b border-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Navigation
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">
                Window Service
              </h3>

              <p className="mt-1 text-sm text-zinc-400">
                Sydney Windows & Doors
              </p>
            </div>

            {/* LINKS */}

            <nav className="p-3">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    items-center
                    rounded-xl
                    px-4
                    py-3
                    text-white
                    transition-all
                    duration-200
                    hover:bg-white/5
                    hover:text-primary
                  "
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}

            <div className="border-t border-white/10 p-4">
              <Link href="/contact#enquiry-form">
                <button
                  onClick={() => setOpen(false)}
                  className="
                    w-full
                    rounded-xl
                    bg-primary
                    px-4
                    py-3
                    font-medium
                    text-white
                    transition-transform
                    hover:scale-[1.02]
                  "
                >
                  Request a Quote
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

