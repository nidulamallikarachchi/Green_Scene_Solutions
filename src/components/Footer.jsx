import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";

const cleaningServices = [
    { id: "car-park-cleaning", name: "Car Park Cleaning" },
    { id: "bin-services", name: "Bin Services" },
    { id: "move-in-services", name: "Move-in Services" },
    { id: "end-lease-cleaning", name: "End of Lease Cleaning" },
    { id: "common-area-cleaning", name: "Common Area Cleaning" },
    { id: "industrial-cleaning", name: "Industrial Cleaning" },
    { id: "construction-cleaning", name: "Construction Cleaning" }
];

const otherServices = [
    { id: "body-corporate-cleaning", name: "Body Corporate Maintenance" },
    { id: "office-cleaning", name: "Commercial Offices Cleaning" },
    { id: "gardening-cleaning", name: "Gardening and Landscaping" },
    { id: "carpet-cleaning", name: "Carpet Steam Cleaning" },
    { id: "window-cleaning", name: "Window Cleaning" },
    { id: "high-pressure-cleaning", name: "High-Pressure Washing" },
    { id: "home-care-services", name: "Home-Care Services" }
];

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {/* Cleaning Services Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Cleaning Services</h3>
                    <ul className="space-y-2">
                        {cleaningServices.map((service) => (
                            <li key={service.id}>
                                <Link
                                    to={`/services/${service.id}`}
                                    className="hover:underline"
                                >
                                    {service.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Other Services Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Other Services</h3>
                    <ul className="space-y-2">
                        {otherServices.map((service) => (
                            <li key={service.id}>
                                <Link
                                    to={`/services/${service.id}`}
                                    className="hover:underline"
                                >
                                    {service.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p>Phone: <a href="tel:+045455034" className="hover:underline">045 455 034</a></p>
                    <p>Email: <a href="mailto:service.greenscene@outlook.com" className="hover:underline">service.greenscene@outlook.com</a></p>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://facebook.com" className="hover:text-blue-600">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="https://linkedin.com" className="hover:text-blue-700">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://instagram.com" className="hover:text-pink-600">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-600 mt-6 pt-4 flex justify-between items-center">
                <div className="text-sm">
                    <Link to="/privacy-policy" className="hover:underline mr-4">Privacy Policy</Link>
                    <Link to="/services" className="hover:underline mr-4">Services</Link>
                    <Link to="/contact" className="hover:underline">Contact Us</Link>
                </div>
                <div className="text-sm">© 2025 Green Scene Property Maintenance. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;
