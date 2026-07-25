import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeUp from "@/components/shared/FadeUp";

export default function AboutHero() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <FadeUp>
          <SectionHeading
            badge="About MS Windows"
            title="Sydney's Trusted Window & Door Specialists"
            description="We provide premium aluminium windows, doors, and shopfront systems for residential and commercial properties across Sydney. Our commitment to quality workmanship, reliable service, and customer satisfaction has made us a trusted choice for homeowners, builders, and businesses."
            center
          />
        </FadeUp>
      </Container>
    </section>
  );
}