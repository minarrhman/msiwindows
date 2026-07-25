"use client";

import { motion } from "framer-motion";

import ProjectGallery from "./ProjectGallery";

type ProjectCardProps = {
  title: string;
  location: string;
  description: string;
  images: string[];
  reversed?: boolean;
};

export default function ProjectCard({
  title,
  location,
  description,
  images,
  reversed = false,
}: ProjectCardProps) {
  return (
    <div
      className={`relative grid items-center gap-8 lg:gap-0 ${
        reversed
          ? "lg:grid-cols-[40%_60%]"
          : "lg:grid-cols-[60%_40%]"
      }`}
    >
      {/* GALLERY */}

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
        <ProjectGallery
          images={images}
          title={title}
        />
      </motion.div>

      {/* CONTENT */}

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
          relative
          z-10
          min-h-[320px]
          rounded-2xl
          border
          border-zinc-300
          bg-zinc-100/95
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
        <span
          className="
            inline-block
            rounded-full
            bg-primary/10
            px-3
            py-1
            text-sm
            font-medium
            text-primary
          "
        >
          {location}
        </span>

        <h3 className="mt-5 text-3xl font-bold">
          {title}
        </h3>

        <p className="mt-5 text-muted-foreground">
          {description}
        </p>
      </motion.div>
    </div>
  );
}