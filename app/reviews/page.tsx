import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialCard from "@/components/shared/TestimonialCard";

import ReviewForm from "@/components/reviews/ReviewForm";

import { getReviews } from "@/lib/reviews";

export default async function ReviewsPage() {
  const reviews = await getReviews(15);

  return (
    <main className="py-32">
      <Container>
        <SectionHeading
          badge="Customer Reviews"
          title="What Our Clients Say"
          description="Read feedback from customers we've worked with across Sydney."
          center
        />

        {reviews.length > 0 ? (
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <TestimonialCard
                key={review.id}
                name={review.name}
                location={review.address}
                quote={review.review}
                rating={review.rating}
              />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-muted-foreground">
            No reviews yet.
          </p>
        )}

        <div className="mx-auto mt-24 max-w-2xl">
          <ReviewForm />
        </div>
      </Container>
    </main>
  );
}