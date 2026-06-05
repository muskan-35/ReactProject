function Placements(){
    return(
        <>
            <div className="bg-white">
                {/* Placement Heading */}
                <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
                            Placement Success Stories
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Our students land dream jobs at top companies. Get guided by industry experts and secure your future with our proven placement program.
                        </p>
                    </div>
                </section>

                {/* Stats Cards */}
                <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <h2 className="text-5xl font-bold text-blue-600">500+</h2>
                            <p className="mt-3 text-slate-700 font-semibold">Students Placed</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <h2 className="text-5xl font-bold text-purple-600">85%</h2>
                            <p className="mt-3 text-slate-700 font-semibold">Placement Rate</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <h2 className="text-5xl font-bold text-green-600">6+ LPA</h2>
                            <p className="mt-3 text-slate-700 font-semibold">Avg Package</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <h2 className="text-5xl font-bold text-orange-600">50+</h2>
                            <p className="mt-3 text-slate-700 font-semibold">Company Partners</p>
                        </div>
                    </div>
                </section>

                {/* Placement Process */}
                <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Placement Process</h2>
                    <div className="grid gap-8 lg:grid-cols-4">
                        <div className="rounded-2xl border border-slate-300 bg-slate-50 p-8 text-center space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white font-bold text-xl">1</div>
                            <h3 className="text-xl font-bold text-slate-900">Resume Building</h3>
                            <p className="text-slate-600 text-sm">Craft a professional resume with expert guidance and industry standards.</p>
                        </div>
                        <div className="rounded-2xl border border-slate-300 bg-slate-50 p-8 text-center space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500 text-white font-bold text-xl">2</div>
                            <h3 className="text-xl font-bold text-slate-900">Technical Training</h3>
                            <p className="text-slate-600 text-sm">Master DSA, System Design, and real-world coding problems.</p>
                        </div>
                        <div className="rounded-2xl border border-slate-300 bg-slate-50 p-8 text-center space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white font-bold text-xl">3</div>
                            <h3 className="text-xl font-bold text-slate-900">Interview Prep</h3>
                            <p className="text-slate-600 text-sm">Practice mock interviews with experienced professionals.</p>
                        </div>
                        <div className="rounded-2xl border border-slate-300 bg-slate-50 p-8 text-center space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white font-bold text-xl">4</div>
                            <h3 className="text-xl font-bold text-slate-900">Job Placement</h3>
                            <p className="text-slate-600 text-sm">Get matched with top companies and land your dream job.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Placement Card */}
                <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
                    <div className="rounded-3xl border-2 border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 p-12 text-center space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                            Ready to Boost Your Career?
                        </h2>
                        <p className="text-lg text-slate-700 max-w-xl mx-auto">
                            Join our proven placement program and secure a position at a leading tech company within 6 months.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold transition duration-300">
                                Start Your Journey
                            </button>
                            <button className="rounded-full border-2 border-slate-400 hover:border-blue-600 hover:text-blue-600 text-slate-900 px-8 py-3 font-semibold transition duration-300">
                                Schedule a Demo
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Placements