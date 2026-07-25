import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FeaturedProductItem from "@/components/shared/FeaturedProductItem";

import { FEATURED_PRODUCTS } from "@/data/featured-products";

export default function FeaturedProducts() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          badge="Featured Products"
          title="Premium Doors & Shopfront Solutions"
          description="Designed for performance, aesthetics, and long-term durability."
          center
        />

        <div className="mt-20 space-y-32">
          {FEATURED_PRODUCTS.map((product, index) => (
            <FeaturedProductItem
              key={product.title}
              {...product}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}