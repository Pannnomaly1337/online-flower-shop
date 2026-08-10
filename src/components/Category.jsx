const categories = [
    { img: "c1.png", label: "Annual Flower" },
    { img: "c2.png", label: "Perennial Flower" },
    { img: "c3.png", label: "Biennial Flower" },
    { img: "c4.png", label: "Rose" },
    { img: "c5.png", label: "Sunflower" },
    { img: "c6.png", label: "Hydrangea" },
];

export default function Category ()
{
    return (
        <div id="category" className="scroll-mt-8 bg-white px-6 sm:px-10 py-12 lg:py-20">
            {categories.map((category) => (
                <a key={category.label} href="#" className="flex flex-col justify-center items-center pb-5 hover:text-(--main-dark) transition duration-300 ease-in-out">
                    <div className="bg-(--main-light) rounded-full w-28 h-28 sm:w-40 sm:h-40 lg:w-[200px] lg:h-[200px] p-4 sm:p-5 hover:opacity-[0.8] transition duration-300 ease-in-out">
                        <img src={category.img} alt={category.label} className="w-full h-full object-contain object-center" />
                    </div>
                    <div>
                        <p className="text-base sm:text-xl lg:text-2xl font-semibold mt-3 text-center">{category.label}</p>
                    </div>
                </a>
            ))}
        </div>
    );
}