import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";

import FeaturedProductItem from "@/components/shared/FeaturedProductItem";

import { PRODUCTS } from "@/data/products";

export default function Doors() {
    const doors = PRODUCTS.filter(
        (product) => product.category === "doors"
    );
    return (
        <>

            <section className="pb-24">
                <Container>
                    <SectionHeading
                        badge="Doors"
                        title="Aluminium Door Solutions"
                        description="Stylish and durable door systems designed to maximise natural light, ventilation, and access to outdoor living spaces."
                    />

                    <div className="mt-16 space-y-32">
                        {doors.map((product, index) => (
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