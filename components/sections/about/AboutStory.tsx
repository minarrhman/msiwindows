import Image from "next/image";

import Container from "@/components/layout/Container";
import FadeUp from "@/components/shared/FadeUp";

export default function AboutStory() {
  return (
    <section className="pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <FadeUp>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/products/shop-front.jpeg"
                alt="MS Windows Sydney"
                fill
                className="object-cover"
              />
            </div>
          </FadeUp>

          <FadeUp>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Who We Are
              </span>

              <h2 className="mt-3 text-4xl font-bold">
                Built Around Quality & Customer Service
              </h2>

              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  At MS Windows, we specialise in supplying and
                  installing high-quality aluminium windows,
                  doors, and shopfront systems throughout Sydney.
                </p>

                <p>
                  Whether you're building a new home,
                  renovating an existing property, or upgrading
                  a commercial space, our team is committed
                  to delivering products that combine durability,
                  performance, and modern design.
                </p>

                <p>
                  From the first consultation through to
                  installation, we focus on clear communication,
                  attention to detail, and professional workmanship.
                </p>
              </div>
            </div>
          </FadeUp>

        </div>
      </Container>
    </section>
  );
}