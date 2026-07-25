import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeUp from "@/components/shared/FadeUp";
import StaggerContainer from "@/components/shared/StaggerContainer";

import { PROCESS_STEPS } from "@/data/process-steps";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProcessSection() {
  return (
    <section className="py-24">
      <Container>

        <FadeUp>
          <SectionHeading
            badge="From Inquiry to Installation"
            title="Getting Started Is Easy"
            description="A simple process designed to get your project moving quickly."
            center
          />
        </FadeUp>

        <StaggerContainer>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;

              return (
                <FadeUp key={step.title}>
                  <Card
                    className="
                      h-full
                      border-zinc-300
                      bg-zinc-100/95
                    "
                  >
                    <CardContent className="flex h-full flex-col p-8">
                      <div className="mb-6 flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>

                        <span className="text-sm font-semibold text-primary">
                          Step {index + 1}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold">
                        {step.title}
                      </h3>

                      <p className="mt-4 flex-grow text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </FadeUp>
              );
            })}
          </div>
        </StaggerContainer>

        <FadeUp>
          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact#enquiry-form">
              <Button size="lg">
                Submit an Enquiry
              </Button>
            </Link>
            <a href="tel:+61450351924">
              <Button
                size="lg"
                variant="outline"
              >
                Call 0450 351 924
              </Button>
            </a>
          </div>
        </FadeUp>

      </Container>
    </section>
  );
}

