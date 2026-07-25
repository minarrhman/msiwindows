import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/shared/Reveal";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        bg-[url('/images/hero-background1.jpeg')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      {/* Dark Overlay */}
     <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <Container>
        <Reveal>
          <div className="relative z-10 max-w-3xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Window Installation & Replacement
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Sydney's Trusted Window Service Professionals
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              High-quality window installation, replacement, and repair
              solutions for commercial and residential projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact#enquiry-form">
                <Button size="lg">
                  Get a Free Quote
                </Button>
              </Link>

              <a href="tel:+61450351924">
                <Button size="lg" variant="outline" className="text-black">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}