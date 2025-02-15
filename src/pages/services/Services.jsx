import { Link } from "react-router-dom";
import {services} from "../../utilities/ServicesData.jsx";

const Services = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {services.map((service) => (
                <Link to={`/services/${service.id}`} key={service.id} className="block">
                    <div className="rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105">
                        <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                        <div className="p-4 bg-white">
                            <h2 className="text-xl font-semibold">{service.title}</h2>
                            <p className="text-gray-600">{service.subDescription}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Services;