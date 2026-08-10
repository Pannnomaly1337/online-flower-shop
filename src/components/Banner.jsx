export default function Banner()
{
    return (
        <div className="bg-white">
            <div className="bg-(--main-light) rounded-md m-6 sm:m-10 lg:m-20 flex justify-center items-center">
                <div id="banner-container">
                    <div className="flex flex-col px-6 sm:px-12 lg:px-30 py-10 lg:py-0">
                        <p className="text-(--main-dark) text-xl sm:text-2xl uppercase font-semibold tracking-[0.3rem]">Collection</p>
                        <p className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-2.5">Beautiful Flower Pot</p>
                        <p className="py-5 text-base sm:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum obcaecati sint pariatur, placeat blanditiis ullam!</p>
                        <a href="#" className="w-fit px-8 sm:px-10 py-3 sm:py-4 text-white text-lg sm:text-xl bg-(--main-dark) hover:bg-(--hover-color) transition duration-300 ease-in-out">Shop Now</a>
                    </div>
                    <div className="flex justify-center h-64 sm:h-80 lg:h-[400px] lg:ml-60 pb-8 md:pb-0">
                        <img src="shoes-bag.png" alt="shop banner" className="h-full object-contain object-center" />
                    </div>
                </div>
            </div>
        </div>
    );
}