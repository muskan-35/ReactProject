import { Course } from "../Data/Course"
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeSharpIcon from '@mui/icons-material/CurrencyRupeeSharp';

function Courses(){
    return(
        <>
            <section className="max-w-7xl m-auto px-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 my-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">Find Your Course</h2>
                        <p className="text-slate-400 mt-2">Filter by Category or search for a specific Course</p>
                    </div>
                    <div className="relative w-full lg:w-115">
                        <SearchIcon className="absolute left-4 top-1/4 text-slate-400"/>
                        <input 
                        type="text"
                        placeholder="Search for a course"
                        className="w-full rounded-full border px-12 py-3 text-sm text-yellow-800 placeholder:text-slate-400"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                    {Course.map((cours) => (
                    <div
                        key={cours.id}
                        className="border border-slate-200 rounded-xl w-full hover:shadow-lg transition duration-400"
                    >
                        <img
                            src={cours.image}
                            alt={cours.title}
                            className="h-52 w-full object-cover rounded-t-xl"
                        />
                        <div className="ml-5 mb-5">
                            <h2 className="text-xl font-bold mt-3">
                                {cours.title}
                            </h2>
                            <p>{cours.summary}</p>

                            <div className="flex gap-3 mt-2">
                                <span>{cours.category}</span>
                                <span>{cours.level}</span>
                            </div>
                            <div className="flex gap-3 mt-2">
                                <span>{cours.duration}</span>
                                <span>{cours.lessons} lessons</span>
                            </div>
                            <div className="flex gap-1 mt-2">
                                <span>
                                    <StarIcon className="text-orange-500" text-sm/>
                                    {cours.rating}
                                </span>
                                <span>{cours.students} students</span>
                            </div>
                            <h3 className="mt-3 font-bold text-green-500 flex items-center">
                                <CurrencyRupeeSharpIcon />
                                {cours.price}
                            </h3>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Courses