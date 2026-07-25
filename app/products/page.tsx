import Doors from "@/components/sections/products/Doors";
import Windows from "@/components/sections/products/Windows";
import Commercial from "@/components/sections/products/Commercial";
import ProductsHero from "../../components/sections/products/ProductsHero";



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