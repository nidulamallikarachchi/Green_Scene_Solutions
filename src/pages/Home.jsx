import "react";
import HeroSection from "../components/HomePage/HeroSection.jsx";
import ServicesOverview from "../components/HomePage/ServicesOverview.jsx";
import WhyChooseUs from "../components/HomePage/WhyChooseUs.jsx";
import Testimonial from "../components/HomePage/Testimonial.jsx";
import Commitment from "../components/HomePage/Commitment.jsx";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <WhyChooseUs />
            <ServicesOverview />
            <Testimonial />
            <Commitment/>


        </div>
    );
};

export default Home;
