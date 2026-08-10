import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";

export default function Navbar ()
{
    const { count, openCart } = useCart();
    const { openSearch } = useSearch();

    return (
        <nav id="nav-bar" className="px-4 sm:px-8 lg:px-20 py-5 mt-5">
            <ul className="flex justify-between items-center">
                <div>
                    <li>
                        <Link to="/">
                            <div className="flex justify-center items-center gap-2 sm:gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><g fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8Z"/></g></svg>
                                <p className="font-semibold text-xl sm:text-2xl lg:text-3xl hover:text-(--main-dark) transition duration-300 ease-in-out">Store Locate</p>
                            </div>
                        </Link>
                    </li>
                </div>
                <div className="hidden lg:block">
                    <li className="flex items-center">
                        <a href="#"><img src="log2.png" alt="logo" className="w-[240px] xl:w-[330px]" /></a>
                    </li>
                </div>
                <div className="flex items-center gap-2 sm:gap-5 lg:gap-8">
                    <li>
                        <button type="button" onClick={openSearch} aria-label="Open search">
                            <div className="rounded-[50%] hover:bg-(--opacity-color) p-2 sm:p-3 transition duration-300 ease-in-out cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 20 20"><path fill="#000000" d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
                            </div>
                        </button>
                    </li>
                    <li>
                        <Link to="/user">
                            <div className="rounded-[50%] hover:bg-(--opacity-color) p-2 sm:p-3 transition duration-300 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 448 512"><path fill="#000000" d="M304 128a80 80 0 1 0-160 0a80 80 0 1 0 160 0zm-208 0a128 128 0 1 1 256 0a128 128 0 1 1-256 0zM49.3 464h349.4c-8.9-63.3-63.3-112-129-112h-91.4c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <button type="button" onClick={openCart} aria-label="Open cart">
                            <div id="cart" className="flex rounded-[50%] hover:bg-(--opacity-color) p-2 sm:p-3 transition duration-300 ease-in-out cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="#000000" d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0V1Zm7.764 11h10.515l2.334-7H5.855l1.909 7ZM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0Z"/></svg>
                                {count > 0 && <span id="cart-span" className="text-white">{count}</span>}
                            </div>
                        </button>
                    </li>
                </div>
            </ul>
        </nav>
    );
}