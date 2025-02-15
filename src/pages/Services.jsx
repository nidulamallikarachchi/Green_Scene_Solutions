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
        description: "Keep lobbies and hallways spotless with our corporate cleaning services.",
        image: body_corporate_cleaning_img,
        route: "/services/body-corporate-maintenance"
    },
    {
        title: "Commercial Offices Cleaning",
        description: "Maintain a clean, professional workspace with our office cleaning services.",
        image: office_cleaning_img,
        route: "/services/commercial-offices-cleaning"
    },
    {
        title: "Gardening and Landscaping",
        description: "Boost curb appeal with expert gardening, lawn care, and landscaping tailored to your outdoor space.",
        image: garden_cleaning_img,
        route: "/services/gardening-and-landscaping"
    },
    {
        title: "Carpet Steam Cleaning",
        description: "Deep steam cleaning removes dirt, stains, and allergens, restoring your carpets to a fresh, plush state.",
        image: carpet_cleaning_img,
        route: "/services/carpet-steam-cleaning"
    },
    {
        title: "Window Cleaning",
        description: "Get streak-free, crystal-clear windows with our professional cleaning service, inside and out.",
        image: window_cleaning_img,
        route: "/services/window-cleaning"
    },
    {
        title: "High-Pressure Washing",
        description: "Remove dirt and grime from driveways, walls, and outdoor areas with our powerful high-pressure washing.",
        image: high_pressure_cleaning_img,
        route: "/services/high-pressure-washing"
    },
    {
        title: "Car Park Cleaning",
        description: "Keep car parks clean and safe with debris, oil stain, and litter removal for a well-kept appearance.",
        image: car_park,
        route: "/services/car_cleaning"
    },
    {
        title: "Bin Services",
        description: "Eliminate odors and buildup with our thorough bin cleaning and sanitization services.",
        image: bin_service,
        route: "/services/bin_services"
    },
    {
        title: "Move-In Services",
        description: "Ensure a spotless, sanitized home before moving in for a fresh start.",
        image: move_in,
        route: "/services/move_in_services"
    },
    {
        title: "End of Lease Cleaning",
        description: "Secure your bond with our detailed end-of-lease cleaning, covering kitchens, carpets, and more.",
        image: end_lease,
        route: "/services/end_of_leasing_cleaning"
    },
    {
        title: "Common Area Cleaning",
        description: "Keep hallways, lounges, and shared spaces clean and well-maintained at all times.",
        image: common_area,
        route: "/services/common_area_cleaning"
    },
    {
        title: "Industrial Cleaning",
        description: "Specialized industrial cleaning for factories, warehouses, and heavy-duty areas.",
        image: industrial_cleaning,
        route: "/services/industrial_cleaning"
    }
];

import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="container mx-auto mt-10 px-4 pb-20">
            <h1 className="text-3xl font-bold text-center">Our Services</h1>
            {/*<p className="text-lg mt-4 text-gray-700 text-center">*/}
            {/*    Explore the wide range of property maintenance services we offer.*/}
            {/*</p>*/}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <Link to={service.route} key={index}>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-[300px]">
                            <div className="relative w-full h-48">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4 flex flex-grow flex-col justify-between">
                                <h2 className="text-xl font-semibold">{service.title}</h2>
                                <p className="text-gray-700 mt-2 flex-grow">{service.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Services;
