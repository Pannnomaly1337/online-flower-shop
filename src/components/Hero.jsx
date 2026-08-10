export default function Hero ()
{
    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0 px-6 sm:px-10 lg:px-20 py-10 lg:py-0">
            <div className="w-full lg:w-[40%] flex flex-col gap-y-6 lg:gap-y-10">
                <div><p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.4rem] lg:tracking-[0.75rem] text-(--main-dark)">COLLECTION</p></div>
                <div><p className="text-5xl sm:text-6xl lg:text-8xl font-bold">Rich Collection Of Flowers</p></div>
                <div><p className="text-base sm:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deleniti illo vero ducimus quis et temporibus ipsa itaque repudiandae error.</p></div>
                <div><a href="#" className="inline-block w-fit px-8 sm:px-10 py-3 sm:py-4 text-white text-lg sm:text-xl bg-(--main-dark) hover:bg-(--hover-color) transition duration-300 ease-in-out">Shop Now</a></div>
            </div>
            <div className="w-full lg:w-[60%] lg:pl-15 flex justify-center">
                <img src="model.png" alt="flower main" className="w-full max-w-[900px] h-auto" />
            </div>
        </div>
    );
}