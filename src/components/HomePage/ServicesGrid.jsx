import { Link } from "react-router-dom";
import { services } from "../../utilities/ServicesData.jsx";

const ServicesGrid = () => {
    return (
        <section className="w-full bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 relative">
                    Our Services
                    <span className="block w-24 h-1 bg-green-500 mx-auto mt-2 rounded-full"></span>
                </h1>

                {/* Services Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <Link
                            to={`/services/${service.id}`}
                            key={service.id}
                            className="group block text-center"
                        >
                            <div
                                className="bg-white p-4 sm:p-5 rounded-xl shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg border border-transparent group-hover:border-green-500">
                                {/* Icon */}
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-3 group-hover:opacity-80 transition-all duration-300"
                                />
                                {/* Title */}
                                <h2 className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-green-600 transition duration-300">
                                    {service.title}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
