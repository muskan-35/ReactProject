import { Course } from "../Data/Course"
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeSharpIcon from '@mui/icons-material/CurrencyRupeeSharp';

function Courses(){
    return(
        <>
            <section>
                <div>
                    <div>
                        <h2>Find Your Course</h2>
                        <p>Filter by Category or search for a specific Course</p>
                    </div>
                    <div>
                        <SearchIcon />
                        <input type="text" placeholder="enter notes"/>
                    </div>
                </div>
                <div>
                    {Course.map((cours) => (
                    <div
                        key={cours.id}
                        className="border rounded-xl w-80"
                    >
                        <img
                            src={cours.image}
                            alt={cours.title}
                            className="h-52 w-full object-cover rounded-lg"
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
                            <div className="flex gap-3 mt-2">
                                <span><StarIcon className="text-orange-500"/>{cours.rating}</span>
                                <span>{cours.students} students</span>
                            </div>
                            <h3 className="mt-3 font-bold text-green-500">
                                <CurrencyRupeeSharpIcon />{cours.price}
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