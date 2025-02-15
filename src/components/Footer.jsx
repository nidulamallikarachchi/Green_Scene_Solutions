import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10">
            {/* Footer Sections */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {/* Cleaning Services Section */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Cleaning Services</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li><Link to="/services/car_cleaning" className="hover:underline">Car Park Cleaning</Link></li>
                        <li><Link to="/services/bin_services" className="hover:underline">Bin Services</Link></li>
                        <li><Link to="/services/move_in_services" className="hover:underline">Move-in Services</Link></li>
                        <li><Link to="/services/end_of_leasing_cleaning" className="hover:underline">End of Lease Cleaning</Link></li>
                        <li><Link to="/services/common_area_cleaning" className="hover:underline">Common Area Cleaning</Link></li>
                        <li><Link to="/services/industrial_cleaning" className="hover:underline">Industrial Cleaning</Link></li>
                        <li><Link to="/services/construction_cleaning" className="hover:underline">Construction Cleaning</Link></li>
                    </ul>
                </div>

                {/* Other Services Section */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Other Services</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li><Link to="/services/body-corporate-maintenance" className="hover:underline">Body Corporate Maintenance</Link></li>
                        <li><Link to="/services/commercial-offices-cleaning" className="hover:underline">Commercial Offices Cleaning</Link></li>
                        <li><Link to="/services/gardening-and-landscaping" className="hover:underline">Gardening and Landscaping</Link></li>
                        <li><Link to="/services/carpet-steam-cleaning" className="hover:underline">Carpet Steam Cleaning</Link></li>
                        <li><Link to="/services/window-cleaning" className="hover:underline">Window Cleaning</Link></li>
                        <li><Link to="/services/high-pressure-washing" className="hover:underline">High-Pressure Washing</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li><strong>Phone:</strong> <a href="tel:045455034" className="hover:underline">045 455 034</a></li>
                        <li><strong>Email:</strong> <a href="mailto:service.greenscene@outlook.com" className="hover:underline">service.greenscene@outlook.com</a></li>
                    </ul>
                    <div className="flex space-x-4 mt-4">
                        <a href="/" className="text-gray-500 hover:text-[#87CEEB]"><FaFacebookF /></a>
                        <a href="/" className="text-gray-500 hover:text-[#87CEEB]"><FaLinkedin /></a>
                        <a href="/" className="text-gray-500 hover:text-[#87CEEB]"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-gray-200 text-gray-600 text-center py-4 mt-6">
                <div className="container mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                        <div className="footer-menu space-x-4">
                            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                            <Link to="/services" className="hover:underline">Services</Link>
                            <Link to="/contact" className="hover:underline">Contact Us</Link>
                        </div>
                        <p className="mt-4 sm:mt-0">© 2025 Green Scene Property Maintenance. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
