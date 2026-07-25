import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeUp from "@/components/shared/FadeUp";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="py-24">
      <Container>

        <FadeUp>
          <SectionHeading
            badge="Visit Us"
            title="Meet us at out office"
            description="Visit our Sydney showroom, give us a call, or send an enquiry. Our team is ready to help with residential and commercial window and door solutions."
            center
          />
        </FadeUp>

        <div className="mt-20 grid items-stretch gap-8 lg:grid-cols-2">

          {/* LEFT */}

          <FadeUp>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-zinc-300 bg-zinc-100/95 p-8 lg:p-10">

              <h2 className="text-3xl font-bold">
                Visit Us
              </h2>

              <p className="mt-4 text-muted-foreground">
                Get in touch with our team.
              </p>

              <div className="mt-8 space-y-6">

                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />

                  <div>
                    <h3 className="font-semibold">
                      Address
                    </h3>

                    <p className="text-muted-foreground">
                      123 Example Street,
                      Sydney NSW 2000
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 text-primary" />

                  <div>
                    <h3 className="font-semibold">
                      Phone
                    </h3>

                    <p className="text-muted-foreground">
                      0450 351 924
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="mt-1 h-5 w-5 text-primary" />

                  <div>
                    <h3 className="font-semibold">
                      Email
                    </h3>

                    <p className="text-muted-foreground">
                      mswindows777@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 text-primary" />

                  <div>
                    <h3 className="font-semibold">
                      Business Hours
                    </h3>

                    <p className="text-muted-foreground">
                      Mon - Fri: 8:00am - 5:00pm
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </FadeUp>

          {/* RIGHT */}

          <FadeUp>
            <div className="overflow-hidden rounded-2xl border">
              <iframe
                src="https://www.google.com/maps?q=Sydney%20NSW&output=embed"
                className="h-full min-h-[500px] w-full"
                loading="lazy"
              />
            </div>
          </FadeUp>

        </div>

      </Container>
    </section>
  );
}