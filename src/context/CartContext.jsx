import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "flower-shop-cart";

export function CartProvider({ children }) {
    const [items, setItems] = useState(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch {
            // ignore write errors (e.g. private mode)
        }
    }, [items]);

    const addItem = (product) => {
        setItems((prev) => {
            const found = prev.find((i) => i.id === product.id);
            if (found) {
                return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
            }
            return [...prev, { ...product, qty: 1 }];
        });
        setIsOpen(true);
    };

    const increment = (id) =>
        setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));

    const decrement = (id) =>
        setItems((prev) =>
            prev.flatMap((i) => {
                if (i.id !== id) return [i];
                if (i.qty <= 1) return [];
                return [{ ...i, qty: i.qty - 1 }];
            })
        );

    const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
    const clearCart = () => setItems([]);
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    const count = items.reduce((sum, i) => sum + i.qty, 0);
    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

    return (
        <CartContext.Provider
            value={{ items, addItem, increment, decrement, removeItem, clearCart, count, total, isOpen, openCart, closeCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within a CartProvider");
    return ctx;
}