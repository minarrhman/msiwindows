import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";

import FeaturedProductItem from "@/components/shared/FeaturedProductItem";

import { PRODUCTS } from "@/data/products";

export default function Commercial() {

    const commercial = PRODUCTS.filter(
        (product) => product.category === "commercial"
    );

    return (
        <>
            <section className="py-24">
                <Container>
                    <SectionHeading
                        badge="Commercial"
                        title="Shopfront & Commercial Solutions"
                        description="Professional aluminium systems for Sydney retail, hospitality, office, and commercial developments."
                    />

                    <div className="mt-16 space-y-32">
                        {commercial.map((product, index) => (
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