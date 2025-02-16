import backgroundImage from '../../assets/project_images/background.jpeg'; // Adjust the relative path if needed

const HeroSection = () => {
    return (
        <section
            className="relative h-[550px] bg-cover bg-center flex items-center justify-center text-white text-center"
            style={{ backgroundImage: `url(${backgroundImage})` }} // Use the imported image here
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
