// src/pages/ServiceDetails.jsx

import { useParams } from "react-router-dom";
import { services } from "../../utilities/ServicesData.jsx";

const ServiceDetails = () => {
    const { id } = useParams();
    const service = services.find((s) => s.id === id);

    if (!service) {
        return <h2 className="text-center text-xl font-bold mt-10">Service Not Found</h2>;
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-lg shadow-md" />
            <h1 className="text-3xl font-bold mt-4">{service.title}</h1>
            <h2 className="text-lg text-gray-700 mt-2">{service.subtitle}</h2>
            <ul className="mt-4 list-disc list-inside">
                {service.services.map((item, index) => (
                    <li key={index} className="text-gray-600">{item}</li>
                ))}
            </ul>
            <p className="mt-4 text-gray-800">{service.description}</p>
        </div>
    );
};

export default ServiceDetails;
