function Footer(){
    return(
        <div className="bg-black text-white mt-20">
            <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 py-20 px-5 max-w-7xl mx-auto">
                <div className="">
                    <img src="/logo/dev.png" className="w-50 transition duration-300 cursor-pointer hover:scale-110"/>
                    <p className="pt-4 text-sm text-gray-400 font-medium w-55">
                        Practical IT training, expert mentorship, and placement-focused guidance for ambitious learners.
                    </p>
                </div>
                <div className="">
                    <h2 className="font-bold">Company</h2>
                    <ul className="pt-4 text-base cursor-pointer">
                        <li className="py-2 hover:text-blue-500 transition duration-300">About Us</li>
                        <li className="py-2 hover:text-blue-500 transition duration-300">Faculties</li>
                        <li className="py-2 hover:text-blue-500 transition duration-300">Blog</li>
                        <li className="py-2 hover:text-blue-500 transition duration-300">Contact</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold">Courses</h2>
                    <ul className="pt-4 text-base cursor-pointer">
                        <li className="py-2 hover:text-blue-500 transition duration-300">Web Development</li>
                        <li className="py-2 hover:text-blue-500 transition duration-300">Machine Learning</li>
                        <li className="py-2 hover:text-blue-500 transition duration-300">DevOps</li>
                        <li className="py-2 hover:text-blue-500 transition duration-300">Mobile Development</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold">More</h2>
                    <ul className="pt-4 text-base cursor-pointer">
                        <li className="py-2 hover:text-blue-500 transition duration-300">Enterprise Hiring</li>
                        <li className="py-2 hover:text-blue-500 transition duration-300">Join as Instructor</li>
                        <li className="py-2 hover:text-blue-500 transition duration-300">Admission Query</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold pb-4">Follow Us</h2>
                    <div className="py-2 flex items-center gap-1 cursor-pointer">
                        <i className="fa-brands fa-linkedin text-2xl hover:text-blue-600"></i>
                        <span className="hover:text-blue-500 transition duration-300">Linkdin</span>
                    </div> 
                    <div className="py-2 flex items-center gap-1 cursor-pointer">
                        <i className="fa-brands fa-youtube text-2xl hover:text-red-600"></i>
                        <span className="hover:text-blue-500 transition duration-300">Youtube</span>
                    </div>
                    <div className="py-2 flex items-center gap-1 cursor-pointer">
                        <i className="fa-brands fa-telegram text-2xl hover:text-blue-500"></i>
                        <span className="hover:text-blue-500 transition duration-300">Telegram</span>
                    </div>
                </div>
            </footer>

            {/* Buttom border */}
            <div className="border-t border-gray-700 pt-6  pb-6 text-center text-gray-400 px-6">
                <p>© 2026 All Rights Reserved | Designed & Developed By DevTech</p>
            </div>
        </div>
    )
}
export default Footer