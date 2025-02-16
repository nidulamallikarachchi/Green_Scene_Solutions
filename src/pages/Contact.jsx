import { useRef } from "react";
import emailjs from "emailjs-com";
import OurClients from "../components/HomePage/OurClients.jsx";

const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_9b3zian",
            "template_3t1ds4s",
            formRef.current,
            "0uz5uGCMuuNZ7OhVs"
        ).then(
            (result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            },
            (error) => {
                console.log(error.text);
                alert("Something went wrong. Please try again later.");
            }
        );
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center">
            {/* Contact Section */}
            <div className="w-full max-w-4xl mt-12 mb-12 bg-white shadow-xl rounded-3xl p-8 relative">
                {/* Header */}
                <h1 className="text-4xl font-extrabold text-center text-gray-800">
                    Contact Us
                </h1>
                <p className="mt-4 text-lg text-gray-600 text-center">
                    We’d love to hear from you! Reach out via phone, email, or by filling out the form below.
                </p>

                {/* Contact Info */}
                <div className="mt-6 text-center space-y-3">
                    <p className="text-lg text-gray-700 flex justify-center items-center gap-2">
                        <strong>Phone:</strong>
                        <a href="tel:045455034" className="text-blue-600 hover:text-blue-700 transition">
                            045 455 034
                        </a>
                    </p>
                    <p className="text-lg text-gray-700 flex justify-center items-center gap-2">
                        <strong>Email:</strong>
                        <a href="mailto:service.greenscene@outlook.com" className="text-blue-600 hover:text-blue-700 transition">
                            service.greenscene@outlook.com
                        </a>
                    </p>
                </div>

                {/* Form Section */}
                <form ref={formRef} onSubmit={sendEmail} className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full p-4 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full p-4 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="w-full p-4 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                        rows="5"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition shadow-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            <OurClients />
        </div>
    );
};

export default Contact;
