export default function InnerNavbar ()
{
    return (
        <nav>
            <ul className="flex flex-wrap justify-center items-center my-6 lg:my-10 pt-1.5 gap-x-6 gap-y-4 sm:gap-8 lg:gap-10 tracking-wider text-base sm:text-xl lg:text-2xl font-semibold px-4">
                <li><a href="#home" className="hover:text-(--main-dark) transition duration-300 ease-in-out">Home</a></li>
                <li><a href="#category" className="hover:text-(--main-dark) transition duration-300 ease-in-out">Category</a></li>
                <li><a href="#plants" className="hover:text-(--main-dark) transition duration-300 ease-in-out">Shop</a></li>
                <li id="innerNav">
                    <a href="#popular" className="hover:text-(--main-dark) transition duration-300 ease-in-out">Popular</a>
                    <span id="innerLabel" className="text-white text-lg font-semibold">Hot Offer</span>
                </li>
                <li><a href="#recent" className="hover:text-(--main-dark) transition duration-300 ease-in-out">Recent</a></li>
            </ul>
        </nav>
    );
}