import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import StaggerContainer from "@/components/shared/StaggerContainer";
import FadeUp from "@/components/shared/FadeUp";

import { WHY_CHOOSE_US } from "@/data/why-choose-us";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Why Choose Us"
          title="Trusted Window Solutions Across Australia"
          description="We combine premium materials, expert installation, and outstanding customer service to deliver results that last."
          center
        />

        <StaggerContainer>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = item.icon;

              return (
                <FadeUp key={item.title}>
                  <Card
                    className="
                    bg-zinc-100/95
                    border-zinc-300
                    h-full
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                  >
                    <CardContent className="flex h-full flex-col p-6">
                      <Icon className="mb-4 h-10 w-10 text-primary" />

                      <h3 className="text-lg font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-3 flex-grow text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </FadeUp>
              );
            })}
          </div>
        </StaggerContainer>
      </Container>
    </section>
  );
}