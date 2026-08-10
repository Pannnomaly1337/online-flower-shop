import { useEffect, useMemo, useState } from "react";
import { popularProducts, recentProducts, plantsProducts } from "../lib/products";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../context/CartContext";

const allProducts = [...popularProducts, ...recentProducts, ...plantsProducts];

// one product row, reused for both popular suggestions and search results
function ProductRow({ product, onAdd }) {
    return (
        <li className="flex items-center gap-4 px-5 py-3 hover:bg-(--main-light) transition duration-200">
            <div className="w-14 h-14 shrink-0 bg-(--product-bg-color) rounded-md p-1.5">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
            </div>
            <div className="flex-1">
                <p className="font-semibold">{product.name}</p>
                <p className="text-(--main-dark) font-semibold">{product.price}$</p>
            </div>
            <button
                onClick={() => onAdd(product)}
                className="px-4 py-2 bg-(--main-dark) text-white rounded-md hover:bg-(--hover-color) transition duration-300 cursor-pointer"
            >
                Add
            </button>
        </li>
    );
}

export default function SearchOverlay() {
    const { isOpen, closeSearch } = useSearch();
    const { addItem } = useCart();
    const [query, setQuery] = useState("");

    // close on Escape while open
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (event) => {
            if (event.key === "Escape") closeSearch();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, closeSearch]);

    // reset the query each time the overlay is closed
    useEffect(() => {
        if (!isOpen) setQuery("");
    }, [isOpen]);

    const q = query.trim().toLowerCase();

    // frontend-only: match by product name (case-insensitive substring)
    const results = useMemo(
        () => (q ? allProducts.filter((product) => product.name.toLowerCase().includes(q)) : []),
        [q]
    );

    // add to cart, then close the overlay
    const handleAdd = (product) => {
        addItem(product);
        closeSearch();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-start">
            {/* backdrop */}
            <div onClick={closeSearch} className="absolute inset-0 bg-black/40" />

            {/* panel */}
            <div className="relative mt-20 sm:mt-28 w-[92%] max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 20 20" className="shrink-0"><path fill="#909090" d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
                    <input
                        autoFocus
                        type="text"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Search flowers..."
                        className="flex-1 text-lg outline-none bg-transparent"
                    />
                    <button onClick={closeSearch} className="text-2xl leading-none cursor-pointer hover:text-(--main-dark)" aria-label="Close search">&times;</button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto">
                    {q === "" ? (
                        // empty state: guide the user with popular picks
                        <>
                            <p className="px-5 pt-4 pb-1 text-sm font-semibold uppercase tracking-wider text-(--fade-color)">Popular picks</p>
                            <ul>
                                {popularProducts.map((product) => (
                                    <ProductRow key={product.id} product={product} onAdd={handleAdd} />
                                ))}
                            </ul>
                        </>
                    ) : results.length === 0 ? (
                        <p className="px-5 py-10 text-center text-(--fade-color)">No results for &ldquo;{query}&rdquo;.</p>
                    ) : (
                        <ul>
                            {results.map((product) => (
                                <ProductRow key={product.id} product={product} onAdd={handleAdd} />
                            ))}
                        </ul>
                    )}
                </div>

                {q !== "" && results.length > 0 && (
                    <div className="px-5 py-3 border-t border-gray-200 text-sm text-(--fade-color)">
                        {results.length} result{results.length > 1 ? "s" : ""}
                    </div>
                )}
            </div>
        </div>
    );
}