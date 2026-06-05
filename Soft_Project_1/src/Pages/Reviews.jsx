function Reviews() {
    const reviews = [
        {
            id: 1,
            student: "Priya Sharma",
            course: "Full-Stack Web Development",
            rating: 5,
            text: "The mentors were amazing and the real-world projects gave me the confidence to launch my career."
        },
        {
            id: 2,
            student: "Aman Patel",
            course: "Data Science with Python",
            rating: 5,
            text: "I learned practical data skills fast, and the course materials were easy to follow."
        },
        {
            id: 3,
            student: "Neha Singh",
            course: "UI/UX Design Masterclass",
            rating: 5,
            text: "The hands-on design tasks and mentor feedback were excellent. I feel ready to build professional portfolios."
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center mb-10">
                <p className="text-lg font-bold uppercase tracking-widest text-violet-600">
                    Student Reviews
                </p>

                <h1 className="text-3xl md:text-4xl font-bold mt-3">
                    What Our Students Say
                </h1>

                <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                    Real feedback from learners who completed our courses and are now moving ahead with confidence.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold">
                                {review.student.charAt(0)}
                            </div>

                            <div>
                                <h2 className="text-lg font-semibold">
                                    {review.student}
                                </h2>

                                <div className="flex items-center gap-1 text-yellow-500 my-1">
                                    {[...Array(review.rating)].map((_, index) => (
                                        <i
                                            key={index}
                                            className="fa-solid fa-star"
                                        ></i>
                                    ))}
                                </div>

                                <p className="text-sm text-slate-500">
                                    {review.course}
                                </p>
                            </div>
                        </div>

                        <p className="text-slate-600 leading-7">
                            {review.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews;