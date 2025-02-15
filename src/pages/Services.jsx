import body_corporate_cleaning_img from "../assets/service_images/individual_page/body_corporate_cleaning_individual.jpg";
import office_cleaning_img from "../assets/service_images/individual_page/office_cleaning_individual.jpg";
import garden_cleaning_img from "../assets/service_images/individual_page/garden_cleaning_individual.jpg";
import high_pressure_cleaning_img from "../assets/service_images/individual_page/high_pressure_cleaning_individual.jpg";
import window_cleaning_img from "../assets/service_images/individual_page/window_cleaning_individual.jpg";
import carpet_cleaning_img from "../assets/service_images/individual_page/carpet_cleaning_individual.jpg";
import car_park from "../assets/service_images/individual_page/car_park_cleaning_individual.jpg";
import bin_service from "../assets/service_images/individual_page/bin_cleaning_individual.jpg";
import move_in from "../assets/service_images/individual_page/move_in_cleaning_individual.jpg";
import end_lease from "../assets/service_images/individual_page/end_lease_cleaning_individual.jpg";
import common_area from "../assets/service_images/individual_page/common_area_cleaning_individual.jpg";
import industrial_cleaning from "../assets/service_images/individual_page/industrial_cleaning_individual.jpg";

const services = [
    {
        title: "Body Corporate Maintenance",
        description: "Maintain the pristine condition of your shared spaces with our tailored body corporate cleaning services. We ensure lobbies, hallways, and other communal areas stay spotless and inviting for residents and visitors.",
        image: body_corporate_cleaning_img,
        route: "/services/body-corporate-maintenance"
    },
    {
        title: "Commercial Offices Cleaning",
        description: "Create a professional and productive environment with our commercial office cleaning services. From desks to meeting rooms, we ensure every corner is clean, sanitized, and ready for business.",
        image: office_cleaning_img,
        route: "/services/commercial-offices-cleaning"
    },
    {
        title: "Gardening and Landscaping",
        description: "Enhance your property's curb appeal with our expert gardening and landscaping services. We specialize in garden maintenance, lawn care, and creating stunning outdoor spaces tailored to your needs.",
        image: garden_cleaning_img,
        route: "/services/gardening-and-landscaping"
    },
    {
        title: "Carpet Steam Cleaning",
        description: "Revitalize your carpets with our deep steam cleaning services. We remove dirt, allergens, and stains, restoring your carpets to their original plush condition and freshening up your space.",
        image: carpet_cleaning_img,
        route: "/services/carpet-steam-cleaning"
    },
    {
        title: "Window Cleaning",
        description: "Enjoy streak-free, crystal-clear views with our professional window cleaning. We ensure every pane, inside and out, is spotless and gleaming.",
        image: window_cleaning_img,
        route: "/services/window-cleaning"
    },
    {
        title: "High-Pressure Washing",
        description: "Blast away grime and dirt from driveways, walls, and outdoor areas with our powerful high-pressure washing service. Your surfaces will look like new again!",
        image: high_pressure_cleaning_img,
        route: "/services/high-pressure-washing"
    },
    {
        title:"Car Park Cleaning",
        description: "Keep your car parks clean, safe, and welcoming with our thorough car park cleaning services. We remove debris, oil stains, and litter to maintain a well-kept appearance.",
        image: car_park,
        route: "/services/car_cleaning"
    },
    {
        title:"Bin Services",
        description: "Say goodbye to bin odors and buildup with our reliable bin cleaning services. We clean and sanitize bins to ensure hygiene and a pleasant environment.",
        image: bin_service,
        route: "/services/bin_services"
    },
    {
        title:"Move-In Services",
        description: "Start fresh in your new home with our move-in cleaning services. We ensure every surface is spotless, sanitized, and move-in ready for your peace of mind.",
        image: move_in,
        route: "/services/move_in_services"
    },
    {
        title:"End of Lease Cleaning",
        description: "Secure your bond with our comprehensive end-of-lease cleaning. We cover everything from kitchens to carpets, ensuring your property meets inspection standards.",
        image: end_lease,
        route: "/services/end_of_leasing_cleaning"
    },
    {
        title:"Common Area Cleaning",
        description: "Ensure shared spaces are always clean and welcoming with our common area cleaning services. We keep hallways, lounges, and amenities spotless and well-maintained.",
        image: common_area,
        route: "/services/common_area_cleaning"
    },
    {
        title:"Industrial Cleaning",
        description: "Tackle tough cleaning jobs with our specialized industrial cleaning services. We handle factories, warehouses, and heavy-duty areas with efficiency and expertise.",
        image: industrial_cleaning,
        route: "/services/industrial_cleaning"
    },
];

import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="container mx-auto mt-10 px-4 pb-20">
            <h1 className="text-3xl font-bold text-center">Our Services</h1>
            <p className="text-lg mt-4 text-gray-700 text-center">
                Explore the wide range of property maintenance services we offer.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <Link to={service.route} key={index}>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{service.title}</h2>
                                <p className="text-gray-700 mt-2">{service.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Services;
