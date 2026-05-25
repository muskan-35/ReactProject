function Hero(){
    return(
        <>
        <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 mx-auto max-w-7xl px-5 items-center">
            {/* Text Left */}
            <div className="mt-10">
                <h1 className="text-blue-800 text-4xl font-bold mb-2">Learn Skills That</h1>
                <h1 className="text-4xl font-bold mb-2">Actually Get You <span className="text-orange-500 underline">Hired!</span></h1>
                <p className="text-xl text-gray-400">Practical IT courses, expert mentors, live projects, and placement-focused guidance for learners who want a real career path.</p>
                <div className="mt-8 grid gap-5 sm:grid-cols-1 md:grid-cols-2 font-medium">
                    <button className="text-1xl px-6 py-2 bg-violet-500 hover:bg-violet-600 rounded text-white"><span>Book Free Demo Class</span><i class="fa-solid fa-arrow-right pl-2 text-sm"></i></button>
                    <button className="border text-1xl px-6 py-2 rounded hover:bg-gray-300"><i class="fa-solid fa-book-open pr-6"></i><span>Explore Courses</span></button>
                </div>
                <div className="mt-8 font-medium grid gap-2 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    <button className="border px-2 py-2 rounded"><i class="fa-regular fa-circle-check text-blue-800 pr-5"></i><span>Live mentor-led classes</span></button>
                    <button className="border px-2 py-2 rounded"><i class="fa-regular fa-circle-check text-blue-800 pr-5"></i><span>Project portfolio</span></button>
                    <button className="border px-2 py-2 rounded"><i class="fa-regular fa-circle-check text-blue-800 pr-5"></i><span>Interview practice</span></button>
                    <button className="border px-2 py-2 rounded"><i class="fa-regular fa-circle-check text-blue-800 pr-5"></i><span>Placement support</span></button>
                </div>
            </div>

            {/* Image Right */}
            <div>
                <img src="/logo/image.webp" className="h-150"/>
            </div>
        </section>
        </>
    )
}
export default Hero