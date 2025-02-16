import Navbar from "./components/Navbar";
import FooterNew from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/services/Services.jsx";
import ServiceDetails from "./pages/services/ServiceDetails.jsx";
import ScrollToTop from "./utilities/ScrollToTop.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";


function App() {
    return (
        <Router>
            <Navbar />
            <ScrollToTop />
            <div className="pt-16"> {/* Add padding to avoid navbar overlap */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/:id" element={<ServiceDetails />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
            </div>
            <FooterNew/>
        </Router>
    );
}

export default App;
