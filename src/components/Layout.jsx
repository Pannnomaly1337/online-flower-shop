import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CartDrawer from "./CartDrawer";
import SearchOverlay from "./SearchOverlay";

export default function Layout ()
{
    return (
        <div>
            <header id="site-header" className="flex flex-col">
                <Navbar />
            </header>

            <CartDrawer />
            <SearchOverlay />

            <div>
                <Outlet />
            </div>
        </div>
    );
}