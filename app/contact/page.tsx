import ContactHero from "@/components/sections/contact/ContactHero";
import ContactMethods from "@/components/sections/contact/ContactMethods";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactLocation from "@/components/sections/contact/ContactLocation";
import ContactFAQ from "@/components/sections/contact/ContactFAQ";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMethods />
      <div id="enquiry-form">
        <ContactForm />
      </div>
      <ContactLocation />
      <ContactFAQ />
    </>
  );
}