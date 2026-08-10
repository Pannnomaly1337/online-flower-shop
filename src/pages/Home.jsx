import Category from "../components/Category";
import Hero from "../components/Hero";
import InnerNavbar from "../components/InnerNavbar";
import Partner from "../components/Partner";
import Popular from "../components/Popular";
import Recent from "../components/Recent";
import Banner from "../components/Banner";
import Plants from "../components/Plants";

export default function Home ()
{
    return (
        <div id="home" className="font-poppins">

            <InnerNavbar />

            <Hero />

            <Category />

            <Popular />

            <Banner />

            <Recent />

            <Partner />

            <Plants />
        </div>
    );
}