import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";

import FeaturedProductItem from "@/components/shared/FeaturedProductItem";

import { PRODUCTS } from "@/data/products";

export default function Windows() {
  
  const windows = PRODUCTS.filter(
    (product) => product.category === "windows"
  );

  return (
    <>

      <section className=" py-24">
        <Container>
          <SectionHeading
            badge="Windows"
            title="Modern Window Systems"
            description="High-performance aluminium windows built for comfort, ventilation, and contemporary Sydney homes."
          />

          <div className="mt-16 space-y-32">
            {windows.map((product, index) => (
              <FeaturedProductItem
                key={product.name}
                title={product.name}
                description={product.description}
                image={product.image}
                reversed={index % 2 !== 0}
              />
            ))}
          </div>
        </Container>
      </section>
      </>
  )
}