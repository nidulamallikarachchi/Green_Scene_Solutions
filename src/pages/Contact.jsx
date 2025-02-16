import {useRef} from "react";
import emailjs from "emailjs-com";
import OurClients from "../components/HomePage/OurClients.jsx";

const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_9b3zian',    // Replace with your service ID
            'template_3t1ds4s',   // Replace with your template ID
            formRef.current,
            '0uz5uGCMuuNZ7OhVs'     // Replace with your public key
        ).then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Something went wrong. Please try again later.');
        });
    };

    return (
        <div className={"bg-gray-100 "}>
            <div className="bg-gray-100 py-6 px-4">
                <div className="container mx-auto max-w-3xl bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-4xl font-bold  text-center">Contact Us</h1>
                    <p className="mt-4 text-lg text-gray-700 text-center">
                        We’d love to hear from you! Reach out to us via phone, email, or by filling out the form below.
                    </p>
                    <div className="mt-6 text-center">
                        <p className="text-lg text-gray-700">
                            <strong>Phone:</strong>{" "}
                            <a href="tel:045455034" className=" hover:underline">
                                045 455 034
                            </a>
                        </p>
                        <p className="text-lg text-gray-700 mt-2">
                            <strong>Email:</strong>{" "}
                            <a href="mailto:service.greenscene@outlook.com" className=" hover:underline">
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
                                placeholder="Name"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="5"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <OurClients/>

        </div>
    );
};

export default Contact;
