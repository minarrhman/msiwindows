import Doors from "@/components/sections/products/Doors";
import Windows from "@/components/sections/products/Windows";
import Commercial from "@/components/sections/products/Commercial";
import ProductsHero from "../../components/sections/products/ProductsHero";


export const metadata = {
  title: "Windows & Doors Products Sydney",
  description:
    "Explore our range of aluminium windows, bi-fold doors, stacker doors, sliding doors and commercial shopfront systems in Sydney.",
};



export default function ProductPage(){
  return(
    <>
    <ProductsHero />
    <Doors />
    <Windows />
    <Commercial />
 
    </>
  )
}