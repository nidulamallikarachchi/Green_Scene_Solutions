import "react";
import HeroSection from "../components/HomePage/HeroSection.jsx";
import WhyChooseUs from "../components/HomePage/WhyChooseUs.jsx";
import Testimonial from "../components/HomePage/Testimonial.jsx";
import Commitment from "../components/HomePage/Commitment.jsx";
import OurClients from "../components/HomePage/OurClients.jsx"
import ServicesGrid from "../components/HomePage/ServicesGrid.jsx";
import CustomerTypes from "../components/HomePage/CustomerTypes.jsx";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <WhyChooseUs />
            <CustomerTypes/>
            <ServicesGrid/>
            <Testimonial />
            <OurClients/>
            <Commitment/>
        </div>
    );
};

export default Home;
