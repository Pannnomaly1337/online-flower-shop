import ProductCard from "./ProductCard";
import { popularProducts } from "../lib/products";

export default function Popular ()
{
    return (
        <div className="min-h-screen w-full bg-white px-6 sm:px-10 lg:px-20 py-10 lg:py-0">
            <p className="text-3xl sm:text-4xl font-bold">Popular Flowers</p>
            <div id="popular-dress" className="pt-5">
                <div id="popular-product">
                    {popularProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="h-full flex flex-col justify-between items-center text-center bg-(--main-light) px-10 py-12 rounded-md">
                    <div className="flex flex-col justify-center items-center mt-10">
                        <p className="text-3xl font-bold">Summer Flower Collection</p>
                        <a href="#" className="text-2xl font-semibold mt-5 text-(--main-dark) hover:text-(--hover-color) transition duration-300 ease-in-out">Shop Now</a>
                    </div>
                    <div className="w-full h-full flex">
                        <img src="banner.webp" alt="Shop Banner" width="100%" height="100%" className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
}