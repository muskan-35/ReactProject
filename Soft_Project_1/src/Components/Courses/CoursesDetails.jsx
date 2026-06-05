import { useParams, useNavigate } from "react-router-dom";
import { Course } from "../../Data/Course";
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupIcon from '@mui/icons-material/Group';
import CurrencyRupeeSharpIcon from '@mui/icons-material/CurrencyRupeeSharp';

function CoursesDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const course = Course.find((item) => item.id === id);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center p-8 bg-white rounded-3xl shadow-lg">
                    <h1 className="text-2xl font-bold mb-4">Course not found</h1>
                    <p className="text-slate-600 mb-6">Please go back and choose a valid course.</p>
                    <button
                        onClick={() => navigate("/courses")}
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                        Back to Courses
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-10 shadow-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <button
                        onClick={() => navigate("/courses")}
                        className="mb-6 inline-flex items-center gap-2 text-sm text-blue-100 hover:text-white"
                    >
                        ← Back to Courses
                    </button>
                    <h1 className="text-4xl font-bold">{course.title}</h1>
                    <p className="mt-3 text-slate-200 max-w-2xl">{course.summary}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-8">
                        <section className="bg-white rounded-3xl p-8 shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                            <p className="text-slate-600 leading-7">
                                {course.summary} This course is designed to take you from the fundamentals to advanced techniques, building strong practical skills with real-world projects and expert guidance.
                            </p>
                        </section>

                        <section className="bg-white rounded-3xl p-8 shadow-md">
                            <h2 className="text-2xl font-bold mb-4">What You Will Learn</h2>
                            <ul className="space-y-3 text-slate-600 leading-7 list-disc list-inside">
                                <li>Core programming concepts, syntax, and best practices in Python.</li>
                                <li>How to build practical applications and automation scripts.</li>
                                <li>Data handling, file I/O, and working with APIs.</li>
                                <li>Testing, debugging, and performance optimization.</li>
                                <li>Preparation for real-world development and certification-ready projects.</li>
                            </ul>
                        </section>

                        <section className="bg-white rounded-3xl p-8 shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                            <ul className="space-y-3 text-slate-600 leading-7 list-disc list-inside">
                                <li>Basic computer skills and familiarity with the internet.</li>
                                <li>Willingness to learn programming concepts and problem-solving techniques.</li>
                                <li>Access to a laptop or desktop with internet connectivity.</li>
                                <li>No prior Python experience is required for beginner courses; intermediate and advanced learners should have basic programming knowledge.</li>
                            </ul>
                        </section>

                        <section className="bg-white rounded-3xl p-8 shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
                            <ul className="space-y-3 text-slate-600 leading-7 list-disc list-inside">
                                <li>Python Developer</li>
                                <li>Data Analyst</li>
                                <li>Automation Engineer</li>
                                <li>Web Developer</li>
                                <li>Machine Learning Engineer</li>
                            </ul>
                        </section>

                        <section className="bg-white rounded-3xl p-8 shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Certificate</h2>
                            <p className="text-slate-600 leading-7">
                                After you complete the course, you will receive a certificate of completion that demonstrates your achievement and can be used to enhance your resume and professional profile.
                            </p>
                        </section>
                    </div>

                    <aside className="space-y-6">
                        <div className="bg-white rounded-3xl p-8 shadow-md">
                            <h3 className="text-xl font-bold mb-4">Course Details</h3>
                            <div className="space-y-3 text-slate-600">
                                <p><strong>Category:</strong> {course.category}</p>
                                <p><strong>Level:</strong> {course.level}</p>
                                <p><strong>Duration:</strong> {course.duration}</p>
                                <p><strong>Lessons:</strong> {course.lessons}</p>
                                <p className="flex items-center gap-2"><StarIcon fontSize="small" className="text-yellow-500" />{course.rating}</p>
                                <p className="flex items-center gap-2"><GroupIcon fontSize="small" className="text-purple-500" />{course.students} students</p>
                                <p className="flex items-center gap-2"><CurrencyRupeeSharpIcon fontSize="small" className="text-green-600" />{course.price}</p>
                            </div>
                        </div>

                        
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default CoursesDetails;
