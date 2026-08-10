import ProductCard from "./ProductCard";
import { recentProducts } from "../lib/products";

export default function Recent ()
{
    return (
        <div className="w-full bg-white px-6 sm:px-10 lg:px-20 pb-10">
            <p className="text-3xl sm:text-4xl font-bold pb-10">Recent Flowers</p>
            <div id="recent-product">
                {recentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}