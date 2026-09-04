import Link from "next/link";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialCard from "@/components/shared/TestimonialCard";

import FadeUp from "@/components/shared/FadeUp";
import StaggerContainer from "@/components/shared/StaggerContainer";

import { Button } from "@/components/ui/button";
import { getReviews } from "@/lib/reviews";

export default async function Testimonials() {
  const reviews = await getReviews(3);

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
            {reviews.map((review) => (
              <FadeUp key={review.id}>
                <TestimonialCard
                  name={review.name}
                  location={review.address}
                  quote={review.review}
                  rating={review.rating}
                />
              </FadeUp>
            ))}
          </div>
        </StaggerContainer>

        <FadeUp>
          <div className="mt-12 flex justify-center">
            <Link href="/reviews">
              <Button variant="outline">
                View All Reviews
              </Button>
            </Link>
          </div>
        </FadeUp>

      </Container>
    </section>
  );
}