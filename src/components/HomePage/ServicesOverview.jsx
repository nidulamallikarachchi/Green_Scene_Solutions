import { Link } from 'react-router-dom';
import construction_cleaning from '../../assets/service_images/home_page/construction_cleaning.jpeg';
import body_corporate_cleaning from '../../assets/service_images/home_page/body_corporate_cleaning.jpeg';
import garden_cleaning from '../../assets/service_images/home_page/garden_cleaning.jpeg';
import move_in_cleaning from '../../assets/service_images/home_page/move_in_cleaning.jpeg';

const services = [
    {
        title: "Body Corporate Maintenance",
        description: "Professional cleaning services for body corporate properties to maintain a clean, safe, and welcoming environment.",
        image: `${body_corporate_cleaning}`,
    },
    {
        title: "Gardening and Landscaping",
        description: "Expert gardening and landscaping services to keep your outdoor spaces beautiful and well-maintained.",
        image: `${garden_cleaning}`,
    },
    {
        title: "Construction Cleaning",
        description: "Thorough cleaning after construction to remove debris, dust, and make your new space move-in ready.",
        image: `${construction_cleaning}`,
    },
    {
        title: "Move-In Cleaning",
        description: "Detailed cleaning services to ensure your new home or office is spotless and ready for you to move in.",
        image: `${move_in_cleaning}`,
    }
];

const ServicesOverview = () => {
    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Link key={index} to="/services" className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link to="/services" className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        Explore More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
