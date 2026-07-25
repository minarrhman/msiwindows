import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeUp from "@/components/shared/FadeUp";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I get a quote?",
    answer:
      "Most enquiries receive a response within one business day.",
  },
  {
    question: "Do you service all of Sydney?",
    answer:
      "Yes, we provide window, door, and shopfront solutions across Sydney and surrounding suburbs.",
  },
  {
    question: "Do you handle commercial projects?",
    answer:
      "Yes. We install shopfront systems and commercial glazing solutions for businesses throughout Sydney.",
  },
  {
    question: "Are your products custom made?",
    answer:
      "Yes. Our windows and doors are tailored to suit your project's requirements.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="py-24">
      <Container>

        <FadeUp>
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            description="Answers to some of the most common questions we receive."
            center
          />
        </FadeUp>

        <FadeUp>
          <div className="mx-auto mt-16 max-w-4xl">
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.question}
                  value={faq.question}
                  className="bg-zinc-900 px-6"
                >
                  <AccordionTrigger className="text-white hover:text-white">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeUp>

      </Container>
    </section>
  );
}