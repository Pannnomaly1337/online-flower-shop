import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
    const { items, isOpen, closeCart, increment, decrement, removeItem, total, count } = useCart();

    return (
        <>
            {/* backdrop */}
            <div
                onClick={closeCart}
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            />

            {/* sliding panel */}
            <aside
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                    <p className="text-2xl font-bold">Your Cart ({count})</p>
                    <button onClick={closeCart} className="cursor-pointer text-3xl leading-none hover:text-(--main-dark)" aria-label="Close cart">&times;</button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-4">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col justify-center items-center text-center text-(--fade-color)">
                            <p className="text-xl font-semibold">Your cart is empty</p>
                            <p className="mt-2">Add some flowers to get started.</p>
                        </div>
                    ) : (
                        <ul className="flex flex-col gap-4">
                            {items.map((item) => (
                                <li key={item.id} className="flex gap-4 items-start border-b border-gray-100 pb-4">
                                    <div className="w-20 h-20 shrink-0 bg-(--product-bg-color) rounded-md p-2">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-(--main-dark) font-semibold">{item.price}$</p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <button onClick={() => decrement(item.id)} className="cursor-pointer w-7 h-7 rounded-full bg-(--main-light) hover:bg-(--main-color) font-bold flex justify-center items-center">&minus;</button>
                                            <span className="min-w-6 text-center">{item.qty}</span>
                                            <button onClick={() => increment(item.id)} className="cursor-pointer w-7 h-7 rounded-full bg-(--main-light) hover:bg-(--main-color) font-bold flex justify-center items-center">+</button>
                                        </div>
                                    </div>
                                    <button onClick={() => removeItem(item.id)} className="cursor-pointer text-(--fade-color) hover:text-(--main-dark)" aria-label="Remove item">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5Zm-1 2v14h12V6H6Zm3 3h2v8H9V9Zm4 0h2v8h-2V9Z"/></svg>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {items.length > 0 && (
                    <div className="px-6 py-5 border-t border-gray-200">
                        <div className="flex justify-between text-xl font-bold mb-4">
                            <span>Total</span>
                            <span className="text-(--main-dark)">{total}$</span>
                        </div>
                        <Link to="/cart" onClick={closeCart} className="block text-center py-3 mb-2 border border-(--main-dark) text-(--main-dark) rounded-md hover:bg-(--main-light) transition duration-300">View Cart</Link>
                        <button className="w-full py-3 bg-(--main-dark) text-white rounded-md hover:bg-(--hover-color) transition duration-300 cursor-pointer">Checkout</button>
                    </div>
                )}
            </aside>
        </>
    );
}