function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          About Our Learning Platform
        </h1>
        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
          We help students learn modern web development skills through
          high-quality courses, practical projects, and career-focused learning.
        </p>
      </div>

      {/* About Content */}
      <div className="grid md:grid-cols-2 gap-10 mt-16 items-center">
        <img
          src="/logo/about.webp"
          alt="About"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Learn Skills That Matter
          </h2>

          <p className="text-slate-600 leading-7">
            Our platform provides beginner to advanced level courses in
            web development, React, JavaScript, and modern technologies.
            We focus on practical learning and real-world projects.
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        <div className="bg-blue-50 p-6 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-blue-600">5000+</h3>
          <p>Students</p>
        </div>

        <div className="bg-green-50 p-6 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-green-600">100+</h3>
          <p>Courses</p>
        </div>

        <div className="bg-yellow-50 p-6 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-yellow-600">50+</h3>
          <p>Instructors</p>
        </div>

        <div className="bg-purple-50 p-6 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-purple-600">95%</h3>
          <p>Success Rate</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl hover:shadow-lg">
            <h3 className="font-bold text-xl mb-3">
              Expert Mentors
            </h3>
            <p className="text-slate-600">
              Learn from experienced industry professionals.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg">
            <h3 className="font-bold text-xl mb-3">
              Practical Projects
            </h3>
            <p className="text-slate-600">
              Build real-world projects and strengthen your portfolio.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg">
            <h3 className="font-bold text-xl mb-3">
              Career Support
            </h3>
            <p className="text-slate-600">
              Get guidance for interviews and job opportunities.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;