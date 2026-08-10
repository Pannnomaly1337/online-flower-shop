import { useLocation, useNavigate } from "react-router-dom";

const links = [
    { id: "home", label: "Home" },
    { id: "category", label: "Category" },
    { id: "plants", label: "Shop" },
    { id: "popular", label: "Popular", badge: "Hot Offer" },
    { id: "recent", label: "Recent" },
];

export default function InnerNavbar ()
{
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (id) => (event) => {
        event.preventDefault();

        const scrollToSection = () => {
            const el = document.getElementById(id);
            if (!el) return;
            // offset by the sticky header's real height so the section isn't hidden behind it
            const header = document.getElementById("site-header");
            const offset = header ? header.offsetHeight : 0;
            const y = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        };

        // if we're on another route (e.g. /cart), go home first, then scroll
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(scrollToSection, 60);
        } else {
            scrollToSection();
        }
    };

    return (
        <nav>
            <ul className="flex flex-wrap justify-center items-center my-6 lg:my-10 pt-1.5 gap-x-6 gap-y-4 sm:gap-8 lg:gap-10 tracking-wider text-base sm:text-xl lg:text-2xl font-semibold px-4">
                {links.map((link) => (
                    <li key={link.id} id={link.badge ? "innerNav" : undefined}>
                        <a href={`#${link.id}`} onClick={handleClick(link.id)} className="hover:text-(--main-dark) transition duration-300 ease-in-out">{link.label}</a>
                        {link.badge && <span id="innerLabel" className="text-white text-lg font-semibold">{link.badge}</span>}
                    </li>
                ))}
            </ul>
        </nav>
    );
}