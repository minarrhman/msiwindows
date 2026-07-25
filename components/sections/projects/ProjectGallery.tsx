"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export default function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) =>
      prev === images.length - 1
        ? 0
        : prev + 1
    );
  };

  const previous = () => {
    setCurrent((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    );
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">

      {/* IMAGE */}

      <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden">

        <AnimatePresence >

          <motion.div
            key={images[current]}
            initial={{
              opacity: 0,
              scale: 1.02,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={title}
              fill
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </motion.div>

        </AnimatePresence>

      </div>

      {/* ARROWS */}

      {images.length > 1 && (
        <>
          <button
            onClick={previous}
            className="
              absolute
              bottom-4
              left-4
              z-20
              rounded-full
              bg-black/60
              p-2
              text-white
              transition
              hover:bg-black/80
            "
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="
              absolute
              bottom-4
              left-16
              z-20
              rounded-full
              bg-black/60
              p-2
              text-white
              transition
              hover:bg-black/80
            "
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* INDICATORS */}

      {images.length > 1 && (
        <div
          className="
            absolute
            bottom-5
            left-1/2
            z-20
            flex
            -translate-x-1/2
            gap-2
          "
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrent(index)
              }
              className={`
                rounded-full
                transition-all
                duration-300
                ${current === index
                  ? "h-2.5 w-8 bg-white"
                  : "h-2.5 w-2.5 bg-white/50"
                }
              `}
            />
          ))}
        </div>
      )}

    </div>
  );
}