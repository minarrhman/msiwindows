import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";


export default function ProductsHero() {


  return (
    <>

      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            badge="Our Products"
            title="Premium Windows & Doors for Sydney Properties"
            description="Explore our range of aluminium windows, doors, and commercial glazing solutions designed for durability, energy efficiency, and modern Australian living."
            center
          />
        </Container>
      </section>

    </>
  );
}

