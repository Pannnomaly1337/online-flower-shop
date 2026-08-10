import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart ()
{
    const { items, increment, decrement, removeItem, clearCart, total, count } = useCart();

    return (
        <div className="w-full bg-white min-h-screen px-6 sm:px-10 lg:px-20 py-10">
            <p className="text-3xl sm:text-4xl font-bold mb-8">Your Cart</p>

            {items.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-xl font-semibold text-(--fade-color)">Your cart is empty</p>
                    <Link to="/" className="inline-block mt-5 px-8 py-3 bg-(--main-dark) text-white rounded-md hover:bg-(--hover-color) transition duration-300">Continue Shopping</Link>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-10">
                    <ul className="flex-1 flex flex-col gap-4">
                        {items.map((item) => (
                            <li key={item.id} className="flex gap-4 sm:gap-6 items-center border border-gray-200 rounded-md p-4">
                                <div className="w-24 h-24 shrink-0 bg-(--product-bg-color) rounded-md p-2">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-lg font-semibold">{item.name}</p>
                                    <p className="text-(--main-dark) font-semibold">{item.price}$</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => decrement(item.id)} className="cursor-pointer w-8 h-8 rounded-full bg-(--main-light) hover:bg-(--main-color) font-bold flex justify-center items-center">&minus;</button>
                                    <span className="min-w-6 text-center">{item.qty}</span>
                                    <button onClick={() => increment(item.id)} className="cursor-pointer w-8 h-8 rounded-full bg-(--main-light) hover:bg-(--main-color) font-bold flex justify-center items-center">+</button>
                                </div>
                                <button onClick={() => removeItem(item.id)} className="cursor-pointer text-(--fade-color) hover:text-(--main-dark)" aria-label="Remove item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5Zm-1 2v14h12V6H6Zm3 3h2v8H9V9Zm4 0h2v8h-2V9Z"/></svg>
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="w-full lg:w-80 h-fit bg-(--main-light) rounded-md p-6">
                        <p className="text-2xl font-bold mb-4">Summary</p>
                        <div className="flex justify-between mb-2"><span>Items</span><span>{count}</span></div>
                        <div className="flex justify-between text-xl font-bold mb-5"><span>Total</span><span className="text-(--main-dark)">{total}$</span></div>
                        <button className="w-full py-3 bg-(--main-dark) text-white rounded-md hover:bg-(--hover-color) transition duration-300 cursor-pointer">Checkout</button>
                        <button onClick={clearCart} className="w-full py-2 mt-2 text-(--fade-color) hover:text-(--main-dark) transition duration-300 cursor-pointer">Clear cart</button>
                    </div>
                </div>
            )}
        </div>
    );
}