import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CartDrawer from "./CartDrawer";

export default function Layout ()
{
    return (
        <div>
            <Navbar />
            <CartDrawer />
            <div>
                <Outlet />
            </div>
        </div>
    );
}