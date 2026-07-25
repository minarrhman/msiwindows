import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import Container from "@/components/layout/Container";
import FadeUp from "@/components/shared/FadeUp";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

const methods = [
  {
    title: "Call Us",
    value: "0450 351 924",
    icon: Phone,
  },
  {
    title: "Email Us",
    value: "mswindows777@gmail.com",
    icon: Mail,
  },
  {
    title: "Visit Us",
    value: "Sydney NSW",
    icon: MapPin,
  },
];

export default function ContactMethods() {
  return (
    <section className="bg-gradient-to-r from-gray-50- via-gray-700 to-gray-900 py-24">
      <Container>

        <div className="grid gap-6 md:grid-cols-3">
          {methods.map((method) => {
            const Icon = method.icon;

            return (
              <FadeUp key={method.title}>
                <Card className="h-full border-zinc-300 bg-zinc-100/95">
                  <CardContent className="flex flex-col items-center p-8 text-center">

                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>

                    <h3 className="font-semibold">
                      {method.title}
                    </h3>

                    <p className="mt-2 text-muted-foreground">
                      {method.value}
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