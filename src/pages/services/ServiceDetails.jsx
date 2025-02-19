import { useParams } from "react-router-dom";
import { services } from "../../utilities/ServicesData.jsx";
import { HiCheckCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = services.find((s) => s.id === id);

    if (!service) {
        return <h2 className="text-center text-xl font-bold mt-10">Service Not Found</h2>;
    }

    return (
        <div>
            {/* Hero Section */}
            <div
                className="relative w-full h-96 md:h-[34rem] flex items-center justify-center text-white text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text px-4 py-2">
                    {service.title}
                </h1>
            </div>

            {/* Subtitle */}
            <h3 className="text-center text-lg md:text-3xl text-gray-800 font-semibold mt-8 px-6">
                {service.subtitle}
            </h3>

            {/* Services & Description Section */}
            <div className="mt-10 max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 pb-16">
                {/* Services List */}
                <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                        What We Offer
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.services.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-4 border rounded-lg shadow-sm bg-white hover:bg-gray-100 transition duration-300"
                            >
                                <HiCheckCircle className="text-green-600 text-2xl" />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        About This Service
                    </h2>
                    {service.description.split("\n").map((paragraph, index) => (
                        <p key={index} className="text-gray-700 text-lg leading-relaxed mb-4">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>

            {/* Contact Us Button */}
            <div className="text-center pb-12">
                <button
                    onClick={() => navigate("/contact")}
                    className="bg-green-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                >
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default ServiceDetails;
