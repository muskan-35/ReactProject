import { Link } from "react-router-dom";

function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* 1. Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900">About Us</h1>
         <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
    Empowering students with practical skills, expert mentorship,
    and career-focused learning.
  </p>
      </div>

      {/* 2. Image + Short Description (image left, text right) */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img
            src="/logo/about.webp"
            alt="Institute"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-3">We build career-ready talent</h2>
          <p className="text-slate-600 leading-7">
            Our institute focuses on hands-on training, real projects and personalised mentorship so students can confidently start their tech careers.
          </p>
        </div>
      </div>

      {/* 3. Statistics (4 cards) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        <div className="bg-white border p-6 rounded-lg text-center shadow-sm hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600">1000+</h3>
          <p className="text-sm text-slate-600">Students</p>
        </div>
        <div className="bg-white border p-6 rounded-lg text-center shadow-sm hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-bold text-green-600">20+</h3>
          <p className="text-sm text-slate-600">Courses</p>
        </div>
        <div className="bg-white border p-6 rounded-lg text-center shadow-sm hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-bold text-yellow-600">10+</h3>
          <p className="text-sm text-slate-600">Trainers</p>
        </div>
        <div className="bg-white border p-6 rounded-lg text-center shadow-sm hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-bold text-purple-600">95%</h3>
          <p className="text-sm text-slate-600">Placement Rate</p>
        </div>
      </div>

      {/* 4. Why Choose Us (3 cards with icons) */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-lg transition duration-300">
            <div className="p-3 bg-blue-50 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">Industry Mentors</h3>
              <p className="text-sm text-slate-600">Mentors with real product experience.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-lg transition duration-300">
            <div className="p-3 bg-green-50 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20.5c4.142 0 7.5-3.358 7.5-7.5S16.142 5.5 12 5.5 4.5 8.858 4.5 13s3.358 7.5 7.5 7.5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">Hands-on Projects</h3>
              <p className="text-sm text-slate-600">Real assignments to build your portfolio.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-lg transition duration-300">
            <div className="p-3 bg-yellow-50 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a5 5 0 00-10 0v2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 9v10a2 2 0 002 2h6a2 2 0 002-2V9" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">Career Support</h3>
              <p className="text-sm text-slate-600">Resume help, mock interviews and placements.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. CTA */}
      <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold">Ready to start?</h3>
        <p className="text-sm mt-2">Apply now or contact us to learn about upcoming batches.</p>
        <div className="mt-4">
          <Link to="/contact">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-2 rounded-full font-semibold hover:bg-slate-100">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;