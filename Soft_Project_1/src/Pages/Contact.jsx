import { useState } from "react"
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

function Contact(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Contact form submitted:", formData)
        alert("Form submitted!")
        setFormData({ name: "", email: "", subject: "", message: "" })
    }

    return(
        <section className="max-w-7xl mx-auto px-6 py-16">

            {/* Page Heading */}
            <div className="text-center">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-gray-500 mt-3">
                We'd love to hear from you. Send us a message.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mt-12">

                {/* Contact Form */}
                <div className="bg-white shadow-lg rounded-xl p-6">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full border rounded-lg p-3 mb-4"
                        />

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full border rounded-lg p-3 mb-4"
                        />

                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="w-full border rounded-lg p-3 mb-4"
                        />

                        <textarea
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full border rounded-lg p-3 mb-4"
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Details */}
                <div className="space-y-5">
                    <div className="border rounded-xl p-5 flex items-start gap-4">
                        <LocationOnIcon className="text-blue-600 mt-1" />
                        <div>
                            <h3 className="font-bold">Address</h3>
                            <p className="text-gray-600">Gurugram, Haryana, India</p>
                        </div>
                    </div>

                    <div className="border rounded-xl p-5 flex items-start gap-4">
                        <EmailIcon className="text-blue-600 mt-1" />
                        <div>
                            <h3 className="font-bold">Email</h3>
                            <p className="text-gray-600">info@devtech.com</p>
                        </div>
                    </div>

                    <div className="border rounded-xl p-5 flex items-start gap-4">
                        <PhoneIcon className="text-blue-600 mt-1" />
                        <div>
                            <h3 className="font-bold">Phone</h3>
                            <p className="text-gray-600">+91 9876543210</p>
                        </div>
                    </div>

                    <div className="border rounded-xl p-5 flex items-start gap-4">
                        <AccessTimeIcon className="text-blue-600 mt-1" />
                        <div>
                            <h3 className="font-bold">Working Hours</h3>
                            <p className="text-gray-600">Mon - Sat : 9 AM - 6 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact