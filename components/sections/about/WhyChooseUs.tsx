import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeUp from "@/components/shared/FadeUp";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { ABOUT_BENEFITS } from "@/data/about-benefits";

export default function WhyChooseUs() {
  return (
    <section className=" py-24">
      <Container>

        <FadeUp>
          <SectionHeading
            badge="Why Choose Us"
            title="Why Sydney Clients Work With Us"
            description="Our reputation is built on quality products, dependable service, and long-term customer satisfaction."
            center
          />
        </FadeUp>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ABOUT_BENEFITS.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <FadeUp key={benefit.title}>
                <Card className="h-full border-zinc-300 bg-zinc-100/95">
                  <CardContent className="p-8">

                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>

                    <h3 className="text-xl font-semibold">
                      {benefit.title}
                    </h3>

                    <p className="mt-4 text-muted-foreground">
                      {benefit.description}
                    </p>

                  </CardContent>
                </Card>
              </FadeUp>
            );
          })}
        </div>

      </Container>
    </section>
  );
}