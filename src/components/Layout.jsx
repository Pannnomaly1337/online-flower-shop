import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CartDrawer from "./CartDrawer";
import SearchOverlay from "./SearchOverlay";

export default function Layout ()
{
    return (
        <div>
            <Navbar />
            <CartDrawer />
            <SearchOverlay />
            <div>
                <Outlet />
            </div>
        </div>
    );
}