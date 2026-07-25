"use client";

import { useState } from "react";

import Container from "@/components/layout/Container";

import { Button } from "@/components/ui/button";

import { PROJECTS } from "@/data/projects";

import ProjectCard from "./ProjectCard";

const ITEMS_PER_PAGE = 3;

export default function ProjectsGrid() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(
    PROJECTS.length / ITEMS_PER_PAGE
  );

  const start =
    (page - 1) * ITEMS_PER_PAGE;

  const currentProjects =
    PROJECTS.slice(
      start,
      start + ITEMS_PER_PAGE
    );

  return (
    <section className="pb-24">
      <Container>

        <div className="space-y-24">

          {currentProjects.map(
            (project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                reversed={index % 2 !== 0}
              />
            )
          )}

        </div>

        {totalPages > 1 && (
          <div
            className="
              mt-20
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <Button
              variant="outline"
              disabled={page === 1}
              onClick={() =>
                setPage((prev) => prev - 1)
              }
            >
              Previous
            </Button>

            {Array.from({
              length: totalPages,
            }).map((_, index) => (
              <Button
                key={index}
                variant={
                  page === index + 1
                    ? "default"
                    : "outline"
                }
                onClick={() =>
                  setPage(index + 1)
                }
              >
                {index + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              disabled={
                page === totalPages
              }
              onClick={() =>
                setPage((prev) => prev + 1)
              }
            >
              Next
            </Button>
          </div>
        )}

      </Container>
    </section>
  );
}