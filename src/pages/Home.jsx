import "react";
import HeroSection from "../components/HomePage/HeroSection.jsx";
import WhyChooseUs from "../components/HomePage/WhyChooseUs.jsx";
import Testimonial from "../components/HomePage/Testimonial.jsx";
import Commitment from "../components/HomePage/Commitment.jsx";
import OurClients from "../components/HomePage/OurClients.jsx"
import ServicesGrid from "../components/HomePage/ServicesGrid.jsx";
import CustomerTypes from "../components/HomePage/CustomerTypes.jsx";
import WhatsappButton from "../utilities/WhatsappButton.jsx";
import SEO from "../components/SEO.jsx";

const Home = () => {
    return (
        <div>
            <SEO title="Green Scene Property Maintenance" description="Professional cleaning services for homes and businesses across Melbourne." />
            <HeroSection />
            <WhyChooseUs />
            <ServicesGrid/>
            <CustomerTypes/>
            <OurClients/>
            <Testimonial />
            <Commitment/>
            <WhatsappButton/>
        </div>
    );
};

export default Home;
