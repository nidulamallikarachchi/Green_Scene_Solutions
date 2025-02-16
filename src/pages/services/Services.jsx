import { Link } from "react-router-dom";
import { services } from "../../utilities/ServicesData.jsx";

const Services = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 relative">
                Our Services
                <span className="block w-24 h-1 bg-green-500 mx-auto mt-2 rounded-full"></span>
            </h1>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <Link to={`/services/${service.id}`} key={service.id} className="group block h-full">
                        <div className="h-full rounded-2xl overflow-hidden shadow-lg bg-white transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl relative flex flex-col">
                            <div className="relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-56 object-cover"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition duration-300"></div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition duration-300">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 mt-2 flex-grow">{service.subDescription}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Services;
