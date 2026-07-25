import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeUp from "@/components/shared/FadeUp";

export default function ProjectsHero() {
  return (
    <section className="py-24 md:py-32">
      <Container>

        <FadeUp>
          <SectionHeading
            badge="Our Projects"
            title="Recent Window & Door Installations Across Sydney"
            description="Browse a selection of residential and commercial projects completed by our experienced installation team throughout Sydney."
            center
          />
        </FadeUp>

      </Container>
    </section>
  );
}