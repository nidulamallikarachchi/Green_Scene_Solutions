import "react";
import HeroSection from "../components/HomePage/HeroSection.jsx";
import ServicesOverview from "../components/HomePage/ServicesOverview.jsx";
import WhyChooseUs from "../components/HomePage/WhyChooseUs.jsx";
import Testimonial from "../components/HomePage/Testimonial.jsx";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Testimonial />
            <ServicesOverview />
            <WhyChooseUs />
        </div>
    );
};

export default Home;
