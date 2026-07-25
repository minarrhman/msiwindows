import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeUp from "@/components/shared/FadeUp";

export default function ContactHero() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <FadeUp>
          <SectionHeading
            badge="Contact Us"
            title="Let's Discuss Your Next Project"
            description="Need a quote or have questions about windows, doors, or shopfront systems? Our Sydney team is ready to help."
            center
          />
        </FadeUp>
      </Container>
    </section>
  );
}