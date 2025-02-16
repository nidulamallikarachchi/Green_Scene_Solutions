import { useState, useEffect } from 'react';
import backgroundImage1 from '../../assets/project_images/background-1.jpeg';
import backgroundImage2 from '../../assets/project_images/background-2.jpeg';
import backgroundImage3 from '../../assets/project_images/background-3.jpg';

const HeroSection = () => {
    const images = [backgroundImage1, backgroundImage2, backgroundImage3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true); // State to control fade effect

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fading out
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true); // Start fading in after the image changes
            }, 500); // Delay to match the fade-out time
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [images.length]);

    return (
        <section
            className="relative h-[550px] bg-cover bg-center flex items-center justify-center text-white text-center"
            style={{ backgroundImage: `url(${images[currentImageIndex]})`, opacity: fade ? 1 : 0, transition: 'opacity 0.5s ease-in' }} // Fade effect
        >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 px-6 md:px-12 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Pristine Spaces, Professional Care!
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Melbourne’s trusted cleaning experts for homes & businesses. Experience spotless spaces with our eco-friendly solutions!
                </p>
                <a href="tel:+61XXXXXXXXX" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-lg transition">
                    Call Now
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
