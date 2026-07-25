"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type FeaturedProductItemProps = {
  title: string;
  description: string;
  image: string;
  reversed?: boolean;
};

export default function FeaturedProductItem({
  title,
  description,
  image,
  reversed = false,
}: FeaturedProductItemProps) {
  return (
    <div
      className={`relative grid items-center gap-8 lg:gap-0 ${
        reversed
          ? "lg:grid-cols-[40%_60%]"
          : "lg:grid-cols-[60%_40%]"
      }`}
    >
      {/* IMAGE */}

      <motion.div
        initial={{
          opacity: 0,
          y: reversed ? 60 : -60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
        className={reversed ? "lg:order-2" : ""}
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* CONTENT CARD */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.15,
        }}
        className={`
          relative z-10
          min-h-[290px]
          rounded-2xl
          bg-zinc-100/95
          border-zinc-300
          p-8
          shadow-xl
          lg:p-10
          ${
            reversed
              ? "lg:-mr-24 lg:order-1"
              : "lg:-ml-24"
          }
        `}
      >
        <h3 className="text-3xl font-bold">
          {title}
        </h3>

        <p className="mt-4 text-muted-foreground">
          {description}
        </p>
        <Link href="/contact#enquiry-form">
          <Button className="mt-6">
            Request a Quote
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}