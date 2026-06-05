import { useState } from "react";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "What courses do you offer?",
    answer:
        "We offer courses in Web Development, Data Science, UI/UX Design, Digital Marketing, and Software Testing."
  },
  {
    question: "How can I enroll in a batch?",
    answer:
      "To enroll, visit the Courses page, choose the program that matches your goals, and click the Apply or Enroll button. You can also contact us directly through the Contact page for guidance.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes, we provide resume reviews, mock interviews, interview preparation, and career guidance.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Yes, installment plans are available for most programs. Please reach out to our admissions team via the Contact page to review the payment plan options and schedule.",
  },
  {
    question: "Are the classes live or self-paced?",
    answer:
      "Our courses include live instructor-led sessions combined with self-paced assignments. This hybrid model helps you learn with personalized support while practicing on real-world projects.",
  },
  {
    question: "What if I miss a live class?",
    answer:
      "Recorded sessions are available, so you can learn at your convenience.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-lg font-bold uppercase tracking-widest text-blue-600 mb-3">
            FAQ
        </p>
        <h1 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h1>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          Find answers to the most common questions about our training programs, admissions, payments, and placement support.
        </p>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={item.question}
            className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 bg-white text-left"
            >
              <span className="text-lg font-semibold text-slate-900">{item.question}</span>
              <span className="text-slate-500 text-2xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`px-6 pb-6 overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 pt-0" : "max-h-0 pt-0"
              }`}
            >
              <p className="text-slate-600 leading-7">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-blue-600 text-white p-8 text-center shadow-lg">
        <h2 className="text-2xl font-semibold">Still have a question?</h2>
        <p className="mt-3 text-slate-100 max-w-xl mx-auto">
          If you need more details about our programs, payment options, or placement support, our team is ready to help.
        </p>
        <Link to="/contact" className="inline-flex mt-6 items-center justify-center rounded-full bg-white text-blue-600 px-6 py-3 font-semibold hover:bg-slate-100 transition duration-300">
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default Faq;
