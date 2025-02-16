import { useParams } from "react-router-dom";
import { services } from "../../utilities/ServicesData.jsx";
import { HiCheckCircle } from "react-icons/hi";

const ServiceDetails = () => {
    const { id } = useParams();
    const service = services.find((s) => s.id === id);

    if (!service) {
        return <h2 className="text-center text-xl font-bold mt-10">Service Not Found</h2>;
    }

    return (
        <div>
            {/* Background Image with Title */}
            <div
                className="w-full h-96 md:h-[34rem] bg-cover bg-center flex items-center justify-center text-white text-center"
                style={{ backgroundImage: `url(${service.image})` }}
            >
                <h1 className="text-4xl md:text-5xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                    {service.title}
                </h1>
            </div>

            {/* Subtitle */}
            <h3 className="text-center text-lg md:text-3xl text-black mt-7 font-semibold pr-4 pl-4 pt-4">
                {service.subtitle}
            </h3>

            {/* Services and Description - Side by Side */}
            <div className="mt-6 flex flex-col md:flex-row gap-6 px-[200px] pb-10">
                {/* Services List */}
                <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.services.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 p-3 md:p-4 border rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 transition duration-300"
                        >
                            <HiCheckCircle className="text-green-600 text-xl" />
                            <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                    ))}
                </div>

                {/* Description */}
                <div className="md:w-1/2">
                    <p className="text-gray-800 text-lg">{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
