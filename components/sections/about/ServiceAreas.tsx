import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeUp from "@/components/shared/FadeUp";

import { SERVICE_AREAS } from "@/constants/service-areas";

export default function ServiceAreas() {
  return (
    <section className="py-24">
      <Container>

        <FadeUp>
          <SectionHeading
            badge="Service Areas"
            title="Proudly Serving Sydney"
            description="We provide window, door, and shopfront solutions across Sydney's residential and commercial sectors."
            center
          />
        </FadeUp>

       <div className="mt-16 flex flex-wrap justify-center gap-4">
          {SERVICE_AREAS.map((area) => (
            <FadeUp key={area}>
              <div
                className="
                  rounded-full
                  border
                  border-zinc-300
                  bg-zinc-100
                  px-6
                  py-3
                  text-center
                  font-medium
                "
              >
                {area}
              </div>
            </FadeUp>
          ))}
        </div>

      </Container>
    </section>
  );
}