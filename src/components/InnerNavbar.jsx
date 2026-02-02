export default function InnerNavbar ()
{
    return (
        <nav>
            <ul className="flex justify-center items-center my-10 pt-1.5 gap-10 tracking-wider text-2xl font-semibold">
                <li><a href="#" className="hover:text-(--main-dark) transition duration-300 ease-in-out">Home</a></li>
                <li><a href="#" className="hover:text-(--main-dark) transition duration-300 ease-in-out">Category</a></li>
                <li><a href="#" className="hover:text-(--main-dark) transition duration-300 ease-in-out">Shop</a></li>
                <li id="innerNav">
                    <a href="#" className="hover:text-(--main-dark) transition duration-300 ease-in-out">Popular</a>
                    <span id="innerLabel" className="text-white text-lg font-semibold">Hot Offer</span>
                </li>
                <li><a href="#" className="hover:text-(--main-dark) transition duration-300 ease-in-out">Recent</a></li>
            </ul>
        </nav>
    );
}