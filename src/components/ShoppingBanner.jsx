export default function ShoppingBanner()
{
    return (
        <div className="bg-white">
            <div className="bg-(--main-light) rounded-md m-20 flex justify-center items-center">
                <div id="banner-container">
                    <div className="flex flex-col px-30">
                        <p className="text-(--main-dark) text-2xl uppercase font-semibold tracking-[0.3rem]">Collection</p>
                        <p className="font-bold text-5xl mt-2.5">Beautiful Flower Pot</p>
                        <p className="py-5 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum obcaecati sint pariatur, placeat blanditiis ullam!</p>
                        <a href="#" className="w-fit px-10 py-4 text-white text-xl bg-(--main-dark) hover:bg-(--hover-color) transition duration-300 ease-in-out">Shop Now</a>
                    </div>
                    <div className="flex justify-center h-[400px] ml-60">
                        <img src="shoes-bag.png" alt="shop banner" className="h-full object-contain object-center" />
                    </div>
                </div>
            </div>
        </div>
    );
}