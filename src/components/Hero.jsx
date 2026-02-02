export default function Hero ()
{
    return (
        <div className="min-h-screen w-full flex justify-center items-center px-20">
            <div className="w-[40%] flex flex-col gap-y-10">
                <div><p className="text-4xl font-bold tracking-[0.75rem] text-(--main-dark)">COLLECTION</p></div>
                <div><p className="text-8xl font-bold">Rich Collection Of Flowers</p></div>
                <div><p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deleniti illo vero ducimus quis et temporibus ipsa itaque repudiandae error.</p></div>
                <div><a href="#" className="px-10 py-4 text-white text-xl bg-(--main-dark) hover:bg-(--hover-color) transition duration-300 ease-in-out">Shop Now</a></div>
            </div>
            <div className="w-[60%] pl-15">
                <img src="model.png" alt="flower main" width="900px" />
            </div>
        </div>
    );
}