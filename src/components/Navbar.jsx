import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react"; // Icons
import logo from "../assets/project_images/logo.webp"; // Import logo

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handlePhoneClick = () => {
        window.location.href = "tel:+6134567890";
    };

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo & Name */}
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                        <Link to="/" className="text-2xl font-bold">
                            <span className="text-blue-600">Green</span>
                            <span className="text-green-600">Scene</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link
                            to="/"
                            className="text-gray-700 font-semibold hover:text-green-600 transition-colors duration-300 ease-in-out"
                        >
                            Home
                        </Link>
                        <Link
                            to="/services"
                            className="text-gray-700 font-semibold hover:text-green-600 transition-colors duration-300 ease-in-out"
                        >
                            Services
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-700 font-semibold hover:text-green-600 transition-colors duration-300 ease-in-out"
                        >
                            Contact
                        </Link>
                        <button
                            onClick={handlePhoneClick}
                            className="flex items-center bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors duration-300 ease-in-out px-4 py-2 rounded-md"
                        >
                            <Phone size={18} className="mr-1" />
                            +61 3 4567 890
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(true)} className="text-gray-700">
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Full-Screen Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white text-lg space-y-6 z-50">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-6 text-white"
                    >
                        <X size={32} />
                    </button>
                    <Link
                        to="/"
                        className="hover:text-green-400 text-2xl font-semibold transition-colors duration-300 ease-in-out"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/services"
                        className="hover:text-green-400 text-2xl font-semibold transition-colors duration-300 ease-in-out"
                        onClick={() => setIsOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-green-400 text-2xl font-semibold transition-colors duration-300 ease-in-out"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                    <button
                        onClick={handlePhoneClick}
                        className="flex items-center bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors duration-300 ease-in-out px-4 py-2 rounded-md"
                    >
                        <Phone size={24} className="mr-2" />
                        +61 3 4567 890
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
