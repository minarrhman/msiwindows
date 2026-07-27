import ProjectsHero from "@/components/sections/projects/ProjectsHero";
import ProjectsGrid from "@/components/sections/projects/ProjectsGrid";

export const metadata = {
  title: "Recent Projects Sydney",
  description:
    "Browse completed aluminium window, door and shopfront installation projects across Sydney.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
    </>
  );
}