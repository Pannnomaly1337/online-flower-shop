import ProductCard from "./ProductCard";
import { plantsProducts } from "../lib/products";

export default function Plants ()
{
    return (
        <div className="w-full bg-white px-6 sm:px-10 lg:px-20 pb-5">
            <p className="text-3xl sm:text-4xl font-bold pb-10">Plants Collection</p>
            <div id="recent-product">
                {plantsProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}