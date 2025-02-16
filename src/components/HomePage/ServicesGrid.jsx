import { Link } from "react-router-dom";
import { services } from "../../utilities/ServicesData.jsx";

const ServicesGrid = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 relative">
                Our Services
                <span className="block w-24 h-1 bg-green-500 mx-auto mt-2 rounded-full"></span>
            </h1>

            {/* Services Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 ">
                {services.map((service) => (
                    <Link
                        to={`/services/${service.id}`}
                        key={service.id}
                        className="group block text-center"
                    >
                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-3xl hover:border-green-500 border-2 border-transparent group-hover:border-green-500">
                            {/* Icon */}
                            <img
                                src={service.icon}
                                alt={service.title}
                                className="w-16 h-16 object-contain mb-4 group-hover:opacity-80 transition-all duration-300"
                            />
                            {/* Title */}
                            <h2 className="text-sm font-semibold text-gray-800 group-hover:text-green-600 transition duration-300">
                                {service.title}
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;
