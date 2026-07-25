import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { SERVICES } from "@/data/services";
import StaggerContainer from "@/components/shared/StaggerContainer";
import FadeUp from "@/components/shared/FadeUp";


import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Our Services"
          title="Complete Window Solutions"
          description="From installation to repairs, we provide services tailored to homes and businesses across Australia."
          center
        />

        <StaggerContainer>
          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <FadeUp key={service.title}>
                  <Card
                    className="
                  h-full
                  bg-zinc-100/95
                  border-zinc-300
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  "
                  >
                    <CardContent className="p-6 flex h-full flex-col">
                      <Icon className="mb-4 h-10 w-10 text-primary" />

                      <h3 className="text-xl font-semibold">
                        {service.title}
                      </h3>

                      <p className="mt-3 flex-grow text-muted-foreground">
                        {service.description}
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