import Category from "../components/Category";
import Hero from "../components/Hero";
import InnerNavbar from "../components/InnerNavbar";
import Popular from "../components/Popular";
import Recent from "../components/Recent";
import ShoppingBanner from "../components/ShoppingBanner";

export default function Home ()
{
    return (
        <div id="home" className="font-poppins">

            <InnerNavbar />

            <Hero />

            <Category />

            <Popular />

            <ShoppingBanner />

            <Recent />
        </div>
    );
}