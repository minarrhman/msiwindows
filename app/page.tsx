import Hero from "@/components/sections/home/Hero";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Services from "@/components/sections/home/Services";
import FeaturedProducts from "@/components/sections/home/FeaturedProducts";
import ProcessSection from "@/components/sections/home/ProcessSection";
import Testimonials from "@/components/sections/home/Testimonials";
import ContactInfo from "@/components/sections/home/ContactInfo";

export default function HomePage() {
  return (
    <>
    
      <Hero />
      <WhyChooseUs /> 
      <Services />
      <FeaturedProducts />
      <ProcessSection />
      <Testimonials />
      <ContactInfo />
    </>
  );
}