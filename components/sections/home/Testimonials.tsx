import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialCard from "@/components/shared/TestimonialCard";

import FadeUp from "@/components/shared/FadeUp";
import StaggerContainer from "@/components/shared/StaggerContainer";

import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24">
      <Container>

        <FadeUp>
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            description="We're proud of the relationships we build and the results we deliver."
            center
          />
        </FadeUp>

        <StaggerContainer>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <FadeUp key={testimonial.name}>
                <TestimonialCard
                  {...testimonial}
                />
              </FadeUp>
            ))}
          </div>
        </StaggerContainer>

      </Container>
    </section>
  );
}

